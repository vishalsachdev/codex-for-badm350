# The AI Course That Teaches Itself: Building a Business Curriculum Inside OpenAI's Codex CLI

*How I turned a developer-focused concept into a zero-code business course — 53 files, 50,000 words, one session — and why the real lesson is about scaling expertise, not scaling code.*

---

I built an entire interactive course in a single afternoon. Fourteen lessons, a fictional startup with 26 files of messy business data, a GitHub Pages landing site, GitHub Codespaces integration for zero-install onboarding, and a root orchestration file that turns the AI into a patient, business-savvy instructor who remembers where each student left off.

The course teaches business students — MBAs, PMs, analysts, founders — how to use AI coding tools. And the kicker: the students learn *inside* the tool itself. There's no video to watch, no slides to click through. You open a terminal, type `codex`, say "let's start," and the AI becomes your instructor.

Here's how it happened, what I learned, and how you can do the same thing for your own domain.

## The Spark: A Developer Course That Shouldn't Stay Developer-Only

It started when I found [Carl Vellotti's Claude Code for Everyone](https://www.yourfirstcursor.com/) — a clever course that teaches Claude Code by having students use Claude Code. Each lesson is a `CLAUDE.md` file that scripts the AI to be a teacher. The student opens the tool, and the tool walks them through itself. Brilliant concept.

But it was aimed at developers. The examples were technical, the language was code-native, the exercises assumed you knew what a function was. I kept thinking: the people who would benefit *most* from AI coding tools are exactly the people this course doesn't reach. Business students. Product managers. Non-technical founders who have ideas but no engineering team.

These people don't need to learn to code. They need to learn to *direct* an AI that codes. That's a leadership skill, not an engineering skill.

So I decided to build a version for them — and I decided to build it fast.

## The Mental Model: AI as Expertise Amplifier

Here's the frame that drove everything: **AI doesn't replace expertise. It amplifies and scales it.**

I've been teaching business students for years. I know what confuses them about technology, what excites them, what makes them shut down. I know that if you say "repository" they glaze over, but if you say "shared project folder" they nod. I know that business students light up when they're solving a real problem for a real (or real-feeling) company, and they disengage when they're doing toy exercises.

That expertise — understanding learners, designing experiences, knowing which analogies land — is the hard part. It takes years to develop. What AI gave me was the ability to *implement* that expertise at a speed and scale that would have been impossible alone.

In one session, I went from "I should build this" to a shipped, deployable course with:

- **14 interactive lesson scripts** that turn Codex into a conversational instructor
- **26 business scenario files** creating a rich, messy startup called NovaBrew Coffee Co.
- **A root orchestration file** (AGENTS.md) that acts as a "course conductor" — detecting student progress, delivering the right lesson, handling navigation
- **A GitHub Pages site** for discovery and onboarding
- **GitHub Codespaces integration** for true zero-install, one-click launch
- **Business templates** (BMC, competitive analysis, pitch deck, case study)

53 files. ~50,000 words. Built by six parallel AI agents working simultaneously, each handling a different piece of the architecture.

I didn't write 50,000 words. I *directed* them. Every design decision — the scenario, the tone, the progression, the business-native language, the workspace architecture — came from years of teaching. The AI handled the implementation.

## Building the NovaBrew World

The most important design decision wasn't technical. It was narrative.

Business students don't learn from abstract exercises. They learn from *cases*. So instead of "practice reading a file," the course drops students into a consulting engagement at NovaBrew Coffee Co. — a D2C coffee subscription startup in Austin with $800K in seed funding, 8 months of runway, and a churn rate that's double the industry average.

The student inherits a mess: previous PM notes with half-baked ideas, board meeting transcripts showing investor anxiety, customer feedback across three channels, competitor research in various states of completion, financial CSVs with concerning trends, and ten old marketing campaigns with wildly varying results.

Buried in that chaos is a signal: the previous PM started a "Coffee Taste Profile Quiz" concept that showed promising A/B test results before they left. The student's job — which they discover organically through analysis, not because anyone tells them — is to find that signal, validate it with data, and then *build the solution*.

By Module 2, they're shipping a working web app. By Module 3, they have a deployed URL, a case study, and portfolio assets. All without writing a line of code themselves.

The scenario took the most thought and the least time to generate. I knew exactly what a compelling business case looks like. The AI built 26 interconnected files that feel like a real company's messy file system — because the design constraints were specific enough to leave no ambiguity.

## The Autopilot Architecture

The original Claude Code course requires students to manually navigate into lesson directories and open files. That works for developers. It doesn't work for someone who's never used a terminal.

So I built a conductor pattern: a root `AGENTS.md` file that turns Codex into a stateful course manager. It:

1. **Auto-detects progress** by checking `~/.codex-for-business/progress.json` on every message
2. **Infers state from artifacts** if no progress file exists (files in the analysis folder = Module 1 territory)
3. **Reads lesson scripts** from nested directories and delivers them conversationally
4. **Handles navigation** through natural language ("next lesson", "where am I?", "skip to module 2")
5. **Separates student work from course materials** so I can push content updates without destroying anyone's progress

That last point was a real design challenge. If students clone the repo and do their work inside it, a `git pull` could wipe their analysis. The solution: student work goes to `~/novabrew-workspace/`, progress goes to `~/.codex-for-business/progress.json`, and the course repo itself is read-only reference material. Three separate locations, zero conflict.

## Speed of Iteration: From Idea to Deployed in One Session

Here's the timeline:

1. **Research** (20 min) — Fetched Carl's course structure, read through lesson scripts, understood the pattern
2. **Architecture design** (15 min) — Designed the NovaBrew scenario, module progression, workspace separation, conductor pattern
3. **Parallel build** (30 min) — Launched 6 agents simultaneously: business scenario files, Module 0+1 lessons, Module 2+3 lessons, root conductor, GitHub Pages site, supporting files
4. **Structural audit** (15 min) — Couldn't test it interactively, so ran an automated audit agent that found 3 P0 bugs, 8 P1s, and 4 P2s
5. **Bug fixes + workspace architecture** (15 min) — Fixed path references, separated workspaces
6. **Codespaces integration** (15 min) — Added devcontainer with full-auto mode, zero-install setup script
7. **Deploy** (5 min) — Pushed to GitHub, configured Pages, verified the site

Total: about two hours from "I should build this" to a live course at [vishalsachdev.github.io/codex-for-business-students](https://vishalsachdev.github.io/codex-for-business-students/).

That speed wasn't because the work was shallow. It was because the *design* decisions — which are the hard part — were already in my head from years of teaching. The AI collapsed the implementation time from weeks to hours. That's the compound engineering loop in action: domain expertise + AI fluency produces results that neither can achieve alone.

## Context Engineering Is Curriculum Design

The deepest lesson from this project: writing an `AGENTS.md` lesson script is exactly like writing a curriculum. You're engineering context. You're deciding what the AI knows, what tone it takes, what it reveals and when, how it handles confusion, what "done" looks like.

Consider this snippet from the root conductor:

```
**Do:**
- Use business language. Say "stakeholder", "deliverable", "ROI"
  — not "function", "variable", "dependency".
- When introducing a technical concept, give the business analogy first.
- Celebrate wins genuinely. "You just did real consulting work
  that firms charge $300/hour for."
- Normalize not knowing technical things.

**Don't:**
- Use developer jargon without explanation.
- Make the student feel behind or slow.
```

That's not prompt engineering. That's *teaching philosophy*, encoded as context. Every good teacher has these principles — they're just usually tacit. When you write them into an AGENTS.md file, you make them executable. The AI becomes a vessel for your pedagogical instincts.

This is what I mean by scaling expertise. The hard-won knowledge about how to teach business students — the analogies, the pacing, the emotional intelligence — gets encoded once and then delivered to every student individually, adaptively, at their own pace.

## How to Adapt This for Your Own Course

If you teach anything — a university course, a corporate training, a bootcamp module — here's how to build your own version:

**1. Pick a scenario, not a syllabus.** Abstract lessons don't work. Drop students into a realistic situation where the skills you're teaching are the solution. My scenario is a coffee startup with a churn problem. Yours might be a hospital optimizing patient flow, a nonprofit analyzing donor data, or a retailer building a recommendation engine.

**2. Write the AGENTS.md files as teaching scripts.** Each lesson needs: learning objectives, a teaching flow with `Say:` blocks for instructor dialogue, `STOP:` markers where the AI waits for student input, `ACTION:` blocks for hands-on exercises, and success criteria.

**3. Build a conductor.** Your root AGENTS.md should handle progress detection, lesson delivery, and student navigation. Students should never have to think about file paths.

**4. Separate work from content.** Store student artifacts outside the course repo so you can update materials without data loss.

**5. Use Codespaces for zero-install.** A `.devcontainer/devcontainer.json` with a setup script eliminates every onboarding friction point. Students click one link and they're in.

**6. Start with the free plan.** Both Codex (via free ChatGPT) and GitHub Codespaces (60 hours/month free) work at no cost. Remove the money objection entirely.

The whole project is open source: [github.com/vishalsachdev/codex-for-business-students](https://github.com/vishalsachdev/codex-for-business-students). Fork it, swap the scenario, rewrite the lessons for your domain. The architecture is the reusable part.

## What I'd Tell Other Educators

Stop thinking of AI tools as something to teach *about* and start thinking of them as something to teach *with*. When I first started [experimenting with AI in the classroom](https://chatwithgpt.substack.com/p/beyond-chatgpt-how-ai-transformed), I was analyzing student discussions and finding hidden patterns. That was powerful, but it was me using AI. This project is different — it's students using AI, learning AI, inside AI. The meta-learning is the point.

The barrier to building this kind of experience has collapsed. You don't need a development team. You don't need a learning management system. You don't need video production equipment. You need domain expertise, a realistic scenario, and a few hours with an AI coding tool.

Your expertise is the moat. The AI is the bridge.

## Try It. Break It. Tell Me What's Wrong.

This course is live but early. I've audited the structure but haven't run real students through it yet. If you're a business student, PM, or anyone curious about AI coding tools:

1. Go to [vishalsachdev.github.io/codex-for-business-students](https://vishalsachdev.github.io/codex-for-business-students/)
2. Click "Open in GitHub Codespaces" (free, nothing to install)
3. Run `codex` and say "let's start"
4. Tell me what works and what doesn't

If you're an educator who wants to build something like this for your own domain, fork the repo and experiment. I'd love to see a version for healthcare analytics, financial modeling, supply chain, HR — any domain where the practitioners have deep expertise but limited engineering support.

The whole point of AI-augmented expertise is that it compounds. Build once, teach many. Encode your knowledge, scale your reach. The course that teaches itself might be the most scalable educational format we've built yet — and we built this one in an afternoon.

---

## Session Transcript

This article was written during a live collaboration session.
[View the full conversation](https://gisthost.github.io/?c3126a4baa9220fb29dcfd57791796a2/index.html) to see how we built this together.

---

*The course is open source at [github.com/vishalsachdev/codex-for-business-students](https://github.com/vishalsachdev/codex-for-business-students). Inspired by and crediting [Carl Vellotti's Claude Code for Everyone](https://www.yourfirstcursor.com/) — the original and excellent course that pioneered teaching AI tools from inside the tool itself.*
