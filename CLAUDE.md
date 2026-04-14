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

Monitor student feedback from the lesson-transition fix (issues #1-3 closed 2026-04-14). Then TA test Module 1.5b in a fresh Codex environment and wire the author-your-own-skill callback into Module 3.2.

## Roadmap

- [ ] Decide which lessons to use / cut / adapt for BADM 350's 3-4 week window
- [ ] Connect Codex lessons to students' existing team projects (not just NovaBrew)
- [ ] Update AGENTS.md routing for BADM 350 context
- [ ] End-to-end test: run a fresh student through the selected lesson path
- [ ] Update landing page for BADM 350 branding
- [ ] Add About page (credits original repo + Carl Vellotti, links to both articles, fork instructions for other educators)
- [ ] TA test Module 1.5b (superpowers install + auto-fire behavior in fresh Codex)
- [ ] Wire author-your-own-skill callback into Module 3.2

## Session Log

### 2026-04-14
- Shipped conductor-level fix for three student feedback issues (#1, #2, #3 — all from Module 1 students, all pointing at opaque lesson transitions). Single edit to root `AGENTS.md` propagates to all 14 lessons without touching any lesson file. Adds: (1) visible "Here's what done looks like" checklist rendered from each lesson's Success Criteria at lesson start, (2) completion gate on "next" that shows which boxes are unchecked with explicit override escape hatch, (3) prerequisite check before starting a lesson that verifies prior artifacts exist, (4) context carry-forward so transitions reference prior discoveries instead of feeling like a memory wipe. `progress.json` gained `incomplete_lessons[]` to track overrides.
- Closed issues #1, #2, #3 with fix references. Scheduled Canvas announcement (course 68238, announcement ID 1114613) to post ~1 hour delayed, routing the "re-download ZIP" instructions through the BADM 350 course shell. Email draft also saved at `/Users/vishal/teaching/badm350/communications/emails/2026-04-14-codex-course-update.md`. Reassured students the workspace-vs-course-folder separation means ZIP replacement is safe.
- Next: watch for new feedback after students re-download; TA test Module 1.5b in a fresh Codex environment; wire author-your-own-skill callback into Module 3.2.

*Older entries archived to `docs/session-archive.md`.*
