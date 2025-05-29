# Waitlist Kit – Freeze & Duplicate Quick Checklist

Use these short chat prompts in a fresh Cursor workspace to pause the public template **and** spin up your own copy without rebuilding Supabase.

---

## 0 · Prerequisites
1. Cursor is open in the original `waitlist-landing` workspace and all tests pass.
2. You have a GitHub PAT configured in your terminal (`gh auth status`).
3. The current Supabase project is working and the `.env` file lives **locally**.

---

## 1 · Freeze the Public Template

Prompt-to-AI #1  
"Run `pnpm lint && pnpm build`. Let me know if anything fails."

Prompt-to-AI #2  
"Stage all changes, commit as `chore(release): public snapshot v1.0.0`, tag `v1.0.0`, and push everything to GitHub."

Outcome → `main` now represents the _public template snapshot_.

---

## 2 · Duplicate for My Personal Project

### Option A – Full duplicate (clean history)
Prompt-to-AI #3  
"Mirror the current repo into a new private GitHub repo called `<my-next-project>` using `git clone --bare` and `gh repo create`. Push the mirror."

### Option B – Simple fork
Prompt-to-AI #3-alt  
"Rename the current remote to `template`, add a new remote `origin` pointing to `git@github.com:<me>/<my-next-project>.git`, and push the `main` branch."

Outcome → you now have `my-next-project` with identical code.

---

## 3 · Reuse the Existing Supabase Instance
Prompt-to-AI #4  
"Copy my local `.env` file into the new repo (do **not** commit it). Confirm that the project runs locally with `pnpm dev`."

---

## 4 · Bring the energy-flow Docs Along
Prompt-to-AI #5  
"Copy the `energy-flow/` directory into the new repo and commit it as `docs: add energy-flow reference`."

(Alternative: "Add `energy-flow` as a git submodule" if you prefer.)

---

## 5 · Start a Fresh Cursor Workspace
Prompt-to-AI #6  
"Close this workspace and clone `<my-next-project>` into a new one."

---

## 6 · Post-duplication House-Keeping *(manual)*
• Update product name in `content.json` and hero copy.  
• Replace badges & marketplace links.  
• Rotate email API keys if needed.  
• Decide whether to leave the project public or private.

---

_That's it—six quick prompts and you're running on a clean personal fork while the public template is safely frozen._ 