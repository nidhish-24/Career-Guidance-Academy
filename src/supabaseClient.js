import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ynxaefjfjqwpolkidedc.supabase.co";
const supabaseKey = "sb_publishable_rkOU6NnWJpFdWqnZM95NPQ_mn1xTu6C";

export const supabase = createClient(supabaseUrl, supabaseKey);
