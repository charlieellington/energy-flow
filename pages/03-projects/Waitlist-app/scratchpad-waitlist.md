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
- **Task 09a** Sync Supabase dashboard migrations back into `supabase/migrations/` ✅
- **Task 10b** ENV vars + README snippet ✅
- **Task 10c** Supabase SMTP wiring ✅
- **Task 10d** Welcome e-mail component & server action ✅
- **Task 10e** DX / packaging docs + smoke-test ✅
- **Task 10f** Final QA tweaks (welcome email flag, doc patch) ✅
- **Task 09c** Final packaging: README polish, repo badges, MIT licence text, helper scripts ✅

### 🟡 In-progress
- *(none – all Task-10 subtasks complete)*

### ⏳ Todo (next milestones)
Charlie to do (tomorrow):
- Update the copy on the homepage and README to reflect email magic-link flow powered by Re-Send.
- Design decision: add photo upload to wait-list rows (e.g. card layout like waitlist.sunni.be).
- End-to-end copy audit – remove dead sections and adjust flow step-by-step.
- Walk through the README as a first-time user, note friction points and patch.
- Review the original template repo for helper-file ideas to possibly port later (low priority).

---

## Next Steps _(release checklist)_
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
- Hot-fix: Added `suppressHydrationWarning` to `&lt;body&gt;` in `app/layout.tsx` to silence hydration mismatch caused by next-themes body style attribute.

---

## Open Questions / Help Needed
*(none right now)*