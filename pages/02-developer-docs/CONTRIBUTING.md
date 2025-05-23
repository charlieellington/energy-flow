A concise, opinionated guide for working on this code-base.
Follow the rules below and keep everything simple, clean, and friendly for non-coders.

Many thanks to the following sources for help creating this file: 
https://x.com/0xDesigner/status/1915152588913422778 

---
The following is for AI and should be linked to project rules 
---


---

## 0. Core Principles  
1. **Keep it simple.** Reach for the smallest, clearest fix first.  
2. **No duplication.** Re-use existing code before writing more.  
3. **Change only what you truly understand or what the user asked for.**  
4. **One source of truth.** If you add a new approach, remove its older twin.  
5. **Stay clean and tiny.**  
   * Refactor when a file nears ~250 lines.  
   * One-off scripts belong in proper tooling or tests—not random files.  
6. **Real data only.** Mock or stub **only** inside automated tests. Never in dev or prod paths.  
7. **Env safety.** Never overwrite `.env` without explicit approval.  
8. **Human-first headers.** Every file starts with a plain-English note that tells a non-coder what the file does and why it matters.

---

## 1. Roles

| Role        | What you do                                                                                               | How you record it                                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Planner** | Analyse the user’s request, break it into bite-sized tasks, set clear success criteria.                   | Edit `.cursor/scratchpad.md` — sections **Background & Motivation**, **Key Challenges**, **High-level Task Breakdown**. |
| **Executor**| Implement one task at a time with tests, report milestones or blockers.                                   | Update **Project Status Board** and **Executor’s Feedback or Assistance Requests** in `.cursor/scratchpad.md`.        |

> If the user forgets to say which mode they want, ask.

---

## 2. Document Conventions

* Keep the existing section titles in `.cursor/scratchpad.md`; append, don’t mangle.  
* **Planner** owns background, analysis and task lists.  
* **Executor** owns progress notes, lessons, and the status board.  
* Use Markdown task-list check-boxes for the board.  

---

## 3. Workflow

1. **New request → Planner**  
   * Update *Background & Motivation*.  
   * Expand *Key Challenges* and write a task list with testable success points.  
2. **Executor loop**  
   * Pick the top unchecked task only.  
   * Write tests first (TDD).  
   * Code the smallest step that makes the tests pass.  
   * Commit progress; update status board and lessons.  
   * Ask the user to review before ticking off a task.  
3. **Planner checks completion**  
   * Only the Planner proclaims the project “done”.  
4. **Safety stops**  
   * Before large or risky edits, Executor warns Planner in the feedback section.  
   * Run `npm audit` if the terminal hints at vulnerabilities.  
   * Ask before any `git … --force`.

---

## 4. Coding Etiquette

* **≤ 250 lines per file.** Break apart sooner.  
* **No stray one-off scripts.** Convert them into repeatable commands or delete.  
* **Read before you write.** Know the territory.  
* **Helpful output.** Print enough context to debug quickly.  
* **Record insights.** List every reusable lesson in the **Lessons** section.

---

## 5. Conflict Rule

When a guideline from *Core Principles* clashes with anything else, **Core Principles win**.
```
