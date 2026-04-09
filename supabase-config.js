const SUPABASE_URL = 'https://kpzkjytpbyzhurbvnoyh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwemtqeXRwYnl6aHVyYnZub3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2OTA2NDMsImV4cCI6MjA5MTI2NjY0M30.fkmq5eanpSkSlnsnhLgUZ94b-6kZ4W7mqL1Dvo4vpcQ';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const AVATAR_BUCKET = 'avatars';
const JOB_BUCKET = 'job-images';
const PRODUCT_BUCKET = 'product-images';