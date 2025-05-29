# 🚧 energy-flow Project Scratchpad

---

## Executor's Feedback or Assistance Requests

*(Fill in during execution phase)*

---

## Lessons

*(Record reusable insights here)*

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



