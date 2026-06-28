import { createClient } from "@supabase/supabase-js";

/**
 * Admin Supabase client — uses the SERVICE ROLE key.
 *
 * ⚠️  NEVER import this in client components or pages.
 *     Only use inside app/api/ route handlers and lib/ server utilities.
 *     The service role key bypasses Row Level Security.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
