"""
Generate narration audio clips using ElevenLabs TTS API.
Also generates a background music track.

Usage: ELEVENLABS_API_KEY=sk_... python generate-audio.py
Or:    Set key in .env file and run: python generate-audio.py
"""

import os
import json
import urllib.request
import urllib.error

# Load from .env if not in environment
if not os.environ.get("ELEVENLABS_API_KEY"):
    env_path = os.path.join(os.path.dirname(__file__), ".env")
    if os.path.exists(env_path):
        for line in open(env_path):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                if v:
                    os.environ[k.strip()] = v.strip()

API_KEY = os.environ.get("ELEVENLABS_API_KEY", "")
if not API_KEY:
    print("ERROR: Set ELEVENLABS_API_KEY in .env or environment")
    exit(1)

# Narration lines — one per scene
NARRATIONS = [
    "I built an AI course that teaches itself — inside the AI tool.",
    "Students open the repo in Codex, type 'let's start,' and the AI becomes their instructor.",
    "But when I tested it, I found every lesson had the same problem.",
    "Students were copying prompts, not thinking. It was a guided tour, not learning.",
    "Claude Code connected to Codex through Chrome DevTools — typing prompts as a virtual student.",
    "One AI, testing another AI's educational content.",
    "The fix: seven types of cognitive friction — moments where the student has to think.",
    "Before: the course told students exactly what to type. A copy-paste exercise.",
    "After: students make real choices and explain their reasoning.",
    "The inner loop is AI execution — fast, mechanical. The outer loop is your judgment — that's the human skill.",
    "Now students predict before they see the AI's output.",
    "They write their own prompts instead of copying prescribed ones.",
    "And they critique AI output before moving on.",
    "There's even an optional module where students modify the course itself — the tool improving the tool.",
    "The Innermost Loop.",
]

OUT_DIR = os.path.join(os.path.dirname(__file__), "public", "narration")
os.makedirs(OUT_DIR, exist_ok=True)


def tts(text: str, filename: str, voice_id: str = "pNInz6obpgDQGcFmaJgB"):
    """Generate speech using ElevenLabs API. Default voice: Adam (professional male)."""
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    headers = {
        "xi-api-key": API_KEY,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
    }
    data = json.dumps({
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": 0.6,
            "similarity_boost": 0.75,
            "style": 0.3,
        },
    }).encode()

    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            out_path = os.path.join(OUT_DIR, filename)
            with open(out_path, "wb") as f:
                f.write(resp.read())
            print(f"  OK: {filename} ({os.path.getsize(out_path) // 1024}KB)")
            return True
    except urllib.error.HTTPError as e:
        print(f"  FAIL: {filename} — {e.code} {e.read().decode()[:200]}")
        return False


def generate_music():
    """Generate background music using ElevenLabs sound generation."""
    url = "https://api.elevenlabs.io/v1/sound-generation"
    headers = {
        "xi-api-key": API_KEY,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
    }
    data = json.dumps({
        "text": "Soft ambient electronic background music, minimal, calm, technology, modern, subtle warmth, 150 seconds",
        "duration_seconds": 150,
    }).encode()

    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            out_path = os.path.join(OUT_DIR, "background-music.mp3")
            with open(out_path, "wb") as f:
                f.write(resp.read())
            print(f"  OK: background-music.mp3 ({os.path.getsize(out_path) // 1024}KB)")
            return True
    except urllib.error.HTTPError as e:
        body = e.read().decode()[:300]
        print(f"  FAIL: background-music — {e.code} {body}")
        # Fall back: no music is fine, narration + typing sounds carry the video
        return False


if __name__ == "__main__":
    print("Generating narration clips...")
    for i, line in enumerate(NARRATIONS):
        filename = f"scene-{i + 1:02d}.mp3"
        print(f"  Scene {i + 1}: {line[:60]}...")
        tts(line, filename)

    print("\nGenerating background music...")
    generate_music()

    print(f"\nDone. Files in {OUT_DIR}")
    print("Next: re-render with `npx remotion render HighlightReel out/highlight-reel.mp4`")
