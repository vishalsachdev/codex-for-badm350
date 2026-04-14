# Session Archive

Older session log entries, moved out of CLAUDE.md to keep the top-of-file lean. claude-mem has full session history — this archive exists only for quick human browsing.

---

## 2026-04-12
- Added Module 1.5b (Skills — Reusable Playbooks): hands-on lesson installing obra/superpowers, implicit invocation demo, failure-mode demo, `/skills` + `$skill-name` fallbacks. Cognitive friction beat: predict-before-run. Sets up author-your-own-skill moment in Module 3.2 by anchoring on the description field as the discoverability contract.
- Researched Codex skills support (confirmed hybrid invocation model: implicit via description matching + explicit via `/skills` and `$skill-name`). Skills are an open standard (agentskills.io) — same format works in Codex and Claude.
- Updated course-structure.json, root AGENTS.md routing, landing page Module 1 card, README lesson table, and Module 1.7 wrap-up recap to surface 1.5b.
- Removed obsolete SPEC.md (pre-implementation planning doc with outdated module numbering; source of truth lives in course-structure.json + README.md + CLAUDE.md).

---

### 2026-04-06
- Added cognitive friction points to 6 lesson modules (0.1, 1.2, 1.3, 1.4, 1.5, 1.7). Replaced copy-paste learning with predict/write/evaluate/critique/reflect moments. Introduced inner/outer loop framework explicitly.
- Added Module 3.3 (meta-module) where students modify the course itself.
- Wrote and reframed article "When AI Tests AI, the Human Finds What Matters" — focus on AI-testing-AI methodology and human judgment as outer loop.
- Fixed broken link: `nichochar/agent-browser` → `vercel-labs/agent-browser`.
- Generated RSA Animate-style sketch cover images (4 concepts explored, hybrid #5 selected). Platform variants: LinkedIn 1200x628, Substack 1100x220 (purpose-built), Twitter 1200x675.
- Built 50-second RSA Animate teaser video with Remotion (6 scenes, left-to-right reveal, OpenAI TTS narration). Rendered 16:9 and 1:1 variants.
- Drafted article to Substack, LinkedIn, and Twitter/X via browser automation.
- Created `/rsa-animate-video` skill (general-purpose, works for articles, talks, course modules, concept explainers).
- Updated `/write-article` skill: RSA sketch cover images, link verification step, editorial review subagent, Homebrew Python fix for cache script, Substack banner design system (pure white bg).
- Next: Upload cover images + videos manually on each platform. Publish. End-to-end test fresh student path. Connect to BADM 350 team projects.

### 2026-04-05
- Cloned from codex-for-business repo. Updated CLAUDE.md with BADM 350 context (course ID, schedule, Unit E placement, parent repo reference).
