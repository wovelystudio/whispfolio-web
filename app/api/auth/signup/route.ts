import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { signUpSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = signUpSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const { name, email, password, role } = parsed.data;
    const supabase = createClient();

    // 1. Create the auth user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: name, role },
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    if (!data.user) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }

    // 2. Create the profile row using the admin client (bypasses RLS)
    const admin = createAdminClient();
    const baseUsername = email
      .split("@")[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const username = `${baseUsername}${Math.floor(Math.random() * 9000) + 1000}`;

    const { error: profileError } = await admin.from("profiles").insert({
      id: data.user.id,
      username,
      display_name: name,
      role,
    });

    if (profileError && profileError.code !== "23505") {
      // 23505 = unique violation — profile already exists from a trigger, that's fine
      console.error("[signup] Profile creation error:", profileError);
    }

    return NextResponse.json({
      user: { id: data.user.id, email: data.user.email, role, username },
      message: "Account created successfully",
    });
  } catch (err) {
    console.error("[signup] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
