# Waitlist Kit – Freeze & Duplicate Checklist (Revised 2025-05-30)

This guide shows you how to **freeze** the public Waitlist Kit template and then **spin-up your own private copy** without touching the existing Supabase project.  The flow is:

```
public-template → snapshot → NEW private repo → new Cursor workspace
```

If you prefer a one-liner: *"Make a pristine snapshot then fork my own copy."*

---

## 0 · Prerequisites
1. You are in the original `waitlist-landing` directory **inside Cursor** and all tests pass.
2. A GitHub personal access token (`gh auth status`) is configured.
3. The working Supabase credentials live in a local **`.env`** file (never committed).
4. `gh` CLI and `pnpm` are installed.

---

## ✅ Steps 1–2 Completed

The public template was frozen at `main@v1.0.0` and mirrored into your private repo

```
https://github.com/charlieellington/no-bad-parts-landing
```

You can safely skip to the remaining steps below.

---

## 3 · Start a **Fresh Cursor Workspace** from your repo
1. In Cursor choose **File → Close Workspace** (this just closes the current folder; *no* files are deleted).
2. **Clone your repo**:
   ```bash
   git clone https://github.com/charlieellington/no-bad-parts-landing.git
   cd no-bad-parts-landing
   code .         # or: open the folder in Cursor
   ```
You are now in a **clean workspace** that points at your private repo.

---

## 4 · Reuse the Existing Supabase Instance
Copy over the `.env` file from the template workspace **manually** (do *not* commit).

```bash
cp ../waitlist-landing/.env .

# Verify everything still works
pnpm install
pnpm dev
```

---

## 5 · Bring the `energy-flow` Docs Along
If you want the docs:

```bash
# 5-A · Copy the directory (simplest)
rsync -a ../waitlist-landing/energy-flow ./energy-flow

git add energy-flow
git commit -m "docs: add energy-flow reference"

git push
# — or —
# 5-B · Git submodule (keeps size down)
# git submodule add https://github.com/<you>/energy-flow energy-flow
```

---

## 6 · Post-duplication House-Keeping (manual)
• Replace product name + hero copy in `content.json`.
• Swap out marketplace badges & links.
• Rotate any email API keys.
• Decide whether the new repo should be public or private.

---

### ✅ Done
You are now running on a **private fork** while the public template is safely frozen at `v1.0.0`. Enjoy! 

You now own **`no-bad-parts-landing`** on GitHub with identical code. 