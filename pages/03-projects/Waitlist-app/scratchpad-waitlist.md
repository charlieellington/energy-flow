## 2025-05-26
- Snapshot commit "Clean Start" created in `waitlist-landing` repository (includes initial .cursor setup).
- - Reference repository `signup` cloned into workspace as `signup/` for code inspection.

---

# Planner Sections (2025-05-26)

## Background & Motivation
We are building **Waitlist Kit** – a minimal, self-hosted wait-list website that anyone can deploy to Vercel in one click.

Why it matters:
1. Most makers just need a simple "coming soon" page with sign-up capture.  
2. Existing SaaS products charge monthly; we want a **one-time template** people can buy or clone.  
3. The template must feel **effortless**: push *Deploy → Vercel*, add Supabase keys, customise copy, done.

## Key Challenges
1. **Zero-config deploy** – ensure the Vercel × Supabase integration runs SQL migrations automatically.  
2. **Auth flow** – Email magic-link only (no Google OAuth).  
3. **UI consistency** – Use **Tailwind + shadcn/ui** components; avoid custom CSS unless flagged.  
4. **Packaging** – deliver docs, `.env.example`, `supabase/config.toml`, **Deploy to Vercel** button.  
5. **Multi-tenant customisation** – editable `content.json`; no code edits needed for copy.  
6. **Public read safety** – expose list publicly; add RLS `SELECT` policy allowing anon.  
7. **Build hygiene** – ESLint, Prettier & simple CI workflow.  
8. **Size & Clarity** – keep ≤250 lines per file per CONTRIBUTING rules.

## High-level Task Breakdown
- [ ] Repo skeleton: `npx create-next-app@latest waitlist-kit --ts --tailwind` (pin **Next 14.x**), package manager **pnpm**.  
- [ ] Add baseline styling (Tailwind, global layout) + install **shadcn/ui**.
- [ ] Create Supabase client helpers (`lib/supabase.ts`).
- [ ] Write SQL migration `000_waitlist.sql` for `waitlist_signups` table + RLS.
- [x] Landing page (`app/page.tsx`) reading copy from `content.json`.
- [ ] Auth component with email magic-link form.
- [ ] Insert signup via Supabase on submit.
- [ ] List page (`/list`) showing sign-ups ordered by `created_at`.
- - [ ] Landing page waitlist demo section (placeholder list, implement after list components ready).
- [ ] Hide-my-name toggle on form; store `hidden` flag.
- [ ] RLS read policy allowing anonymous `SELECT`.
- [ ] Add ESLint + Prettier config and GitHub Actions CI.
- [ ] Package template (MIT licence):  
  - [ ] `.env.example`  
  - [ ] `supabase/config.toml`  
  - [ ] `vercel.json` runtime opts  
  - [ ] README with **Deploy to Vercel** button.
- [ ] Smoke-test one-click deploy.
- [ ] Interactive onboarding tutorial (guided steps to link Supabase, sign up first user, view protected page)
  - Reuse `components/tutorial/*` files; tailor copy for Waitlist Kit (Supabase link, first signup, protected page walkthrough)
  - Add hide logic once env vars present & at least one signup exists
- [ ] Launch tweet / docs (out of scope for code).

## Project Status Board
- [x] **Task 01** – Repo skeleton created (based on Supabase × Next.js starter, committed & deployed)  
- [x] **Task 02** – Tailwind + shadcn/ui baseline present in template  
- [x] **Task 03** – Supabase helpers (client/server + middleware) verified  
- [x] **Task 04** – SQL migration (+ RLS insert & select)  
- [x] **Task 05** – Landing page  
- [ ] **Task 06** – Auth (email magic link)  
- [ ] **Task 07** – Write to DB + hide-name toggle  
- [ ] **Task 08** – List page  
- [ ] **Task 08a** – Landing page waitlist demo (placeholder)  
- [ ] **Task 09** – Packaging (README, env, Vercel button, MIT licence)  
- [ ] **Task 10** – ESLint + Prettier + CI  
- [ ] **Task 11** – End-to-end deploy test

## Executor's Feedback or Assistance Requests
- **2025-05-26 – Task 05 Kick-off (Landing page)**
  1. Create `content.json` at repo root to hold editable copy (heroTitle, heroSubtitle, ctaText, featureBullets, etc.).
  2. Replace the generic `Hero` component with a new `LandingHero` that consumes `content.json` and uses shadcn/ui `Button` for the primary call-to-action (`/sign-up`).
  3. Update `app/page.tsx` to render `LandingHero` above the interactive tutorial steps (kept as-is).
  4. Use only Tailwind utility classes + shadcn/ui components; no custom CSS.
  5. Seed `content.json` with sensible placeholder copy so users can tweak wording without touching TSX.
  6. After verification, mark **Task 05** complete and proceed to **Task 06** (Auth magic-link flow).

- **Need confirmation**
  • Preferred marketing copy / tagline for the hero section (if different from placeholder).
  • Any additional sections desired on the landing page (e.g. FAQ, feature list) beyond simple hero + CTA.

- **2025-05-26 – Task 06 Clarification Request**
  1. Confirm that password-based sign-up & sign-in should be replaced entirely by email magic-link (passwordless) flow using Supabase `auth.signInWithOtp` / `auth.verifyOtp`.
  2. Confirm we should remove password fields from `/sign-up` and `/sign-in` pages and consolidate into a single `/sign-in` route, or keep separate pages.
  3. Provide preferred copy for email confirmation messages (e.g. "Check your inbox for a magic link"), or are current placeholders acceptable?
  4. For Waitlist form (Task 07), verify desired fields: `email` (required), optional `name`, and a "Hide my name" toggle to set `hidden` boolean. Any additional UTM/referrer tracking aside from what's captured in DB schema?
  5. Clarify placement of waitlist sign-up form: embedded below hero on landing page, separate modal, or dedicated `/join` route?

## Lessons
*(empty)*

---

What do you need to feel **100 % confident** you can implement?  
(Anything unclear about scope, tech stack, or deliverables?)

*(Local dev configured: .env added with Supabase credentials; .gitignore updated to ignore supabase/config.toml)*
*User feedback 2025-05-26: Appreciated interactive sign-up tutorial in starter; replicate similar guided onboarding in Waitlist Kit.*

## 2025-05-26 – Clarifications Received
- **Auth Flow** (Task 06)
  • Only **magic-link (passwordless)** auth using `supabase.auth.signInWithOtp`.
  • Single `/sign-in` page (no separate sign–up). If a user email is not yet registered, Supabase will create it automatically on first sign-in.
  • Remove all password fields/components + related server actions.
  • Success copy similar to Sunni screenshot: _"Sign-in link sent! Check your inbox to continue."_

- **Waitlist Form** (Task 07)
  • Shown in a **modal** triggered from primary CTA on landing page.
  • Fields: `email` (required), `name` (optional), `hideName` checkbox, and `note` textarea (optional "Why are you excited?").
  • When `hideName` is true, store `name = 'Anon Penguin'` (playful default) or fallback to `NULL` if blank.
  • Capture & store `referrer` (document.referrer) and `utm_source` (if `utm_*` params in URL at time of open/submit).

- **DB / API**
  • Extend `waitlist_signups` table to add `note text` column (optional), unless we decide to store it elsewhere.
  • Use existing `referrer` & `utm_source` columns for tracking; map URL params accordingly.

- **Next Steps**
  1. Refactor auth components/actions to OTP-only.
  2. Build modal form component using shadcn/ui `Dialog` + `Form` primitives.
  3. Add utility to parse UTM params client-side and include in form submission.
  4. Update Supabase service role (if needed) to allow inserting `note` column.

## 2025-05-26 – Sub-task Breakdown for Tasks 06-07

### Task 06 – Magic-link Auth (OTP) 💌
- [x] **06A** Password fields/components removed & sign-in streamlined.
- [x] **06B** Deprecated password routes/actions cleaned up; sign-up/forgot/reset pages deleted; OTP action lives in `app/actions.ts::signInAction`.
- **06C** Create `auth/send-otp.ts` server action using `supabase.auth.signInWithOtp`.
- **06D** Replace `/sign-in` page with single form (email only) + success state screen from Sunni-style.
- **06E** Adjust middleware / protected routes to recognise user session.
- **06E** QA: test new user & returning user flows; update README env vars if needed.

### Task 07 – Wait-list Modal Form 📝
- [x] **07A** Added migration `001_add_note.sql` to add `note` column to `waitlist_signups`.
- [x] **07B** Added `components/waitlist-modal.tsx` (shadcn Dialog) wired to `joinWaitlistAction`.
- [x] **07C** Added client helper `utils/utm.ts` to capture utm params & referrer.
- [x] **07D** `joinWaitlistAction` already handles insert with anon names.
- [x] **07E** Modal trigger wired in `LandingHero`.
- **07F** Smoke test end-to-end: submit, receive magic link, row visible in public list.

> Future Task 08 will consume same table for `/list` page; 07F ensures expected data shape.

### 2025-05-27 – Hotfix
- Added migration `000_waitlist_signups.sql` to create `waitlist_signups` table + policies and `note` column. **Run this in Supabase** (`supabase db push` or through dashboard SQL editor) before further testing.
- joinWaitlistAction now omits `note` when column absent.
- Landing page `searchParams` handling fixed (sync).

Pending:
- Apply migration in Supabase, then smoke-test modal flow again (Task 07F).
- Once confirmed, mark Tasks 06E & 07F complete and build public list page (Task 08).

Pending:
- Task 08 – `/list` page:
  • Server component to fetch `waitlist_signups` ordered by `created_at desc`.
  • Use client hook (SWR) for live updates so new sign-ups appear without reload (mirrors Sunni behaviour).
  • Respect `hidden` flag (render anonymised name when true).

Dev notes:
- Supabase Cloud (PG 15) doesn't yet support `create policy if not exists`; future migrations should use plain `create policy` wrapped in `DO $$ BEGIN ... EXCEPTION WHEN duplicate_object THEN END $$` if idempotency needed.
- Next.js Hot-reload webpack cache warnings are benign; ignore or add `--no-webpack-cache` in dev script if noisy.

## 2025-05-27 – Repo Sync
- Committed and pushed latest changes in `energy-flow` repo to GitHub (including updated `pages/doing.mdx`, new `project-plan.mdx` and this scratchpad file).
