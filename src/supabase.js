import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qquawjbuiitizborewji.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdWF3amJ1aWl0aXpib3Jld2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxODQ2MzMsImV4cCI6MjAyNzc2MDYzM30.HKwbsHSN128wHpbGxCUnXRIBDLNIdiPnxUY7G_Kn73g';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
