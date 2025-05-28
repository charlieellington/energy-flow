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

### 🟡 In-progress
*(none – board is catching up to reality)*

### ⏳ Todo (next milestones)
- **Task 09a** Sync Supabase dashboard migrations back into `supabase/migrations/` (ensure git history matches cloud).
- **Task 09c** Final packaging: tweak copy, repo badges, MIT licence text, NPM script hints.

---

## Next Steps _(start here next session)_
1. Export latest SQL from dashboard → commit under `supabase/migrations/` (**Task 09a**).
2. Polish packaging items & README badges (**Task 09c**).

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

---

## Open Questions / Help Needed
*(none right now)*