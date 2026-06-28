-- ═══════════════════════════════════════════════════════════
--  Wispfolio — Initial Database Schema
--  Run this in the Supabase SQL Editor (one-time setup)
-- ═══════════════════════════════════════════════════════════

-- ── Enable useful extensions ──────────────────────────────
create extension if not exists "pgcrypto";


-- ═══════════════════════════════════════════════════════════
--  TABLE: profiles
--  One row per auth.users entry.
-- ═══════════════════════════════════════════════════════════
create table public.profiles (
  id              uuid primary key references auth.users(id) on delete cascade,
  username        text unique not null,
  display_name    text,
  avatar_url      text,
  bio             text,
  website         text,
  twitter         text,
  role            text not null default 'follower'
                    check (role in ('follower', 'creator', 'admin')),
  tier            text not null default 'free'
                    check (tier in ('free', 'creator', 'studio')),
  is_verified     boolean not null default false,
  is_banned       boolean not null default false,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();


-- ═══════════════════════════════════════════════════════════
--  TABLE: projects
-- ═══════════════════════════════════════════════════════════
create table public.projects (
  id              uuid primary key default gen_random_uuid(),
  creator_id      uuid not null references public.profiles(id) on delete cascade,
  name            text not null,
  slug            text unique not null,
  tagline         text,
  description     text,
  category        text,
  stage           text default 'planning'
                    check (stage in ('planning', 'design', 'development', 'beta', 'launched')),
  progress        integer not null default 0 check (progress >= 0 and progress <= 100),
  visibility      text not null default 'public'
                    check (visibility in ('public', 'private')),
  banner_url      text,
  icon_url        text,
  website_url     text,
  github_url      text,
  twitter_url     text,
  followers_count integer not null default 0,
  updates_count   integer not null default 0,
  is_active       boolean not null default true,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create trigger projects_updated_at
  before update on public.projects
  for each row execute procedure public.handle_updated_at();

create index projects_creator_id_idx on public.projects(creator_id);
create index projects_slug_idx on public.projects(slug);
create index projects_visibility_idx on public.projects(visibility);


-- ═══════════════════════════════════════════════════════════
--  TABLE: updates  (proof wall posts + milestones)
-- ═══════════════════════════════════════════════════════════
create table public.updates (
  id              uuid primary key default gen_random_uuid(),
  project_id      uuid not null references public.projects(id) on delete cascade,
  creator_id      uuid not null references public.profiles(id) on delete cascade,
  title           text not null,
  content         text not null,
  tag             text,
  image_url       text,
  is_milestone    boolean not null default false,
  likes_count     integer not null default 0,
  comments_count  integer not null default 0,
  created_at      timestamptz not null default now()
);

create index updates_project_id_idx on public.updates(project_id);


-- ═══════════════════════════════════════════════════════════
--  TABLE: likes  (on updates)
-- ═══════════════════════════════════════════════════════════
create table public.likes (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  update_id   uuid not null references public.updates(id) on delete cascade,
  created_at  timestamptz not null default now(),
  unique(user_id, update_id)
);

-- Auto-increment / decrement likes_count
create or replace function public.handle_like_insert()
returns trigger language plpgsql security definer as $$
begin
  update public.updates set likes_count = likes_count + 1 where id = new.update_id;
  return new;
end;
$$;

create or replace function public.handle_like_delete()
returns trigger language plpgsql security definer as $$
begin
  update public.updates set likes_count = greatest(likes_count - 1, 0) where id = old.update_id;
  return old;
end;
$$;

create trigger likes_insert_trigger after insert on public.likes for each row execute procedure public.handle_like_insert();
create trigger likes_delete_trigger after delete on public.likes for each row execute procedure public.handle_like_delete();


-- ═══════════════════════════════════════════════════════════
--  TABLE: comments
-- ═══════════════════════════════════════════════════════════
create table public.comments (
  id          uuid primary key default gen_random_uuid(),
  update_id   uuid not null references public.updates(id) on delete cascade,
  author_id   uuid not null references public.profiles(id) on delete cascade,
  content     text not null,
  likes_count integer not null default 0,
  created_at  timestamptz not null default now()
);

create index comments_update_id_idx on public.comments(update_id);

-- Auto-update comments_count on updates
create or replace function public.handle_comment_insert()
returns trigger language plpgsql security definer as $$
begin
  update public.updates set comments_count = comments_count + 1 where id = new.update_id;
  return new;
end;
$$;

create or replace function public.handle_comment_delete()
returns trigger language plpgsql security definer as $$
begin
  update public.updates set comments_count = greatest(comments_count - 1, 0) where id = old.update_id;
  return old;
end;
$$;

create trigger comments_insert_trigger after insert on public.comments for each row execute procedure public.handle_comment_insert();
create trigger comments_delete_trigger after delete on public.comments for each row execute procedure public.handle_comment_delete();


-- ═══════════════════════════════════════════════════════════
--  TABLE: follows  (user follows a project)
-- ═══════════════════════════════════════════════════════════
create table public.follows (
  id          uuid primary key default gen_random_uuid(),
  follower_id uuid not null references public.profiles(id) on delete cascade,
  project_id  uuid not null references public.projects(id) on delete cascade,
  created_at  timestamptz not null default now(),
  unique(follower_id, project_id)
);

create index follows_follower_id_idx on public.follows(follower_id);
create index follows_project_id_idx on public.follows(project_id);

-- Auto-update followers_count on projects
create or replace function public.handle_follow_insert()
returns trigger language plpgsql security definer as $$
begin
  update public.projects set followers_count = followers_count + 1 where id = new.project_id;
  return new;
end;
$$;

create or replace function public.handle_follow_delete()
returns trigger language plpgsql security definer as $$
begin
  update public.projects set followers_count = greatest(followers_count - 1, 0) where id = old.project_id;
  return old;
end;
$$;

create trigger follows_insert_trigger after insert on public.follows for each row execute procedure public.handle_follow_insert();
create trigger follows_delete_trigger after delete on public.follows for each row execute procedure public.handle_follow_delete();


-- ═══════════════════════════════════════════════════════════
--  TABLE: inspiration_items
-- ═══════════════════════════════════════════════════════════
create table public.inspiration_items (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid not null references public.projects(id) on delete cascade,
  creator_id  uuid not null references public.profiles(id) on delete cascade,
  title       text not null,
  url         text,
  image_url   text,
  category    text default 'Other'
                check (category in ('Design', 'Code', 'UX', 'Marketing', 'Other')),
  note        text,
  created_at  timestamptz not null default now()
);

create index inspiration_project_id_idx on public.inspiration_items(project_id);


-- ═══════════════════════════════════════════════════════════
--  TABLE: checklist_items
-- ═══════════════════════════════════════════════════════════
create table public.checklist_items (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid not null references public.projects(id) on delete cascade,
  title       text not null,
  is_done     boolean not null default false,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger checklist_updated_at
  before update on public.checklist_items
  for each row execute procedure public.handle_updated_at();

create index checklist_project_id_idx on public.checklist_items(project_id);


-- ═══════════════════════════════════════════════════════════
--  TABLE: assets
-- ═══════════════════════════════════════════════════════════
create table public.assets (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid not null references public.projects(id) on delete cascade,
  creator_id  uuid not null references public.profiles(id) on delete cascade,
  name        text not null,
  file_url    text not null,
  file_type   text default 'other'
                check (file_type in ('image', 'document', 'figma', 'video', 'other')),
  size_bytes  bigint,
  created_at  timestamptz not null default now()
);

create index assets_project_id_idx on public.assets(project_id);


-- ═══════════════════════════════════════════════════════════
--  TABLE: milestones  (progress tracker)
-- ═══════════════════════════════════════════════════════════
create table public.milestones (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid not null references public.projects(id) on delete cascade,
  label       text not null,
  is_done     boolean not null default false,
  target_date date,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger milestones_updated_at
  before update on public.milestones
  for each row execute procedure public.handle_updated_at();

create index milestones_project_id_idx on public.milestones(project_id);


-- ═══════════════════════════════════════════════════════════
--  TABLE: share_settings  (per project public page config)
-- ═══════════════════════════════════════════════════════════
create table public.share_settings (
  id              uuid primary key default gen_random_uuid(),
  project_id      uuid unique not null references public.projects(id) on delete cascade,
  show_progress   boolean not null default true,
  show_checklist  boolean not null default false,
  show_proof_wall boolean not null default true,
  show_followers  boolean not null default true,
  custom_slug     text unique,
  updated_at      timestamptz not null default now()
);

create trigger share_settings_updated_at
  before update on public.share_settings
  for each row execute procedure public.handle_updated_at();


-- ═══════════════════════════════════════════════════════════
--  TABLE: notifications
-- ═══════════════════════════════════════════════════════════
create table public.notifications (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  type        text not null
                check (type in ('new_follower', 'new_comment', 'new_like', 'milestone', 'system')),
  message     text not null,
  link        text,
  is_read     boolean not null default false,
  created_at  timestamptz not null default now()
);

create index notifications_user_id_idx on public.notifications(user_id);
create index notifications_is_read_idx on public.notifications(user_id, is_read);


-- ═══════════════════════════════════════════════════════════
--  ROW LEVEL SECURITY (RLS) POLICIES
-- ═══════════════════════════════════════════════════════════

-- Enable RLS on all tables
alter table public.profiles         enable row level security;
alter table public.projects         enable row level security;
alter table public.updates          enable row level security;
alter table public.likes            enable row level security;
alter table public.comments         enable row level security;
alter table public.follows          enable row level security;
alter table public.inspiration_items enable row level security;
alter table public.checklist_items  enable row level security;
alter table public.assets           enable row level security;
alter table public.milestones       enable row level security;
alter table public.share_settings   enable row level security;
alter table public.notifications    enable row level security;


-- ── PROFILES ──────────────────────────────────────────────
-- Anyone can read public profiles
create policy "profiles_public_read"
  on public.profiles for select
  using (is_banned = false);

-- Users can update only their own profile
create policy "profiles_own_update"
  on public.profiles for update
  using (auth.uid() = id);


-- ── PROJECTS ──────────────────────────────────────────────
-- Public projects are readable by everyone
create policy "projects_public_read"
  on public.projects for select
  using (visibility = 'public' or creator_id = auth.uid());

-- Creators can create projects
create policy "projects_create"
  on public.projects for insert
  with check (auth.uid() = creator_id);

-- Only the creator can update/delete their project
create policy "projects_own_update"
  on public.projects for update
  using (auth.uid() = creator_id);

create policy "projects_own_delete"
  on public.projects for delete
  using (auth.uid() = creator_id);


-- ── UPDATES ──────────────────────────────────────────────
-- Readable if the project is public
create policy "updates_public_read"
  on public.updates for select
  using (
    exists (
      select 1 from public.projects p
      where p.id = project_id and (p.visibility = 'public' or p.creator_id = auth.uid())
    )
  );

create policy "updates_creator_insert"
  on public.updates for insert
  with check (auth.uid() = creator_id);

create policy "updates_creator_delete"
  on public.updates for delete
  using (auth.uid() = creator_id);


-- ── LIKES ────────────────────────────────────────────────
create policy "likes_read"
  on public.likes for select using (true);

create policy "likes_insert"
  on public.likes for insert
  with check (auth.uid() = user_id);

create policy "likes_delete"
  on public.likes for delete
  using (auth.uid() = user_id);


-- ── COMMENTS ─────────────────────────────────────────────
create policy "comments_read"
  on public.comments for select using (true);

create policy "comments_insert"
  on public.comments for insert
  with check (auth.uid() = author_id);

create policy "comments_delete"
  on public.comments for delete
  using (auth.uid() = author_id);


-- ── FOLLOWS ──────────────────────────────────────────────
create policy "follows_read"
  on public.follows for select using (true);

create policy "follows_insert"
  on public.follows for insert
  with check (auth.uid() = follower_id);

create policy "follows_delete"
  on public.follows for delete
  using (auth.uid() = follower_id);


-- ── INSPIRATION / CHECKLIST / ASSETS / MILESTONES ────────
-- Only the creator of the project can read/write these
create policy "inspiration_creator_only"
  on public.inspiration_items for all
  using (auth.uid() = creator_id)
  with check (auth.uid() = creator_id);

create policy "checklist_creator_only"
  on public.checklist_items for all
  using (
    exists (select 1 from public.projects p where p.id = project_id and p.creator_id = auth.uid())
  )
  with check (
    exists (select 1 from public.projects p where p.id = project_id and p.creator_id = auth.uid())
  );

create policy "assets_creator_only"
  on public.assets for all
  using (auth.uid() = creator_id)
  with check (auth.uid() = creator_id);

create policy "milestones_creator_only"
  on public.milestones for all
  using (
    exists (select 1 from public.projects p where p.id = project_id and p.creator_id = auth.uid())
  )
  with check (
    exists (select 1 from public.projects p where p.id = project_id and p.creator_id = auth.uid())
  );


-- ── SHARE SETTINGS ───────────────────────────────────────
-- Public can read share settings for public projects
create policy "share_settings_public_read"
  on public.share_settings for select
  using (
    exists (select 1 from public.projects p where p.id = project_id and p.visibility = 'public')
    or exists (select 1 from public.projects p where p.id = project_id and p.creator_id = auth.uid())
  );

create policy "share_settings_creator_write"
  on public.share_settings for all
  using (
    exists (select 1 from public.projects p where p.id = project_id and p.creator_id = auth.uid())
  )
  with check (
    exists (select 1 from public.projects p where p.id = project_id and p.creator_id = auth.uid())
  );


-- ── NOTIFICATIONS ─────────────────────────────────────────
create policy "notifications_own"
  on public.notifications for all
  using (auth.uid() = user_id);


-- ═══════════════════════════════════════════════════════════
--  STORAGE BUCKETS
--  Run these separately in Supabase Dashboard > Storage
--  OR via the SQL editor if you prefer SQL approach.
-- ═══════════════════════════════════════════════════════════

-- Create storage buckets (run in SQL editor)
insert into storage.buckets (id, name, public)
values
  ('avatars',    'avatars',    true),
  ('banners',    'banners',    true),
  ('proof',      'proof',      true),
  ('assets',     'assets',     false),  -- private, served via signed URLs
  ('inspiration','inspiration', false)  -- private
on conflict (id) do nothing;

-- Storage RLS: avatars (public read, authenticated write)
create policy "avatars_public_read"
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "avatars_authenticated_write"
  on storage.objects for insert
  with check (bucket_id = 'avatars' and auth.uid() is not null);

-- Banners
create policy "banners_public_read"
  on storage.objects for select
  using (bucket_id = 'banners');

create policy "banners_authenticated_write"
  on storage.objects for insert
  with check (bucket_id = 'banners' and auth.uid() is not null);

-- Proof wall (public read)
create policy "proof_public_read"
  on storage.objects for select
  using (bucket_id = 'proof');

create policy "proof_authenticated_write"
  on storage.objects for insert
  with check (bucket_id = 'proof' and auth.uid() is not null);

-- Assets (owner-only via signed URL)
create policy "assets_owner_read"
  on storage.objects for select
  using (bucket_id = 'assets' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "assets_owner_write"
  on storage.objects for insert
  with check (bucket_id = 'assets' and auth.uid()::text = (storage.foldername(name))[1]);


-- ═══════════════════════════════════════════════════════════
--  HELPER: Auto-create profile when a new user signs up
--  (Optional — backup for cases where the API call fails)
-- ═══════════════════════════════════════════════════════════
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  base_username text;
  final_username text;
  counter int := 0;
begin
  base_username := regexp_replace(split_part(new.email, '@', 1), '[^a-z0-9]', '', 'g');
  final_username := base_username || floor(random() * 9000 + 1000)::text;

  -- Ensure uniqueness (retry up to 10 times)
  while exists (select 1 from public.profiles where username = final_username) and counter < 10 loop
    final_username := base_username || floor(random() * 90000 + 10000)::text;
    counter := counter + 1;
  end loop;

  insert into public.profiles (id, username, display_name, role)
  values (
    new.id,
    final_username,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'role', 'follower')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
