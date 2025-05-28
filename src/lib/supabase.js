import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yipkauoffmctnyczlshm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcGthdW9mZm1jdG55Y3psc2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MzQzMTksImV4cCI6MjA2NDAxMDMxOX0.n-Z3yW4ecLCDDTQ-5ET4kTs57QvMnzcIcPZu4vMqZyI";

export const supabase = createClient(supabaseUrl, supabaseKey);
