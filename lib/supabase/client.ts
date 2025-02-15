import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function initClient(): SupabaseClient {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return supabase;
}
