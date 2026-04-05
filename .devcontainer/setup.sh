#!/usr/bin/env bash
set -euo pipefail

echo ""
echo "================================================"
echo "  Setting up Codex for Business..."
echo "================================================"
echo ""

# ── Install Codex CLI ──────────────────────────────
echo "Installing Codex CLI..."
npm install -g @openai/codex 2>/dev/null

# ── Configure full-auto mode (no permission prompts) ──
mkdir -p ~/.codex
cat > ~/.codex/config.yaml << 'YAML'
# Codex for Business — auto-configured for the course
# full-auto: no permission prompts (safe in this container)
approvalMode: full-auto
fullAutoErrorMode: ignore-and-continue
notify: false
YAML

# ── Create student workspace ───────────────────────
mkdir -p ~/novabrew-workspace/{analysis,reviews}

# ── Initialize progress tracking ───────────────────
mkdir -p ~/.codex-for-business
if [ ! -f ~/.codex-for-business/progress.json ]; then
  cat > ~/.codex-for-business/progress.json << 'JSON'
{
  "student_name": "",
  "started_at": "",
  "current_lesson": "0.1",
  "completed_lessons": [],
  "module_status": {
    "0": "not_started",
    "1": "not_started",
    "2": "not_started",
    "3": "not_started"
  },
  "artifacts_created": [],
  "deployed_url": null,
  "workspace_path": "~/novabrew-workspace",
  "course_version": "1.0.0"
}
JSON
fi

# ── Welcome message ────────────────────────────────
cat > ~/welcome.txt << 'MSG'

  ╔══════════════════════════════════════════════╗
  ║        CODEX FOR BUSINESS                    ║
  ║        If you can pitch it, you can build it ║
  ╚══════════════════════════════════════════════╝

  Your environment is ready! Here's what to do:

  1. AUTHENTICATE (pick one):

     Option A — Free ChatGPT account:
       $ codex login

     Option B — API key (if you have one):
       $ export OPENAI_API_KEY="sk-..."

  2. START THE COURSE:
       $ codex

     Then just say: "let's start"

  Everything runs in full-auto mode — no permission
  prompts to slow you down. Your work is saved in
  ~/novabrew-workspace/ and persists between sessions.

  Happy building!

MSG

# ── Show welcome on terminal open ──────────────────
ZSHRC=~/.zshrc
BASHRC=~/.bashrc
WELCOME_LINE='[ -f ~/welcome.txt ] && cat ~/welcome.txt && rm ~/welcome.txt'

# Append to whichever shell profile exists
if [ -f "$ZSHRC" ]; then
  echo "$WELCOME_LINE" >> "$ZSHRC"
elif [ -f "$BASHRC" ]; then
  echo "$WELCOME_LINE" >> "$BASHRC"
fi

echo ""
echo "Setup complete! Open a new terminal to see the welcome message."
echo "Or just run: codex"
echo ""
