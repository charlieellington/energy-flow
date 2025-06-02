---
title: Scratchpad Waitlist
---

# Scratchpad Waitlist

# Waitlist Kit – Scratchpad
_A lightweight wait-list template (Next 14 × Tailwind × shadcn/ui × Supabase)._

## Background & Motivation
Makers often need nothing more than a **"coming-soon + join the wait-list"** page. SaaS offerings charge monthly, and DIY setups are repetitive. The goal of **Waitlist Kit** is to ship a **one-click-deploy** repo that anyone can fork or buy, press **Deploy to Vercel**, add Supabase keys, tweak `content.json`, and be live in minutes.

Design pillars

• Zero-config deploy (Vercel × Supabase integration runs SQL migrations automatically).  
• Password-less auth by default (email magic-link). Google OAuth can be enabled later by dropping creds into Supabase.  
• Public list view (names optionally anonymised) — never expose email.  
• Styling: Tailwind utility classes + shadcn/ui — no custom CSS.  
• Low-code audience: minimal edits, clear instructions, MIT-licensed template.

For the full spec & packaging details see `project-plan.mdx` in the same folder.

---

## Master Task Board _(single source of truth)_

### Section keys
- ✅ **Done**: completed tasks verified in main branch.
- 🟡 **In-progress**: actively worked on right now.
- ⏳ **Todo**: next agreed tasks, scheduled but not started.
- 🗂️ **Backlog**: parked ideas / blocked items for future review.
- 🚀 **Next Steps**: To release public version 

### ✅ Done
- **Task 01** Repo skeleton
- **Task 02** Tailwind + shadcn/ui baseline
- **Task 03** Supabase helpers (client / server / middleware)
- **Task 04** Initial SQL migration + RLS (insert / select)
- **Task 05** Landing page (hero, modal trigger, copy from `content.json`)
- **Task 06** Magic-link auth series complete (A-F inc. middleware) ✅
- **Task 07A-F** Wait-list modal form (fields, action, round-trip smoke-test) ✅
- **Task 08** Public wait-list list component verified & polished ✅
- **Task 08a** Landing-page static demo section ✅
- **Task 09b** Deploy button → minimal URL shows env-var wizard ✅
- **Hot-fix** Anon-key fallback for public list (2025-05-27)
- **Task 09a** Sync Supabase dashboard migrations back into `supabase/migrations/` ✅
- **Task 10b** ENV vars + README snippet ✅
- **Task 10c** Supabase SMTP wiring ✅
- **Task 10d** Welcome e-mail component & server action ✅
- **Task 10e** DX / packaging docs + smoke-test ✅
- **Task 10f** Final QA tweaks (welcome email flag, doc patch) ✅
- **Task 09c** Final packaging: README polish, repo badges, MIT licence text, helper scripts ✅
- **Copy Update** Landing-page product name, hero subtitle (Resend), footer credits, removed "Next steps" section ✅
- **Copy Update** Waitlist headers & spacing tweaks: centred header, reduced waitlist top margin (mt-8 → mt-4) and hero bottom padding (py-16 → pt-16 pb-8) ✅

### 🟡 In-progress

(empty currently)

### ⏳ Todo 

- Go through the app step by step for small UX and copy changes to get it ready for No Bad Parts Landing (ignore polish for public version as taking too much time, everything else moves to the backlog). 

### 🗂️ Backlog

- **Profile photos & join reason follow-ups**
  - Ranking mechanic requires further QA – current implementation sets negative ranks but list reordering not yet reliable.
  - Investigate promote endpoint ordering bug (see discussion 2025-06-02).
  - Tests & docs outstanding.
  - Status: 
  - **Task 11** Profile photos & join reason  
  - **T11A** DB + storage foundations (`avatar_url`, `join_reason`; avatars bucket) – reuse storage policy from Sunni *waitlist-app*.  
  - ~~**T11B** Fallback avatar logic (initial letter circle, anon-animal via CDN) – port helper logic from Sunni code.~~ ✅
  - ~~**T11C** Waitlist table UI update (Avatar component).~~ ✅
  - ~~**T11D** Profile completion flow (photo upload card → reason card).~~ ✅  
  - **T11E** UX polish & ranking bonus  
    - ~~**E1** DB migration: add `rank` INTEGER DEFAULT NULL, index on `(rank, created_at)`.~~ ✅  
    - ~~**E2** List query: order by `coalesce(rank, 2147483647)`, then `created_at`.~~ ✅  
    - ~~**E3** Bonus helper (rank bump endpoint)~~ 🟡 implemented – needs QA.  
    - **E4** Photo & reason flows call the helper ✅  
    - **E5** UI tweaks (layout, dynamic copy, highlight) ✅  
    - **E6** Tests & docs.

- **Review the original template repo for helper-file ideas to possibly port later (low priority).**

- **Walk through the README as a first-time user, note friction points and patch.**

### 🚀 Next Steps _(release checklist)_

1. Run `pnpm lint && pnpm build` locally – both should pass without error.
2. Tag **v1.0.0** and push to GitHub.
3. Publish the template or send to marketplace.
4. Celebrate 🥳

Ensure Vercel deploy wizard now pulls our template, user to smoke-test.

---

## Decisions & Reference
- Styling: Tailwind utilities + shadcn/ui components only; no bespoke CSS without warning.
- Auth: email magic-link only (Supabase `auth.signInWithOtp`).
- Privacy: never expose user email publicly; `waitlist_public` view omits it; anon role only sees that view.
- DB idempotency: Supabase Cloud (PG 15) lacks `CREATE POLICY IF NOT EXISTS`; wrap in `DO $$ …` when needed.

---

## Changelog _(chronological history)_

### 2025-05-29
- Middleware QA passed; **Task 06E** complete, closing Task-06 series.
- Modal smoke-test succeeded; **Task 07F** complete.
- Public list verified; **Task 08** complete.
- Landing-page static demo added; **Task 08a** complete.

### 2025-05-28
- Planning session: reviewed outstanding items, confirmed **Task 08** (public wait-list verification) is next, and outlined step-by-step plan.

### 2025-05-27
- **End-of-day checkpoint** – list API fixed (anon-key fallback); list component implemented; scratchpad reorganised.
- Hot-fix: fallback to anon key (`utils/supabase/admin.ts`).
- Repo sync to GitHub, port 3010 dev server running.

### 2025-05-26
- Snapshot commit **"Clean Start"** – repo + .cursor scaffold.
- Cloned reference repo `signup/` for inspection.
- Landing page hero built, modal integration planned.
- Task-06/07 clarifications received (OTP-only auth, modal fields, tracking).
- Sub-task progress: 06A-B done, 07A-E implemented.

### 2025-05-31
- **Task 09a** initiated – running `supabase db diff` to capture latest schema into new migration file.
- **Task 09a** completed – migration file `004_schema_sync_20250531.sql` generated from remote DB.

### 2025-06-01
- Hot-fix: Added `suppressHydrationWarning` to `<body>` in `app/layout.tsx` to silence hydration mismatch caused by next-themes body style attribute.

### 2025-06-02
- Removed obsolete `email-plan.md` after Task-10 completion.

### 2025-06-05
- Added "Freeze & Duplicate Quick Checklist" doc (`pages/02-developer-docs/waitlist-freeze-duplicate.md`) to help park the template and fork a personal copy.

---

## Open Questions / Help Needed
*(none right now)*