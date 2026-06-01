import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client (service role).
 * Returns null when env is absent so the app runs on mock behaviour locally.
 * Never import this in a Client Component — it uses the service-role key.
 */
export function getServiceClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export const isSupabaseConfigured = () =>
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
