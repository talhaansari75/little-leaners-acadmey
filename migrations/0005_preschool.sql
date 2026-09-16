-- Preschool learning cloud progress. One scoped row per authenticated account.
create table if not exists preschool_progress (
  user_id text primary key references "user"(id) on delete cascade,
  progress_json jsonb not null default '{}',
  revision bigint not null default 1 check (revision >= 1),
  updated_at timestamptz not null default now()
);
create index if not exists preschool_progress_updated_idx on preschool_progress(updated_at desc);
