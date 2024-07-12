
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASEURL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)