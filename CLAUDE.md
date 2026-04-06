# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

An interactive course ("Codex for Business") delivered through AI agent scripts, adapted for **BADM 350: Technology & AI Strategy** at Gies College of Business (Spring 2026). Students open this repo in OpenAI's Codex desktop app and say "let's start" — the root `AGENTS.md` acts as a course conductor that routes them through lessons. Not a traditional code project; no build step, no package.json, no tests.

## BADM 350 Context

**Canvas course ID**: 68238 (Spring 2026, production)
**Class times**: Tuesday & Thursday, 12:30 PM Central
**Instructor**: Vishal Sachdev

This Codex course is used during **Unit E: AI Strategy (Weeks 12-15)** of BADM 350:

| Week | Dates | Codex Modules | BADM 350 Topic |
|------|-------|---------------|----------------|
| 12 | Apr 7-9 | Modules 0-2 (Getting Started → Fundamentals → Vibe Coding) | AI Fundamentals + GenAI Module 3 |
| 13 | Apr 14-16 | Module 3 (Capstone) | Agentic AI |
| 14-15 | Apr 21+ | Capstone adapted to class projects | Responsible AI → Final Presentations |

**Weeks 1-11 are complete** (Foundations → Digital Economics → Data → Enterprise). Students arrive at this Codex course with:
- Team projects (2-3 people) with working prototypes (Checkpoint 4 due Apr 9)
- Final presentation due Week 15 (board memo + live demo, 50 pts)
- 500-point grading scale; semester project = 40% (200 pts across 5 checkpoints)

**Parent repo**: `/Users/vishal/teaching/badm350/` (full course with Canvas integration, instructor guides, grading)

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

Adapting this Codex course for BADM 350 Unit E (Weeks 12-15). Students start Week 12 on Apr 7.

## Roadmap

- [ ] Decide which lessons to use / cut / adapt for BADM 350's 3-4 week window
- [ ] Connect Codex lessons to students' existing team projects (not just NovaBrew)
- [ ] Update AGENTS.md routing for BADM 350 context
- [ ] End-to-end test: run a fresh student through the selected lesson path
- [ ] Update landing page for BADM 350 branding

## Session Log

### 2026-04-05
- Cloned from codex-for-business repo. Updated CLAUDE.md with BADM 350 context (course ID, schedule, Unit E placement, parent repo reference).
