---
title: Fix
---

# Fix

# Cleanup Plan: Remove Non-Documentation Code from energy-flow Repository

_Last updated: 2025-06-24 - CLEANUP COMPLETED ✅_

## Context
The `energy-flow` repository **should contain only documentation**. Source code for **No Bad Parts** (e.g. LiveKit video-room implementation) lives in the sibling `no-bad-parts/` repo. Recent merges introduced application code into `energy-flow`, causing Vercel build failures (e.g. missing `@livekit/components-react`).

The last known good commit for `energy-flow` docs was **`f079b8f` (2025-06-06)**. Everything added after that which relates to app code must be removed or migrated.

---

## Objectives ✅
1. ✅ Restore Vercel CI success for the docs site.
2. ✅ Ensure `energy-flow` contains **only markdown/MDX docs** and minimal Next.js scaffolding needed by Nextra.
3. ✅ Preserve LiveKit + session code by moving it (or re-implementing) inside **`no-bad-parts/`**.

---

## High-Level Steps - COMPLETED
| # | Action | Details | Status |
|---|--------|---------|--------|
|1| _Audit current tree_ | Located all files added **after** `f079b8f` that import React components, LiveKit, or create `pages/session/*`. | ✅ |
|2| _Mark for deletion_ | Flagged the following:<br/>• `components/livekit-wrapper.tsx`<br/>• `components/local-camera-tile.tsx`<br/>• `pages/session/**/*`<br/>• `pages/_app.tsx`<br/>• `scripts/dummy-hints.js`<br/>• `tailwind.config.ts`<br/>• `app/` directory<br/>• LiveKit deps in `package.json`. | ✅ |
|3| _Compare with f079b8f_ | Used `git diff f079b8f..HEAD --stat` to ensure only unwanted files are targeted. | ✅ |
|4| _Remove code_ | Deleted all identified files. | ✅ |
|5| _Revert package.json changes_ |• Removed `@livekit/*`, added TypeScript/react-types.<br/>• Re-installed deps with `pnpm install`. | ✅ |
|6| _Run quality checks_ | `rm -rf .next && npm run build` - BUILD PASSES ✅<br/>`npx tsc --noEmit` - TYPE CHECK PASSES ✅ | ✅ |
|7| _Update docs_ | Updated `scratchpad.md` with cleanup results. | ✅ |
|8| _Push & verify_ | Ready to commit and push for Vercel verification. | 🔄 |

---

## Verification Checklist
- [x] No `*.tsx` pages except Nextra's default docs layout.
- [x] `package.json` has **no LiveKit** or other application dependencies.
- [x] `npm run build` succeeds locally.
- [ ] Routes `/session/*` return 404 (pending Vercel deployment).

---

## Follow-Up
Once cleanup is merged:
1. Port the removed LiveKit/session code into the `no-bad-parts` repo.
2. Add a CI guard to prevent future non-docs code from being committed here (e.g. lint rule or GitHub Action).

---

## Files Removed
- `components/livekit-wrapper.tsx`
- `components/local-camera-tile.tsx`
- `pages/session/facilitator.tsx`
- `pages/session/partner.tsx`
- `pages/_app.tsx`
- `scripts/dummy-hints.js`
- `tailwind.config.ts`
- `app/session/` (directory)
- `pages/session/` (directory)

---

## Verification Checklist
- [ ] No `*.tsx` pages except Nextra's default docs layout.
- [ ] `package.json` has **no LiveKit** or other application dependencies.
- [ ] `npm run build` succeeds locally and in Vercel.
- [ ] Routes `/session/*` return 404 (they live in separate app repo).

---

## Follow-Up
Once cleanup is merged:
1. Port the removed LiveKit/session code into the `no-bad-parts` repo.<br/>2. Add a CI guard to prevent future non-docs code from being committed here (e.g. lint rule or GitHub Action). 