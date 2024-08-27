import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gdklxrwkptrwhmhpqewe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdka2x4cndrcHRyd2htaHBxZXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NTc2MjksImV4cCI6MjA0MDMzMzYyOX0.4lZL1HEBg2iE4tRNR6Bna613_g4iPgbxK7RqYt4loSo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
