import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://aptimmndpjgiesezqcmg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdGltbW5kcGpnaWVzZXpxY21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2NTU2MDMsImV4cCI6MTk3MzIzMTYwM30.yJfr0r7Y_QBuXOrxQmhKSPY41mmOeKzz0UL-pXWXSHg"
);
