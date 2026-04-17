import { createClient } from '@supabase/supabase-js';

// Supabase browser client scaffold.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://example.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'public-anon-key',
);
