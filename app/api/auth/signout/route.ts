import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  const supabase = createClient();
  await supabase.auth.signOut();

  // Clear the session cookie and redirect to home
  return NextResponse.json({ message: "Signed out successfully" });
}
