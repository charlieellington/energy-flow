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
- **Task 06F** Post-sign-in UX (callback ➜ `/`, hide Join CTA)
- **Task 07A-E** Wait-list modal form fundamentals (migration for `note`, modal UI, UTM utils, server action, hero trigger)
- **Hot-fix** Anon-key fallback for public list (2025-05-27)

### 🟡 In-progress
- **Task 06** Magic-link auth (OTP)
  • 06C send-OTP (merged into `signInAction`)  ✅ 
  • 06D `/sign-in` page single-field form   ✅ 
  • 06E middleware session check & QA   ⏳
- **Task 07F** Smoke-test modal ➜ DB round-trip & mark complete
- **Task 08** Public wait-list list component (verify infinite scroll; polish)

### ⏳ Todo
- **Task 08a** Landing page demo section (static list placeholder)
- **Task 09** Packaging (README, `.env.example`, Vercel button, MIT licence)
- **Task 10** ESLint + Prettier + CI
- **Task 11** End-to-end deploy test

---

## Next Steps _(start here next session)_
1. Verify landing page wait-list renders rows locally → tick **Task 08**.
2. Smoke-test wait-list modal end-to-end (07F). If green, tick **07F** & **06E**.
3. Finish Task-06 QA (session refresh, README env-vars). When done, move Task 06 to ✅.
4. Sync dashboard migrations back into `supabase/migrations/` (ensure history matches git).
5. Kick-off **Task 09** (packaging) once above are complete.

---

## Decisions & Reference
- Styling: Tailwind utilities + shadcn/ui components only; no bespoke CSS without warning.
- Auth: email magic-link only (Supabase `auth.signInWithOtp`).
- Privacy: never expose user email publicly; `waitlist_public` view omits it; anon role only sees that view.
- DB idempotency: Supabase Cloud (PG 15) lacks `CREATE POLICY IF NOT EXISTS`; wrap in `DO $$ …` when needed.

---

## Changelog _(chronological history)_

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