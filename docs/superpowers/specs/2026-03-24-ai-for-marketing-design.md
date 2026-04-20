# Augmented Intelligence (AI) for Marketing Teams — Design Spec

**Date**: 2026-03-24
**Status**: Draft
**Author**: Vishal Sachdev
**Based on**: Codex for Business Students (codex-for-business-students repo)

> Archive note: This is an older concept spec for a separate marketing-team workshop. It does not reflect the current student-facing BADM 350 course structure or naming.

---

## 1. Course Identity

**Name**: Augmented Intelligence (AI) for Marketing Teams

**Tagline**: "If you can write a brief, you can build a tool."

**Core message**: AI isn't a chatbot you visit — it's an intelligent coworker that reads your files, understands your context, and handles the tedious so you can focus on the creative and strategic. This course teaches you to work *with* AI, not just *talk to* it.

**Audience**: Gies College of Business marketing staff (22 people). Marketing professionals comfortable with tools like Google Workspace, Canva, Figma, CMS platforms, social schedulers. Not developers. Not afraid of technology, but haven't used a coding agent before.

**Primary tool**: OpenAI Codex. Course language is written to be tool-agnostic where possible (works with Claude Code, Cursor, or other agent tools with minor adjustments).

**Duration**: ~6-7 hours total across 4 modules (including facilitation overhead, breaks, and setup buffer). Recommend a full-day workshop or two half-day sessions.

**Delivery**: Facilitated workshop with a coordinated start. The course folder is pre-loaded in Box alongside the MSBA Online materials — no git clone required. Staff open the folder in Codex and say "let's start." The root AGENTS.md acts as a Course Conductor that routes them through lessons. Two hard facilitation gates: (1) tool connection verification before Module 1.1 begins, and (2) a coordinated Team Sync at Module 1.7. See Section 11 for the full facilitation schedule.

---

## 2. The Scenario

**Real, not fictional.** The Gies marketing team is launching the MSBA Online program (Fall 2026). Brad Petersen (CMO) kicks off the course with a challenge brief:

> "Team — the MSBA Online program is our most important launch of the year, and I want us to enter this campaign with more leverage than we've ever had. This is not a software demo. It's a chance for each of you to figure out what part of your job AI can handle in ten seconds instead of two hours — and then actually build that thing. The materials you're working with are real. The challenge is real. By the end of the day, I want to see what Priyanka's competitive synthesis looks like when she has a research assistant that reads 40 documents overnight. I want to see what Tom's brief-writing process looks like when the first draft takes three minutes. I want to see what Jordan's brand consistency workflow looks like when an agent checks every asset against the brand book before it ships. Show me what you've got."

The materials they explore are the actual MSBA Online documents: strategy docs, competitive analysis, email threads, meeting notes, target profiles, curriculum plans. The training IS the work.

---

## 3. Team Roster

22-person team led by Brad Petersen (CMO), organized across functional areas:

| # | Name | Title | Office | Email |
|---|------|-------|--------|-------|
| 1 | Petersen, Brad | Chief Marketing Officer | 108 Wohlers Hall | bradp@illinois.edu |
| 2 | Bennett, Aaron | Director of Communications | 470 A Wohlers Hall | aaronb5@illinois.edu |
| 3 | Halfar, Lindsey | Director of Marketing | 120 Wohlers Hall | lsavoie@illinois.edu |
| 4 | Bhargava, Priyanka | Director of Insights & Strategy | 126 Wohlers Hall | pxb@illinois.edu |
| 5 | Mechling, Nicole | Creative Director | 470 H Wohlers Hall | nmechli2@illinois.edu |
| 6 | Pauley, Garrett | Director of Digital Media | 85 Wohlers Hall | gpauley2@illinois.edu |
| 7 | Onyejekwe, Kathleen | Director of Brand Engagement | 126 Wohlers Hall | kdj@illinois.edu |
| 8 | McDonald, Tyrone | Senior Director of Websites | — | troym@illinois.edu |
| 9 | Bednarz, Morgan | Asst. to CMO / Sr. Operations Specialist | — | mbednarz@illinois.edu |
| 10 | Campion, Alexandra | Assistant Director of Social Media | — | campiona@illinois.edu |
| 11 | White, Jeremy | Senior Project Manager | 111 Wohlers Hall | jeremyw@illinois.edu |
| 12 | White, Jordan | Associate Director of Brand Engagement | 220 D Wohlers Hall | jbonnell@illinois.edu |
| 13 | Hart, Andy | Brand Designer | 470 K Wohlers Hall | ajhart@illinois.edu |
| 14 | Cox, Jeremiah | Brand Photographer | — | jcox77@illinois.edu |
| 15 | Smith, Ryan | Video Producer | 85 Wohlers Hall | rsmith99@illinois.edu |
| 16 | Moone, Tom | Sr. Marketing Coordinator / Sr. Copywriter | 120 Wohlers Hall | moone@illinois.edu |
| 17 | Swim, Megan | Marketing Specialist | 126 Wohlers Hall | mswim2@illinois.edu |
| 18 | Elliott, Paul | Marketing Coordinator | 126 Wohlers Hall | elliott7@illinois.edu |
| 19 | Thurman, Jackson | Digital Marketing Coordinator | 120 Wohlers Hall | jtthurm2@illinois.edu |
| 20 | Gegg, Tyler | Web Content Specialist | 120 Wohlers Hall | tgegg@illinois.edu |
| 21 | Koon, Michael | Research Communications Coordinator | — | mkoon@illinois.edu |
| 22 | Moist, John | Research Communications Coordinator | — | — |

**Functional areas for team folders:**

| Folder | Team Members | Focus |
|--------|-------------|-------|
| competitive/ | Priyanka Bhargava | Insights & Strategy |
| messaging/ | Aaron Bennett | Communications |
| brand/ | Kathleen Onyejekwe, Jordan White, Andy Hart | Brand Engagement + Design |
| digital/ | Garrett Pauley, Alexandra Campion, Jackson Thurman | Digital/Social Media |
| web/ | Tyrone McDonald, Tyler Gegg | Websites |
| content/ | Nicole Mechling, Tom Moone | Creative/Copy |
| research-comms/ | Michael Koon, John Moist | Research Communications |
| media/ | Ryan Smith, Jeremiah Cox | Video/Photography |

Supporting roles (Brad, Morgan, Jeremy, Lindsey, Megan, Paul, Elliott) participate across areas based on their current projects.

---

## 4. Module Structure

### Module 0: Getting Started (30 min, including buffer)

**0.1 Welcome & Setup**
- Brad's brief (live or video, 5 min) — sets the challenge and stakes
- Install Codex (pre-installed on workshop machines, or guided install)
- Meet the Course Conductor — say "let's start"
- Verify Box folder is accessible (course materials + MSBA Online knowledge base)
- Run the connection setup script (`reference/setup-connections.sh` or `.ps1`) — this pre-configures the MSBAi bot and Box connections automatically
- **FACILITATOR GATE**: facilitator circulates and confirms all 22 have working connections before anyone proceeds to 1.1. This is the single most important gate in the workshop.
- Create local workspace: `~/marketing-workspace/`
- First-run init creates progress file at `~/.ai-for-marketing/progress.json`

### Module 1: Fundamentals — "The Brief" (2.5-3 hours)

**1.1 Your First Prompt**
- Open the MSBA Online materials (via Box folder)
- Ask Codex to summarize the competitive landscape from strategy docs
- Key insight: Codex reads YOUR files, not the internet

**1.2 Exploring Context**
- Navigate the real materials: strategy docs, email threads, meeting notes
- Codex finds patterns across messy files that would take hours manually
- Staff see familiar names (their own colleagues!) in the email threads

**1.3 Working with Files**
- Create marketing deliverables from the source materials
- Competitive brief, audience persona, messaging matrix
- Uses templates from course folder's `templates/` directory
- "AI as associate, you as creative director"
- **Save your deliverable to your team folder in Box** — this seeds content for Module 1.7

**Facilitator check-in #1**: "Show me your persona output." Confirms no one is stuck. (5 min)

**1.4 Parallel Agents**
- Run multiple agents on different tasks: one on competitive analysis, one on target profiles, one on pricing
- See results from all three — "your team just got bigger"
- Note: if the tool doesn't support true parallel agents, run them sequentially. The insight is the same: AI handles the volume, you handle the judgment.

**1.5 Custom Agents & Project Memory** (merged — these are the same concept: AGENTS.md)
- Build role-specific agents: Brand Voice Checker, Campaign Brief Generator, Research Summarizer
- Pre-built agents in course folder's `agents/` directory as starting points
- Introduction to AGENTS.md as "a brand book for your AI" — it remembers your brand guidelines, target audience, key messages, and preferences across sessions
- Write an AGENTS.md for the MSBA Online launch project
- **Save it to your team folder in Box** — this feeds the Team Sync

**Consolidation debrief** (10 min, whole room): Facilitator asks: "What's the difference between a custom agent and a regular prompt? When would you use each?" This cements 1.4-1.5 before the next phase.

**1.6 Connecting to Your Team's AI**
- The connections were set up in Module 0 — now USE them
- Query the MSBAi bot from inside Codex: "What decisions have been made about pricing?"
- Search team folders in Box: "Find the latest competitive brief"
- Exercise: use bot for target audience → Box for competitive analysis → write positioning brief combining both
- Key insight: "Your AI isn't one tool — it's connected to your team's entire knowledge network"

**1.7 Team Sync** *(HARD STOP — facilitated, whole room together)*
- **Facilitator announces**: "Everyone stop. Let's see what the team produced."
- Review what teammates produced in their functional areas (via Box)
- Co-create the shared AGENTS.md in `shared/` — one person drafts on screen, others contribute, facilitator manages
- **AHA moment**: each person's individual analysis reveals a different facet of the positioning challenge. When they see each other's work, the pieces click into a unified go-to-market narrative no single person could have produced alone.
- The MSBAi bot can now answer questions about everyone's work

**Sequencing note**: Lessons 1.3 and 1.5 each require saving an artifact to Box, which pre-seeds the team folders for 1.7. The facilitator hard-stop ensures the room arrives together. Pre-seeded example outputs in 2-3 folders provide baseline content in case some areas are sparse.

### Module 2: Build — Split Track (1.5-2 hours)

Staff choose a track based on their role (guided by `reference/track-guide.md`).

**TRACK A: "Build a Tool"** (recommended for: web, digital, data-oriented roles)

- 2A.1 Project Setup — choose: campaign landing page, analytics dashboard, or social content calendar
- 2A.2 Planning Interview — Codex runs a Socratic planning session (goal, audience, MVP)
- 2A.3 Build & Iterate — describe what you want, Codex builds it, iterate on design and functionality. Codex reads from Box (via Box Drive or MCP) during the build to pull in real content (copy, data, brand assets) produced by the team.
- 2A.4 Ship It — deploy via Netlify Drop (drag build folder to app.netlify.com/drop), get a live URL. No account required for a one-off deploy; free Netlify account for a permanent URL.

**Important**: Track A tools are **static sites** (HTML/CSS/JS). They do not require a running agent or MCP connection at runtime. All content from Box is baked into the build at development time. Once deployed, the site stands alone.

**TRACK B: "Build a Workflow"** (recommended for: content, comms, research, creative roles)

- 2B.1 Workflow Setup — choose: content production pipeline, research digest automation, or campaign brief system
- 2B.2 Design the Workflow — map inputs → processing → outputs with Codex
- 2B.3 Build & Iterate — describe what you want, Codex creates the automation pieces (templates, prompt sequences, AGENTS.md playbooks)
- 2B.4 Demo It — run the workflow end-to-end, save output to Box builds/ folder

Workflow pulls from Box knowledge-base/ as input — real materials, real output.

### Module 3: Final Showcase — "Show Brad" (30-45 min)

**3.1 Your Deliverable**
- Build something for your actual role using what you learned
- Codex reads the full shared Box folder — everything the team produced
- Short write-up: what you built, how it helps, what you'd do next

**3.2 Team Showcase**
- MSBAi bot synthesizes the team's combined output
- "Here's what 22 people built in 5 hours with AI"
- Brad gets a real go-to-market package, not a training exercise

---

## 5. Architecture

### Course Folder

The course folder is distributed via Box (not git clone). It lives inside the shared Box folder so staff access it the same way they access any Box content — no terminal, no git, no download step.

```
ai-for-marketing/
├── AGENTS.md                              # Course Conductor
├── course-structure.json                  # Machine-readable lesson index (not student-facing)
├── README.md                              # Setup instructions
│
├── lesson-modules/
│   ├── 0-getting-started/
│   │   └── 0.1-welcome/AGENTS.md
│   ├── 1-fundamentals/
│   │   ├── 1.1-first-prompt/AGENTS.md
│   │   ├── 1.2-exploring-context/AGENTS.md
│   │   ├── 1.3-working-with-files/AGENTS.md
│   │   ├── 1.4-parallel-agents/AGENTS.md
│   │   ├── 1.5-custom-agents-and-memory/AGENTS.md
│   │   ├── 1.6-team-ai/AGENTS.md
│   │   └── 1.7-team-sync/AGENTS.md
│   ├── 2-build/
│   │   ├── track-a-tool/
│   │   │   ├── 2a.1-setup/AGENTS.md
│   │   │   ├── 2a.2-planning/AGENTS.md
│   │   │   ├── 2a.3-build/AGENTS.md
│   │   │   └── 2a.4-ship/AGENTS.md
│   │   └── track-b-workflow/
│   │       ├── 2b.1-setup/AGENTS.md
│   │       ├── 2b.2-design/AGENTS.md
│   │       ├── 2b.3-build/AGENTS.md
│   │       └── 2b.4-demo/AGENTS.md
│   └── 3-capstone/
│       ├── 3.1-your-deliverable/AGENTS.md
│       └── 3.2-team-showcase/AGENTS.md
│
├── reference/
│   ├── team-roster.md                     # Full team with titles (emails in admin-only doc)
│   ├── setup-connections.sh               # macOS: auto-configures MCP connections
│   ├── setup-connections.ps1              # Windows: auto-configures MCP connections
│   ├── quick-reference.md                 # One-page cheat sheet (also printed for desks)
│   ├── troubleshooting.md                 # Top failure modes + plain-English fixes
│   └── track-guide.md                     # 3-question diagnostic: "Which track fits you?"
│
├── templates/
│   ├── competitive-brief.md
│   ├── audience-persona.md
│   ├── messaging-matrix.md
│   ├── campaign-brief.md
│   └── workflow-template.md
│
├── agents/                                # Pre-built custom agents for Module 1.5
│   ├── brand-voice-checker.md
│   ├── campaign-strategist.md
│   └── research-summarizer.md
│
├── mcp-servers/                           # MCP server wrappers (run locally via stdio)
│   └── msba-bot/                          # Wraps the MSBAi bot web chat endpoint
│       ├── index.js                       #   ~100 lines, proxies to POST /chat
│       └── package.json
│
└── docs/                                  # Landing page (GitHub Pages, optional)
    ├── index.html
    └── styles.css
```

### Box Shared Folder (pre-provisioned by admin)

```
Box / Gies Marketing / MSBA Online Launch/
├── knowledge-base/                        # Curated MSBA Online materials (read-only)
│   ├── strategy/                          #   AI_FIRST_STRATEGY, COMPETITIVE_ANALYSIS
│   ├── program/                           #   CURRICULUM, TARGET_PROFILE, DESIGN_PRINCIPLES
│   ├── discussions/                       #   Key email threads, meeting notes
│   └── README.md                          #   "What's in here and how to use it"
│
├── shared/                                # Team-wide assets
│   ├── AGENTS.md                          #   Shared project memory (co-created in 1.8)
│   ├── brand-guidelines.md
│   └── messaging-pillars.md
│
├── team/                                  # One folder per functional area
│   ├── competitive/
│   ├── messaging/
│   ├── brand/
│   ├── digital/
│   ├── web/
│   ├── content/
│   ├── research-comms/
│   └── media/
│
└── builds/                                # Module 2 + 3 outputs
    ├── tools/                             #   Track A builds
    └── workflows/                         #   Track B outputs
```

### Local Workspace (created on first run)

```
~/marketing-workspace/
├── box-sync → <Box Drive mount path>/Gies Marketing/MSBA Online Launch/
└── project/                               # Module 2 build workspace (local)
```

**Box Drive path detection**: Box Drive mounts at different paths depending on OS and version:
- macOS (modern): `~/Library/CloudStorage/Box-Box/`
- macOS (legacy Box Sync): `~/Box/`
- Windows: `C:\Users\<name>\Box\`

The first-run init script in Module 0.1 must detect the correct path before creating the symlink. If Box Drive is not installed, fall back to using Box MCP exclusively for file access (no symlink needed — Codex reads/writes via MCP tools instead of filesystem).

### Progress Tracking

`~/.ai-for-marketing/progress.json` — stored in home directory, survives repo re-clones.

### Course Structure (course-structure.json)

The `course-structure.json` must include all 17 lessons across both tracks:

| ID | Title | Est. Minutes |
|----|-------|-------------|
| 0.1 | Welcome & Setup | 30 |
| 1.1 | Your First Prompt | 20 |
| 1.2 | Exploring Context | 25 |
| 1.3 | Working with Files | 30 |
| 1.4 | Parallel Agents | 25 |
| 1.5 | Custom Agents & Project Memory | 40 |
| 1.6 | Connecting to Your Team's AI | 25 |
| 1.7 | Team Sync | 20 |
| 2a.1 | Project Setup (Track A) | 20 |
| 2a.2 | Planning Interview (Track A) | 25 |
| 2a.3 | Build & Iterate (Track A) | 30 |
| 2a.4 | Ship It (Track A) | 15 |
| 2b.1 | Workflow Setup (Track B) | 20 |
| 2b.2 | Design the Workflow (Track B) | 25 |
| 2b.3 | Build & Iterate (Track B) | 30 |
| 2b.4 | Demo It (Track B) | 15 |
| 3.1 | Your Deliverable | 30 |
| 3.2 | Team Showcase | 15 |

Progress tracking only records lessons from the chosen track (A or B), not both. The Course Conductor asks which track at the start of Module 2 and records the choice in progress.json.

---

## 6. MCP Integration

### Connection 1: MSBAi Bot

The nanoclaw-msbai bot has a web chat endpoint (`POST /chat`). **A thin MCP server wrapper must be built** (~100 lines of Node.js using `@modelcontextprotocol/sdk`) that:
1. Implements MCP protocol over stdio (most universally supported transport)
2. Exposes one tool: `query_msba_knowledge_base(question: string)`
3. Proxies the tool call to the existing `POST /chat` endpoint
4. Returns the bot's response with citations

This wrapper ships in the course folder under `mcp-servers/msba-bot/` and runs locally on each user's machine (spawned by Codex from MCP config). No new deployment needed.

**Use cases:**
- "What decisions have been made about pricing?"
- "What does the competitive analysis say about Georgia Tech?"
- "Summarize the target audience profile"

**Setup:** Pre-configured via `reference/setup-connections.sh`. Requires `MSBA_BOT_URL` and `MSBA_BOT_SECRET` env vars (distributed with API keys). Module 0.1 runs the setup script; Module 1.6 is the first time students use it.

### Connection 2: Box

**Primary access method: Box Drive (local filesystem).** Box Drive syncs the shared folder to the local filesystem. Codex reads and writes files normally — no special integration needed. This is the simplest and most reliable path.

**Secondary access (if available): Box MCP.** Box MCP tools provide search, read, and write capabilities from inside Codex. **IMPORTANT**: the Box MCP integration available in Claude's enterprise environment (`mcp__claude_ai_Box__*`) may not be available as a standalone MCP server for OpenAI Codex. This must be verified before the workshop. If Box MCP is Claude-specific, all Box access falls back to Box Drive filesystem access, which works perfectly well.

**Use cases (via Box Drive or Box MCP):**
- "Find the latest competitive brief in the team folder"
- "Read what Aaron posted in messaging/"
- "Save my analysis to team/digital/"

**Setup:** Box Drive must be installed and synced before the workshop. The setup script verifies the mount path. If Box MCP is available, the setup script configures it too.

### How the two MCPs complement each other

| Need | Use | Why |
|------|-----|-----|
| Conversational knowledge query | MSBAi bot | Searches full knowledge base, returns citations |
| Direct file access | Box MCP | Read/write specific team artifacts |
| Save work for team visibility | Box MCP or Box Drive sync | Artifacts appear in shared folder |
| Cross-team synthesis | MSBAi bot or Codex via Box Drive | Combine outputs from multiple team folders |

---

## 7. Admin Setup Checklist

Pre-training provisioning (done by Vishal):

**CRITICAL PATH (workshop cannot run without these):**

```
□ Build MSBAi MCP wrapper
  └── ~100 lines Node.js in mcp-servers/msba-bot/
  └── Uses @modelcontextprotocol/sdk, stdio transport
  └── Tested against Codex (and Claude Code for portability)
  └── Requires MSBA_BOT_URL + MSBA_BOT_SECRET env vars

□ Verify Box MCP availability for non-Claude clients
  └── Does Box publish a standalone MCP server for Codex/Cursor?
  └── If yes: include in setup-connections script
  └── If no: all Box access via Box Drive filesystem (this is fine)

□ Build setup-connections scripts
  └── reference/setup-connections.sh (macOS) + .ps1 (Windows)
  └── Auto-detects Box Drive mount path
  └── Writes MCP config for MSBAi bot (and Box MCP if available)
  └── Sets env vars from distributed credentials
  └── Tested on macOS + Windows with non-admin accounts
```

**PRE-WORKSHOP PROVISIONING:**

```
□ Box shared folder (create via Box MCP)
  └── Full folder structure per Section 5
  └── knowledge-base/ populated with CURATED MSBA Online materials
      └── Lighter-touch: Vishal curates, uses judgment on sensitive threads
      └── Strategy docs, program docs, and curated discussion excerpts
  └── Permissions: read-write on team/ and builds/, read-only on knowledge-base/
  └── Starter AGENTS.md in shared/
  └── Course folder (ai-for-marketing/) placed in Box alongside knowledge-base/

□ Pre-seed team folders
  └── 2-3 team/ subfolders with example outputs
  └── Sample competitive brief, draft audience persona
  └── So early finishers at Lesson 1.7 see real content

□ MSBAi bot
  └── Endpoint accessible to team
  └── Auth tokens generated (per-person or shared team token)
  └── Web chat endpoint tested

□ API keys
  └── OpenAI API keys (one per person or shared pool)
  └── Distributed separately (email or printed cards at desks)

□ Netlify
  └── URL: app.netlify.com/drop (no account needed for one-off deploys)
  └── Only needed for Track A participants

□ Verify Box Drive mount paths
  └── Test on macOS (~/Library/CloudStorage/Box-Box/) and Windows (C:\Users\<name>\Box\)
  └── Confirm setup-connections script detects correct path
  └── Confirm Box Drive is NOT set to "online-only" mode (files must be locally cached)

□ Brad's brief
  └── Written and placed in Box shared folder
  └── Recommended: Brad records a 2-min video or opens the workshop live (5 min)
  └── See Section 2 for Brad's recommended language

□ Workshop logistics
  └── Printed quick-reference cards at each desk
  └── Facilitator (Vishal) + 1 tech support person for setup troubleshooting
  └── Three proposed dates sent to Brad (avoid board presentations, enrollment season)

□ Pilot run
  └── One person completes the full course end-to-end before workshop
  └── Artifacts shown to Brad as proof of deliverable quality
```

---

## 8. Key Design Decisions

1. **Real scenario, not fictional.** The MSBA Online launch provides authentic materials and a real challenge. The training produces real deliverables.

2. **Box over GitHub for collaboration.** Marketing teams live in Box. Eliminates git friction. Box Drive provides local filesystem access that Codex reads natively.

3. **Split track in Module 2.** Web/digital folks build tools (Track A). Content/comms folks build workflows (Track B). Everyone gets value from their role's perspective.

4. **Two MCP connections.** MSBAi bot for conversational knowledge queries. Box MCP for direct file access. Together they form a "team AI network."

5. **Netlify Drop for deploys.** Drag-and-drop deployment for Track A. No git required.

6. **Tool-agnostic language.** Primary target is OpenAI Codex. Scripts avoid Codex-specific terminology where possible so the course works with Claude Code, Cursor, or other agent tools.

7. **Markdown for deliverables.** AI works best with plain text. Staff draft in markdown with Codex, convert to polished formats as needed. CSV for spreadsheet use cases.

8. **The training IS the work.** Brad gets real go-to-market artifacts at the end, not throwaway exercises. The AHA moment in Module 1.7 (Team Sync) is when the team sees how individual analyses combine into a unified narrative.

---

## 9. Differences from Student Course

| Aspect | Student Course | Marketing Course |
|--------|---------------|-----------------|
| Scenario | Fictional (NovaBrew Coffee Co.) | Real (MSBA Online launch) |
| Audience | Business students, zero experience | Marketing professionals, tool-savvy |
| Collaboration | Individual only | Team-based with shared Box folder |
| File storage | Local filesystem + GitHub | Box Drive + local workspace |
| MCP integrations | None | MSBAi bot + Box |
| Build module | Single track (build an app) | Split: Build a Tool vs. Build a Workflow |
| Deploy target | GitHub Pages | Netlify Drop (Track A only) |
| Version control | Git taught as a module | Not required |
| Final showcase | Portfolio piece + case study | Team deliverable for Brad |
| AHA moment | Individual insight (Coffee Quiz) | Team synthesis (unified go-to-market) |
| Course Conductor tone | "Smart friend, never condescending" | Same, but uses marketing language natively |

---

## 10. Lesson Script Conventions

Same pattern as student course:

- **Say:** blocks — dialogue spoken to the learner (warm, marketing-savvy, never developer jargon)
- **STOP:** blocks — pause and wait for learner response
- **ACTION:** blocks — instructions for Codex to execute (run commands, create files, etc.)
- **Important Notes for Codex** — tone, pacing, recovery guidance
- **Success Criteria** — checklist before moving to next lesson

Additional conventions for this course:
- Reference team members by name where relevant ("Let's see what Priyanka's team found...")
- Use marketing language naturally (campaigns, briefs, assets, deliverables — not repos, commits, endpoints)
- Frame technical concepts with marketing analogies ("AGENTS.md is like a brand book for your AI")
- Never break character. The Course Conductor is a marketing-savvy AI trainer.
- **Track A must constrain Codex to plain HTML/CSS/JS** — no Next.js, no React frameworks. Codex will default to `create-next-app` if unconstrained; lesson scripts must explicitly direct it to generate vanilla static files.

**Jargon translation table** (lesson scripts must use the right column, never the left):

| Technical Term | Student-Facing Language |
|---|---|
| Clone the repo | Open the course folder in Box |
| MCP / Model Context Protocol | A plug-in that lets your AI talk to other tools |
| Symlink | Shortcut to your Box folder |
| AGENTS.md | Your AI's brand book / playbook |
| Deploy | Get a live link you can share |
| Push (to Box) | Save your work to the team folder |
| Static site | A web page with a shareable link |
| Netlify Drop | Drag your folder here to get a live link |
| Parallel agents | Running multiple AI tasks at once |
| Repo / repository | Project folder |
| CLI / terminal | The app where your AI works |
| Markdown | Plain text with simple formatting (# for headings, ** for bold) |
| Scripts (code) | Automation pieces / prompt sequences |

**Error recovery**: Each lesson script for high-risk moments (0.1 setup, 1.6 MCP, 2A.4 Netlify, 2B.4 workflow run) must include an explicit "If this doesn't work:" block with plain-English troubleshooting steps. See `reference/troubleshooting.md` for the master list.

---

## 11. Facilitation Schedule

Two half-day structure (recommended, confirmed):

**DAY 1: Fundamentals (~3.5 hours)**

```
0:00  Brad's brief (live, 5 min) — sets stakes, names specific people
0:05  Module 0.1: Setup + connection verification (25 min)
      → FACILITATOR GATE: all 22 confirmed working before proceeding
0:30  Modules 1.1–1.3, self-paced (75 min)
1:45  Facilitator check-in #1: "Show me your persona output" (5 min)
1:50  Modules 1.4–1.5, self-paced (55 min)
2:45  Consolidation debrief: whole room, 10 min
      → "What's the difference between a custom agent and a regular prompt?"
2:55  Module 1.6: Connecting to Your Team's AI, self-paced (25 min)
3:20  Module 1.7: HARD STOP — Team Sync, whole room together (20 min)
      → Facilitator drives this on screen. Not self-paced.
3:40  Day 1 close: Track selection (facilitator circulates with diagnostic)
      → "Think overnight about what you want to build tomorrow"
3:50  END DAY 1
```

**DAY 2: Build + Showcase (~3 hours)**

```
0:00  Quick recap + track confirmation (10 min)
0:10  Module 2, self-paced by track (90 min)
1:40  BREAK (10 min)
1:50  Module 3.1: Your Deliverable (30 min)
2:20  Module 3.2: Team Showcase, whole room (20 min)
      → Brad present for this
2:40  Close + "what's next" discussion (20 min)
      → What worked? What will you keep using? What do you need next?
3:00  END DAY 2
```

**Advantage of two half-days**: Team has overnight to process Module 1 concepts, think about what they want to build, and arrive at Day 2 with intent. Day 2 energy is focused on building, not learning.

**Two non-negotiable facilitation moves:**
1. The connection gate at Day 1 0:30 — nobody proceeds until everyone works
2. The hard stop for 1.7 Team Sync — this is the payoff, not an optional step

---

## 12. Module 3 Deliverable Menu

Concrete example outputs per functional area, so nobody faces a blank canvas:

| Functional Area | Track | Example Deliverable |
|---|---|---|
| Insights & Strategy (Priyanka) | B | Automated competitive monitoring workflow — pulls new data, compares to positioning, flags gaps |
| Communications (Aaron) | B | Press release draft pipeline — from program facts to AP-style release in one prompt sequence |
| Brand Engagement (Kathleen, Jordan) | B | Brand consistency checker — AGENTS.md that reviews any asset against Gies brand guidelines |
| Digital/Social (Garrett, Alexandra, Jackson) | A | Social content calendar dashboard — shows planned posts, key dates, messaging pillars |
| Websites (Tyrone, Tyler) | A | MSBA Online landing page prototype — with real copy, target persona messaging, CTA |
| Creative/Copy (Nicole, Tom) | B | Campaign brief generator — input: campaign goal + audience → output: formatted brief with messaging matrix |
| Research Comms (Michael, John) | B | Research digest automation — summarizes faculty publications into newsletter-ready blurbs |
| Media (Ryan, Jeremiah) | B | Research-backed shot list generator — input: campaign brief → output: shot list with locations, setups, mood references |

These are suggestions, not requirements. Staff can build anything relevant to their role.

---

## 13. Decisions & Open Questions

**Resolved:**
- **Box Drive**: Confirmed — Box Drive syncs files locally. Codex reads them normally. No "online-only" concern.
- **Post-workshop continuity**: Box folder persists. This is a test run, but may become the foundation of a new team workflow. Infrastructure stays up.
- **Knowledge-base curation**: Lighter-touch process. Vishal curates, no formal CMO sign-off gate required. Use judgment on sensitive email threads.
- **Workshop format**: Two half-days. Day 1: Modules 0 + 1 (setup through Team Sync). Day 2: Module 2 + 3 (build + showcase). Overnight processing time between fundamentals and building.
- **Pilot run**: Vishal runs through the full course first (QA pass + artifact generation). Consider asking one team member (Priyanka or Garrett) for a dry run if time allows. Pilot artifacts shown to Brad as proof of concept before scheduling the team workshop.

**Also resolved:**
- **Netlify URLs**: Public URLs on personal accounts are fine. No concerns.
- **Pilot method**: Vishal (via Claude) simulates a staff member going through the full course. Serves as QA pass + artifact generation for Brad.
- **Module 4 / follow-up**: Not planned. Revisit if demand emerges after the workshop.
