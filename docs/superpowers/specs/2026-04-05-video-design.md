# Video Design: "Testing AI Courses With AI"

## Overview

Two video artifacts to accompany the article "Testing AI Courses With AI":
1. **Short embed** — 15-20s animated GIF/MP4 for Substack/LinkedIn article
2. **Longer highlight reel** — ~2:30 silent video with text overlays and screenshots

## Tooling

- **Remotion** (React-based video composition)
- Screenshots from `/tmp/codex-walkthrough/before/` and `/tmp/codex-walkthrough/after/`
- Typing sound effects when screenshots appear

## Visual Style

- **Background:** Light (#FAFAFA)
- **Text:** Dark, serif headlines (Georgia or similar Substack-native feel), sans-serif body (Inter or system)
- **Screenshots:** Floating cards with subtle drop shadows (4px blur, 10% opacity black)
- **Transitions:** Fade in/out, spring-based (Remotion springs)
- **Audio:** Subtle mechanical keyboard typing sounds when screenshots enter. No music. No voice.

## Short Version (Article Embed)

- **Format:** MP4 (or animated GIF if < 5MB)
- **Duration:** 15-20 seconds
- **Content:** 3-4 frames showing the key before/after:
  1. BEFORE label + screenshot of scripted "Say: What should I look at first?"
  2. AFTER label + screenshot of choice point ("Which folder would YOU explore first?")
  3. AFTER label + screenshot of inner/outer loop introduction
- **Transitions:** Side-by-side or sequential fade with labels

## Longer Version (Highlight Reel)

**Duration:** ~2:30 (15 scenes)
**Arc:** Problem → Process → Demo (D approach)

### Scene List

| # | Duration | Type | Text Overlay | Screenshot |
|---|----------|------|-------------|------------|
| 1 | 8s | Screenshot + text | "I built an AI course that teaches inside the AI tool itself" | `before/01-initial.png` |
| 2 | 8s | Screenshot + text | "Students clone a repo, open it in Codex, and say 'let's start'" | `before/03-welcome.png` |
| 3 | 10s | Screenshot + text | "But every lesson had the same problem:" | `before/07-first-task.png` or `before/08-first-task-full.png` |
| 4 | 8s | Text only (large) | "Students were copy-pasting, not thinking" | — |
| 5 | 10s | Screenshot + text | "So I used Claude Code to automate-test the course through Chrome DevTools Protocol" | `before/02-submitted.png` |
| 6 | 8s | Text only | "One AI testing another AI's educational content" | — |
| 7 | 10s | Animated list | "The fix: 7 cognitive friction points" → items animate in: Predict / Own Prompt / Evaluate / Choose / Reflect / Critique / Discover | — |
| 8 | 10s | Screenshot + label | "BEFORE: 'Say: What should I look at first?'" | `before/14-first-analysis.png` |
| 9 | 10s | Screenshot + label | "AFTER: 'Which folder would YOU explore first, and why?'" | `after/05-file-listing-choice.png` |
| 10 | 12s | Screenshot + text | "The inner loop is AI execution. The outer loop is your judgment." | `after/06-choice-innerloop.png` |
| 11 | 8s | Screenshot + text | "Students now predict before they see" | `after/03-prediction-prompt.png` |
| 12 | 8s | Text overlay | "They write their own prompts instead of copying" | — |
| 13 | 8s | Text only | "They critique AI output before moving on" | — |
| 14 | 10s | Text + concept | "Optional Module 3.3: students modify the course itself" / "The tool improving the tool that teaches the tool" | — |
| 15 | 8s | Fade to title | "The Innermost Loop" + byline + links | — |

### Audio Design

- **Typing sounds:** Triggered when screenshots enter the frame. Use mechanical keyboard samples (soft, not aggressive). 3-5 keystrokes per screenshot appearance, timed to the spring animation.
- **No music, no voice.**
- **Silence** during text-only scenes (creates rhythm contrast with typing-sound screenshot scenes).

## Screenshot Assets

### Before (15 files)
Located at `/tmp/codex-walkthrough/before/`

Key frames used in video:
- `01-initial.png` — Fresh Codex app, "Let's build" screen
- `02-submitted.png` — Processing indicator after "let's start"
- `03-welcome.png` — Welcome message streaming
- `07-first-task.png` — "Type this:" copy-paste instruction
- `08-first-task-full.png` — Full view of scripted prompt
- `14-first-analysis.png` — "What should I look at first?" scripted response

### After (6 files)
Located at `/tmp/codex-walkthrough/after/`

Key frames used in video:
- `03-prediction-prompt.png` — "Before we look, think like a consultant..."
- `05-file-listing-choice.png` — "Which folder would you explore first?"
- `06-choice-innerloop.png` — Inner/outer loop introduction after student's choice

## Remotion Project Structure

```
video/
├── src/
│   ├── Root.tsx              — Composition registration
│   ├── Video.tsx             — Main composition (sequences all scenes)
│   ├── scenes/
│   │   ├── ScreenshotScene.tsx   — Screenshot card + text overlay
│   │   ├── TextOnlyScene.tsx     — Large centered text
│   │   ├── ListScene.tsx         — Animated list (friction points)
│   │   ├── BeforeAfterScene.tsx  — Side-by-side comparison
│   │   └── TitleScene.tsx        — Final title card
│   ├── components/
│   │   ├── ScreenshotCard.tsx    — Floating card with shadow + spring entry
│   │   └── TypewriterText.tsx    — Text that types in character by character
│   └── assets/
│       ├── screenshots/          — Copied from /tmp/codex-walkthrough/
│       └── audio/
│           └── typing.mp3        — Keyboard typing sound sample
├── package.json
└── remotion.config.ts
```

## Output

- `out/short-embed.mp4` — 15-20s, 1080p
- `out/highlight-reel.mp4` — ~2:30, 1080p
- Optional: `out/short-embed.gif` — if needed for platforms that don't support MP4 embed
