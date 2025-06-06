---
title: Scratchpad
---

# Scratchpad

## Current Project Status - January 21, 2025

🚀 **READY TO START: Video POC Build - Full Power Mode**

### Project Overview:
Based on the [build-plan.mdx](mdc:energy-flow/pages/03-projects/no-bad-parts-collective/build-plan.mdx), we're about to implement a **2-day sprint** to build the core proof-of-concept:

**Goal**: Create a two-URL system that streams AI coaching hints to facilitators during live IFS therapy sessions
- `/partner` - full-screen video only
- `/facilitator` - video + live AI hints panel  
- Silent AI agent joins room, listens to partner, streams hints to facilitator

**Architecture**:
```
Partner ──▶ LiveKit Room ◀── Facilitator
                ▲
                │ audio
     Silent Agent ──┘ (Whisper → GPT-4o-mini → text stream)
```

### 2-Day Timeline from Build Plan:
**Day 1 Goals:**
- AM: LiveKit room + JWTs, local Agent running
- Noon: video-poc branch, deps installed, folder structure
- Early PM: `/partner` route live on Vercel preview  
- Late PM: **DEMO MILESTONE** - `/facilitator` route with placeholder HintStream

**Day 2 Goals:**
- AM: Connect real Agent data-channel locally
- Mid-PM: Deploy Agent to Fly.io (fully cloud-hosted)
- Late PM: Polish UI, deploy to production, record demo

### Technical Stack:
- **Frontend**: Next.js + @livekit/components-react + Tailwind + shadcn/ui
- **Video/Audio**: LiveKit Cloud (EU region)
- **AI Agent**: Docker container (livekit/agent-audio-llm) → Fly.io
- **AI Model**: Whisper (STT) + GPT-4o-mini (LLM)

### Current Status: 
- ✅ Project renamed to `no-bad-parts` (positioned as main app)
- ✅ Rules configured for Tailwind + shadcn/ui only
- ✅ GitHub connectivity verified
- 🎯 **READY TO START BUILD PLAN IMPLEMENTATION**

### 🔑 Clarifications Answered (Jan 21, 2025)

1. **Repo naming**
   • Build plan updated: all references now `no-bad-parts`. Clone step marked as *skip if already cloned*.

2. **Local toolchain checks** – pending confirmation
   • Docker Desktop: User asked *how* to verify install & run test container.
   • Node 18: User accepts recommendation → will install via nvm if not already.
   • pnpm: Confirmed present.
   • Vercel CLI: Unsure; needs verification & maybe install.
   • Fly CLI: Likely missing; needs verification & setup.

3. **Branch + Vercel auto-deploy**
   • `video-poc` branch approved. Need to ensure Vercel's Git integration doesn't auto-deploy to production; default behaviour is Preview only. Will supply guidance.

### ⏭️ Next Planner Steps

1. Provide user with concise installation / verification commands for:
   • Docker Desktop (and `docker run hello-world` test)
   • Node 18 via nvm + pnpm
   • Vercel CLI install + login
   • Fly CLI install + login check
2. Explain Vercel branch-deployment behaviour and optional settings to restrict prod deploys.
3. Await user thumbs-up that all checks pass → then switch to **Executor** mode for Step 1 automation.

### ✅ Toolchain Verification Complete (Jan 21, 2025)

**All 4 tools tested and ready:**

1. **Docker Desktop** ✅  
   • Status: Running (was launched automatically)  
   • Test: `docker run hello-world` → Success ("Hello from Docker!")

2. **Node 18 + pnpm** ✅  
   • Node: v18.20.8  
   • pnpm: 10.11.0  
   • Status: Perfect for this project

3. **Vercel CLI** ✅  
   • Version: v41.7.0  
   • Logged in as: `charliee-5441`  
   • Status: Ready (update available but current version fine)

4. **Fly CLI** ✅  
   • Version: v0.3.140 darwin/arm64  
   • Status: Freshly installed via Homebrew → working

**Branch Strategy Confirmed:**  
• Will create `video-poc` branch in `/Users/charlieellington1/coding/no-bad-parts`  
• Vercel auto-preview is fine (no production risk)

### 🚀 READY FOR EXECUTOR MODE

All SET-UP prerequisites verified. Switch to **Executor** mode to complete Step 1:
- [x] 1.1 Docker Desktop 
- [x] 1.2 Node 18 + pnpm
- [x] 1.3 Vercel CLI
- [x] 1.4 Fly CLI  
- [ ] 1.5 Git repo (skip clone, just confirm correct repo)
- [ ] 1.6 Create new branch `video-poc`

**Next:** Navigate to no-bad-parts directory and create branch.

### ✅ STEP 1 SET-UP COMPLETE (Jan 21, 2025)

**All tasks completed successfully:**

- [x] 1.1 Docker Desktop → Running, tested with hello-world
- [x] 1.2 Node 18 + pnpm → v18.20.8 + pnpm 10.11.0  
- [x] 1.3 Vercel CLI → v41.7.0, logged in as `charliee-5441`
- [x] 1.4 Fly CLI → v0.3.140 (freshly installed)
- [x] 1.5 Git repo → Confirmed correct: `https://github.com/charlieellington/no-bad-parts.git`
- [x] 1.6 Create new branch → `video-poc` branch created and active

**Environment Summary:**
- **Working Directory:** `/Users/charlieellington1/coding/no-bad-parts` 
- **Active Branch:** `video-poc` (clean, ready for development)
- **Remote:** https://github.com/charlieellington/no-bad-parts.git
- **All tools:** Docker ✅, Node 18 ✅, pnpm ✅, Vercel CLI ✅, Fly CLI ✅

**Debugging Notes:**
- Had to launch Docker Desktop manually (common on fresh boot)
- Fly CLI was missing → installed via Homebrew successfully
- Minor uncommitted change in `.cursor/rules/rule.mdc` (safe to leave)

### 🎯 READY FOR STEP 2: LIVEKIT CLOUD

**Next milestone:** Set up LiveKit Cloud (≈ 1 hour)
- Create EU region project `ifs-demo`
- Generate room + API keys + tokens  
- Create `.env.local` file with tokens

**Timeline Status:** On track for Day 1 AM completion.

---

## Previous Project Status

✅ **COMPLETED: Workspace Structure and Rules Verification & Cleanup**

### What was verified and fixed:
- **Workspace Structure**: Confirmed both projects exist in `/Users/charlieellington1/coding/`
  - `energy-flow/` - Documentation and workspace management project
  - `no-bad-parts/` - Main application (renamed from no-bad-parts-landing)
- **GitHub Connectivity**: Both projects connected and up to date
  - energy-flow: `https://github.com/charlieellington/energy-flow.git`
  - no-bad-parts: `https://github.com/charlieellington/no-bad-parts.git`
- **Cursor Rules Hierarchy**: Fixed malformed file paths in all rule files
  - Workspace level: `.cursor/rules/rule.mdc` (applies to all projects)
  - Project level: `energy-flow/.cursor/rules/rule.mdc` and `no-bad-parts/.cursor/rules/rule.mdc`

### Rules Summary:
**I follow DIFFERENT rules for each project:**

**For energy-flow project:**
- Follow CONTRIBUTING.md rules
- Update energy-flow scratchpad after every action
- General documentation and workspace management rules

**For no-bad-parts project:**
- Follow CONTRIBUTING.md rules  
- Update no-bad-parts scratchpad after every action
- Check build-plan.mdx for project context
- **SPECIAL STYLING RULE**: Use ONLY Tailwind CSS + shadcn/ui components
- NO bespoke CSS files or custom React components for styling (warn user first if necessary)

**Workspace level (applies to both):**
- Follow CONTRIBUTING.md from energy-flow project
- Update appropriate scratchpad based on which project is being worked on

### Technical details:
- Fixed malformed file paths that had repeated "energy-flow/energy-flow/" segments
- Verified git status: both repos up to date with origin/main
- Rules now correctly reference documentation files in energy-flow project
- Both projects have proper project-specific rules that extend workspace rules

✅ **COMPLETED: Project Cleanup - Renamed no-bad-parts-landing to no-bad-parts**

### What was implemented:
- Successfully renamed GitHub repository from "no-bad-parts-landing" to "no-bad-parts"
- Updated git remote URL automatically via GitHub CLI
- Renamed local directory from `/Users/charlieellington1/coding/no-bad-parts-landing` to `/Users/charlieellington1/coding/no-bad-parts`
- Verified git operations work correctly in renamed directory
- Project is now positioned as the main app rather than just a landing page

### Technical details:
- Used GitHub CLI (`gh repo rename no-bad-parts`) to rename repository
- GitHub CLI automatically updated the origin remote URL to https://github.com/charlieellington/no-bad-parts.git
- Local directory rename completed with `mv no-bad-parts-landing no-bad-parts`
- Git status confirmed: branch is up to date with origin/main, working tree clean
- No internal code references needed updating (package.json has no name field, no grep matches found)

### User Experience:
- Project now has cleaner, more professional naming
- Positioned as main application rather than temporary landing page
- Ready for continued development and expansion beyond landing page functionality
- All git operations and GitHub integration working seamlessly

## 🔍 Planner Clarifications Needed — Step 1 SET-UP

Before we automate the SET-UP tasks (Docker Desktop, Node 18 + pnpm, Vercel CLI, Fly CLI, repo prep, branch creation), please confirm the following so we can execute without surprises:

1. **Repository state**
   • The build-plan still references `no-bad-parts-landing`, but our scratchpad shows the repo has already been renamed to **`no-bad-parts`** and is cloned locally at `/Users/charlieellington1/coding/no-bad-parts`. Can we skip `git clone …` and instead run future commands inside this existing repo?  
   • If a *private* remote is still required, please provide the target `<PRIVATE-ORG>` Git URL so we can run `git remote set-url origin …`.
2. **Local toolchain**
   • Docker Desktop is installed and `docker run hello-world` succeeds?  
   • `nvm ls` shows **Node 18** is installed and selected for this project?  
   • `pnpm -v` prints a version number (project uses `pnpm-lock.yaml`).  
   • `vercel --version` prints a version, *and* you are already logged-in (`vercel whoami`)?  
   • `flyctl version` prints a version (installed via Homebrew on macOS 14)?
3. **Branch strategy**  
   • We will create a new branch **`video-poc`** off `main` in the `no-bad-parts` repo — sound good?

Please answer or adjust anything above; once confirmed, we'll jump straight into executing Step 1 automatically.

---