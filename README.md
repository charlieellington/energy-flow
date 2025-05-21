# 🔋 Energy Flow Docs

> Modern, blazing-fast documentation site built with [Nextra](https://nextra.site) + Next.js.

Energy Flow is an **open-source knowledge hub** for tools, ideas, and code that help us build software with more _flow_ and less friction. The site you're looking at is both the reference docs and the living lab where we experiment with patterns, components, and writing styles that keep engineers (and non-engineers!) in the zone.

## ✨ Features

- ⚡️ Lightning-fast static generation powered by Nextra.
- 📚 MDX for rich, interactive docs.
- 🖼️ Automated Open Graph images & favicon (see `theme.config.tsx`).
- 🏷️ Zero-config type-safe routes courtesy of Next 13.
- 🔄 Continuous deployment via Vercel (or your own host).

## 🚀 Quick Start

```bash
# 1. Install dependencies (we use pnpm, but npm/Yarn work too)
pnpm install

# 2. Start the local dev server → http://localhost:3000
pnpm dev
```

Open `localhost:3000` in your browser and hot-edit any page inside `pages/`—the site will reload in real time.

## 🗂️ Project Structure Cheat-Sheet

```
.
├─ pages/             # Your MDX pages live here
│  ├─ docs/           #    ↑ example section
│  └─ projects/       #    ↑ another section
├─ public/            # Static assets served at / (favicons, images, etc.)
├─ theme.config.tsx   # Nextra site-wide theme config
├─ next.config.mjs    # Next.js config overrides
└─ scratchpad.md      # Planner/Executor status board (see CONTRIBUTING)
```

## 🧑‍💻 Contributing

All details live in [`pages/developer-docs/CONTRIBUTING.md`](pages/developer-docs/CONTRIBUTING.md). Please read it before opening a PR. 🫶 This was written for AI! 

## 🛠️ Useful Scripts

```bash
pnpm lint     # Run ESLint
pnpm build    # Production build (static export)
pnpm start    # Run the production server locally
```

## 📜 License

MIT © contributors. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgements

This project began as the Nextra Docs template. Huge thanks to @shuding and the Nextra team for their wonderful work.
