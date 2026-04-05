# Codex for BADM 350

**You built the product. Now automate the business.**

[![Works on FREE ChatGPT plan](https://img.shields.io/badge/Works%20on-FREE%20ChatGPT%20plan-00A67E?style=for-the-badge&logo=openai&logoColor=white)](https://chatgpt.com)

A customized version of [Codex for Business](https://github.com/vishalsachdev/codex-for-business-students) for BADM 350: Technology & AI Strategy at the University of Illinois. Learn to use OpenAI's Codex desktop app to automate real business processes — no coding required.

---

## Quick Start

1. **Download the Codex app** for Mac or Windows from [chatgpt.com/codex](https://chatgpt.com/codex)
2. **Get the course files** — clone this repo or download the ZIP from GitHub:
   ```bash
   git clone https://github.com/vishalsachdev/codex-for-badm350.git
   ```
3. **Open the course folder** in the Codex app
4. **Say "let's start"**

> **Linux:** The Codex desktop app currently supports Mac and Windows. Linux support is coming soon.

---

## What You'll Build

**Modules 0–2: Learn the tool** through the NovaBrew Coffee Co. scenario — a startup with messy data, board pressure, and 8 months of runway. You'll synthesize meeting notes, run parallel research agents, build custom advisors, and ship a working web app.

**Module 3: Apply it to YOUR project.** You already have a working app from your semester project. Now you'll automate two business processes to prepare for launch:

- **One marketing automation** — waitlist page with email capture, or a social content pipeline
- **One operations automation** — competitor intelligence monitor, user feedback analyzer, or launch readiness dashboard

You'll walk away with deployable artifacts and a "before vs. after" story for your board memo.

---

## Course Modules

| # | Module | Time | What You'll Do |
|---|--------|------|----------------|
| **0** | **Getting Started** | 10 min | Meet NovaBrew, run your first prompt |
| **1.1** | Your First Business Prompt | 20 min | Process inherited PM notes, learn how Codex reads/writes files |
| **1.2** | File Exploration & Context | 25 min | Parse meeting notes, earnings transcripts, survey data |
| **1.3** | Working with Business Files | 30 min | Create financial models, customer analyses, strategy docs |
| **1.4** | Parallel Agents | 25 min | Launch 3 agents simultaneously on NovaBrew's retention problem |
| **1.5** | Custom Agents & Skills | 30 min | Build reusable business agents with AGENTS.md and Skills |
| **1.6** | Project Memory | 20 min | Give Codex persistent context about your business |
| **1.7** | What's Next | 10 min | Review fundamentals, prepare for vibe coding |
| **2.1** | Project Setup | 20 min | Choose your project and scaffold it |
| **2.2** | The Planning Interview | 25 min | Codex runs a Socratic planning session like a senior PM |
| **2.3** | Build & Iterate | 30 min | Describe features in plain English, watch them appear |
| **2.4** | GitHub & Version Control | 15 min | Push to GitHub with a professional README |
| **2.5** | Deploy & Go Live | 15 min | Ship to GitHub Pages — get a live URL for your portfolio |
| **3.1** | Toolkit Kickoff | 20 min | Set up your project context, choose 2 automations from the menu |
| **3.2** | Build Your Automations | 75 min | Build both automations, deploy artifacts, write reflections |
| | **Total** | **~6 hrs** | |

---

## Prerequisites

- A Mac or Windows computer
- The [Codex desktop app](https://chatgpt.com/codex) (free download)
- A free [ChatGPT account](https://chatgpt.com/) (or ChatGPT Plus for faster responses)
- A free [GitHub account](https://github.com/) (for deploying your project)
- **Your BADM 350 semester project** — live URL, Supabase database, Checkpoint 4 report
- **Zero coding experience required** — just business thinking

---

## Who This Is For

BADM 350 students at the University of Illinois who have a working app and want to automate their go-to-market and operations before the final presentation.

---

## Project Structure

```
codex-for-badm350/
├── lesson-modules/              # All course lessons (AGENTS.md in each folder)
│   ├── 0-getting-started/
│   ├── 1-fundamentals/
│   ├── 2-vibe-coding/
│   └── 3-pre-launch-toolkit/   # YOUR project — marketing + operations automation
├── business-scenario/           # NovaBrew company files (the "inherited chaos")
├── templates/                   # Reusable business templates
├── docs/                        # Course website (GitHub Pages)
├── course-structure.json        # Machine-readable course outline
└── SPEC.md                      # Course design specification
```

---

## The Pre-Launch Toolkit (Module 3)

After learning Codex through NovaBrew, you'll choose 2 automations for your own project:

**Marketing & Acquisition (pick one):**
| # | Automation | What It Automates |
|---|-----------|-------------------|
| 1 | Waitlist & Teaser Campaign | Lead generation: visitor → signup → confirmation → nurture sequence |
| 2 | Social Content Pipeline | Content marketing: product knowledge → platform-tailored posts → scheduled distribution |

**Operations & Intelligence (pick one):**
| # | Automation | What It Automates |
|---|-----------|-------------------|
| 3 | Competitor Intelligence Monitor | Market intelligence: raw competitor data → structured analysis → strategic recommendations |
| 4 | User Feedback Analyzer | Feedback triage: raw comments → classified themes → prioritized roadmap |
| 5 | Launch Readiness Dashboard | Quality assurance: manual testing → automated multi-dimension audit → prioritized fix list |

Each automation involves multiple steps with intermediate outputs — this is process automation, not single-prompt generation.

---

## Credits

Adapted from [Codex for Business](https://github.com/vishalsachdev/codex-for-business-students), which was inspired by [Claude Code for Everyone](https://www.yourfirstcursor.com/) by Carl Vellotti.

---

## License

MIT License. See [LICENSE](LICENSE) for details.
