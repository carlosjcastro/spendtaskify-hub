import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ngkrrixfewuplvkqmzfw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5na3JyaXhmZXd1cGx2a3FtemZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MTk5ODcsImV4cCI6MjA3ODI5NTk4N30.qzrQFPt6GlgPxecS7sM-CM52r8qDvKiH8eflEHJoIv0';

export const supabase = createClient(supabaseUrl, supabaseKey);
