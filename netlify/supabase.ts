import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://dmfcudksqsnzqnxsgkjh.supabase.co'

export const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_SERVER_KEY!)
