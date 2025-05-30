# 🚧 energy-flow Project Scratchpad

---

## Executor's Feedback or Assistance Requests

*(Fill in during execution phase)*

---

## Lessons

*(Record reusable insights here)*

## 2025-06-07 Updates
- Started local dev servers for both energy-flow and waitlist-landing projects.
- Both are running in parallel for development.
- Default port for each is http://localhost:3000 (change one if needed to avoid conflict).
- Identified Webpack/Nextra cache warnings (`Can't resolve './__temp__'`); build still succeeds so treating as non-blocking perf issue for now.
- Attempted upgrade to nextra 4.x but this introduced breaking changes (unrecognized 'theme', 'themeConfig' keys).
- Reverted back to working versions: nextra 2.6.1, nextra-theme-docs 2.6.1, Next.js 13.3.0, TypeScript 4.9.5.
- Dev server is now functional again with original harmless webpack warnings.

## 2025-05-21 Updates
- Added 🌈 emoji to branding across the site (logo, default title, OG tags, image alt) in `theme.config.tsx`.
- Created `public/favicon.svg` with rainbow emoji and linked it as the new favicon via `theme.config.tsx` head.
- Updated LinkedIn chat icon in `theme.config.tsx` to a circular variant (#0A66C2 background, white "in") for visual consistency.
- Added "Contact" page (`pages/05 :: Contact.mdx`) with embedded Cal.com Booker calendar and installed `@calcom/atoms` dependency.
- Fixed stray character at end of Contact page and ensured it uses `MONTH_VIEW` layout.
- Restructured routes: renamed spaced pages & folders to slug-friendly names (`doing.mdx`, `developer-docs/`, `life-tools/`, `projects/`) so URLs work again. Removed old spaced variants and temporarily deleted Contact page pending fix.

## 2025-05-29 Updates
- Added `.eslintrc.json` extending `next/core-web-vitals` so ESLint can run non-interactively.
- Pinned `eslint` to `8.57.0` and `eslint-config-next` to `13.3.0` in `package.json` to match Next.js 13 tooling.
- Installed new devDependencies and regenerated `pnpm-lock.yaml`.
- Verified project compiles (`pnpm exec tsc --noEmit`), builds (`pnpm run build`), and passes lint (`pnpm exec next lint`).
- Committed and pushed changes to `main` branch.

## 2025-05-30 Updates
- Revised `pages/02-developer-docs/waitlist-freeze-duplicate.md` to provide explicit manual commands, clarify Cursor workspace steps, and improve overall clarity of freeze-and-duplicate process.
- Completed Step 1: fixed lint/type issues (relaxed some ESLint rules, updated code). Build succeeded; committed and tagged public snapshot `v1.0.0`, pushed to GitHub.
- Added troubleshooting note to Freeze & Duplicate doc about temporarily relaxing ESLint rules.
- Mirrored `waitlist-landing` into new private repo `no-bad-parts-landing` via bare clone; pushed `main` + tags.
- Added `pageExtensions` to `next.config.mjs` so `.md` files render; affected pages now appear on live site.
- Added desktop sidebar toggle (button in navbar) with `SidebarToggle` component and CSS.



