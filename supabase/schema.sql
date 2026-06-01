-- Plan Happy Wealth — Supabase schema
-- Run in the Supabase SQL editor (or via the CLI) to enable lead capture.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text,
  email       text not null,
  phone       text,
  goal        text,
  source      text default 'website',
  score       int,
  created_at  timestamptz not null default now()
);

create index if not exists leads_email_idx   on public.leads (email);
create index if not exists leads_created_idx  on public.leads (created_at desc);

-- Optional: store anonymized Financial Health Score submissions for analytics.
create table if not exists public.assessments (
  id           uuid primary key default gen_random_uuid(),
  overall      int,
  protection   int,
  investment   int,
  retirement   int,
  tax          int,
  age          int,
  created_at   timestamptz not null default now()
);

-- Row Level Security: lock down direct client access.
-- Writes happen only through the server route using the service-role key,
-- which bypasses RLS. No public policies are granted by default.
alter table public.leads        enable row level security;
alter table public.assessments  enable row level security;
