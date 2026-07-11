/*
# Create messages table for contact form submissions

1. New Tables
- `messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email address
  - `subject` (text, nullable) — optional subject line
  - `message` (text, not null) — the body of the message
  - `read` (boolean, default false) — flag for whether the owner has read it
  - `created_at` (timestamptz, default now()) — submission timestamp
2. Security
- Enable RLS on `messages`.
- This is a no-auth portfolio site, so the public (anon) can INSERT new messages.
- Only inserts are allowed from anon; no public SELECT/UPDATE/DELETE to protect message privacy.
3. Indexes
- `messages_created_at_idx` on `created_at` for ordering.
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a contact message
DROP POLICY IF EXISTS "anon_insert_messages" ON messages;
CREATE POLICY "anon_insert_messages"
ON messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- No public SELECT/UPDATE/DELETE — messages are private to the portfolio owner
-- (managed via the Supabase dashboard / service-role key)

CREATE INDEX IF NOT EXISTS messages_created_at_idx ON messages (created_at DESC);
