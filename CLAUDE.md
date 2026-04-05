# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

An interactive course ("Codex for Business") delivered through AI agent scripts. Students open this repo in OpenAI's Codex desktop app and say "let's start" — the root `AGENTS.md` acts as a course conductor that routes them through lessons. Not a traditional code project; no build step, no package.json, no tests.

## Architecture

- **`AGENTS.md`** (root) — Course conductor. Manages lesson routing, progress tracking (`~/.codex-for-business/progress.json`), and workspace init (`~/novabrew-workspace/`).
- **`lesson-modules/`** — 14 lessons across 4 modules (0-3), each an `AGENTS.md` file. Modules: Getting Started → Fundamentals → Vibe Coding → Capstone.
- **`business-scenario/`** — NovaBrew Coffee Co. case study data (read-only). Students discover these files during Module 1.
- **`templates/`** — Reusable business frameworks (BMC, competitive analysis, pitch deck, case study).
- **`docs/`** — Landing page (static HTML + CSS). Deployed via GitHub Actions to GitHub Pages.
- **`course-structure.json`** — Machine-readable lesson index with paths, descriptions, and timing estimates.

## Deployment

**Landing page**: Auto-deploys from `docs/` on push to main via GitHub Actions (`.github/workflows/pages.yml`).

**Student apps** (built during lessons 2.5 and 3.1) deploy to GitHub Pages via static export (`output: 'export'` in next.config).

## Lesson Script Conventions

Each `AGENTS.md` follows this pattern:
- **Say:** blocks — dialogue spoken to the student (warm, business-focused, never developer jargon)
- **STOP:** blocks — pause and wait for student response
- **ACTION:** blocks — instructions for Codex to execute (run commands, create files, etc.)
- **Important Notes for Codex** — tone, pacing, recovery guidance
- **Success Criteria** — checklist before moving to next lesson

Key rules: never break character, never use CS jargon without a business analogy, never spoil NovaBrew discoveries (let students find patterns themselves).

## Common Edits

**Updating lesson content**: Edit the `AGENTS.md` in the relevant `lesson-modules/X.Y-slug/` directory. Keep timing estimates in `course-structure.json` in sync.

**Updating landing page**: Edit `docs/index.html` and `docs/styles.css`. No build step — just push to main and GitHub Pages auto-deploys.

**Adding a new lesson**: Create a new directory under the appropriate module, add an `AGENTS.md` following the existing pattern, and add the entry to `course-structure.json`. Update the root `AGENTS.md` lesson routing table.

## Gotchas

- Student deploy instructions use GitHub Pages with static export. The default `create-next-app` `.gitignore` excludes `/out/` — lessons explicitly remove that line before committing.
- `basePath` in student next.config must match their GitHub repo name exactly, or the deployed site 404s.
- The `.nojekyll` file in `out/` is critical — without it GitHub Pages ignores `_next/` directories.

## Current Focus

Maintenance pass complete. Next: end-to-end student walkthrough test.

## Roadmap

- [x] Replace Vercel with GitHub Pages as student deployment target
- [x] Fix UX issues in deploy flow (gitignore, basePath verification, messaging)
- [ ] End-to-end test: run a fresh student through Lessons 2.4 → 2.5 to verify GitHub Pages deploy works
- [ ] Add GitHub Actions workflow for student projects (eliminate local `npm run build` requirement)
- [ ] Collect first round of student feedback and iterate on pain points

## Session Log

### 2026-03-27
- Completed: Curriculum update for Codex changes. Four changes across 6 files:
  1. **Fixed 1.6** — Students now create `~/novabrew-workspace/AGENTS.md` (not `novabrew-agents.md`). Removed false claim about automatic reading of non-AGENTS.md files. Clear framing: AGENTS.md at workspace root = auto-read.
  2. **Rewrote 1.5** — New title "Advisors, Skills & Plugins." Step 1 teaches the three-role model. Step 5 explains all three with cheat sheet table. Advisory team review + AHA moment unchanged.
  3. **Refreshed 2.4** — GitHub framed as "back up and share." Built-in GitHub connection is easy path; `gh` CLI is fallback.
  4. **Added 3.2 Canva bonus** — Optional lesson for turning finished project into case study, deck, or LinkedIn asset. Not part of main build path.
- Also updated: course-structure.json (titles, descriptions, new 3.2 entry), root AGENTS.md (course map, workspace paths, timing).
- Propagated: Added roadmap note in ai-for-marketing CLAUDE.md to consider advisors/skills/plugins update for 1.5 during pilot run.

### 2026-03-24
- Completed: Designed and built "Augmented Intelligence (AI) for Marketing Teams" — a new course for Brad Petersen's 22-person marketing team at Gies. Full brainstorm → spec → council review (4 agents: copywriter, learning designer, tech architect, CMO) → parallel implementation (7 agents). Course repo at `/Users/vishal/teaching/ai-for-marketing/` with 38 files, 7K lines. Uses real MSBA Online materials, Box for collaboration, MSBAi bot MCP, split build tracks, Netlify Drop for deploys. Design spec saved at `docs/superpowers/specs/2026-03-24-ai-for-marketing-design.md`.
- Next: Box folder provisioning (via MCP), knowledge-base curation from msba-online, test setup-connections.sh, pilot run simulating a staff member, push ai-for-marketing to GitHub.

### 2026-03-23
- Completed: Maintenance pass for public visitors. Added Windows support across all files (6 files). Removed Vercel deployment (deleted both projects), consolidated to GitHub Pages only. Redesigned landing page with Canvas MCP color theme (Clash Display + DM Sans, teal accent, glass cards, grid backgrounds, entry animations).
- Next: End-to-end test of the deploy flow with a fresh student walkthrough

### 2026-02-26
- Completed: Replaced Vercel with GitHub Pages across 8 files, fixed 6 UX issues (gitignore, auto-deploy messaging, capstone ordering, basePath verification, README template, landing page copy), deployed landing page to Vercel
- Next: End-to-end test of the deploy flow with a fresh student walkthrough
