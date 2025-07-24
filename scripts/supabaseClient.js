// app.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://diapkoorhzhonbiooaui.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpYXBrb29yaHpob25iaW9vYXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNTc2NTcsImV4cCI6MjA2ODkzMzY1N30.qyBQl34t4hJNFGTl3s0hiRns3ZplTfO4yZBlM_2CT7E"
);

export default supabase;
