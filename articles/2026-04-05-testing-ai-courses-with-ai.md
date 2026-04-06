# When AI Tests AI, the Human Finds What Matters

*I used Claude Code to walk through my OpenAI Codex course as a simulated student. The AI executed every lesson flawlessly. The problem it couldn't see was the one that mattered most.*

---

Six weeks ago, I [shipped a course](https://chatwithgpt.substack.com/p/the-ai-course-that-teaches-itself). An interactive AI curriculum for business students, delivered entirely inside [OpenAI's Codex](https://openai.com/codex) desktop app. Fourteen lessons, a fictional coffee startup, zero coding required. Students clone a repo, type "let's start," and an AI instructor walks them through analyzing messy data, building strategy, and shipping a real web app. I was proud of it.

This week I broke it open and rebuilt half of it — because I discovered that a course can work perfectly and still not teach anything.

## The Method: One AI Testing Another

Here's the unusual part. I didn't discover the problem by running students through the course. I discovered it by running an AI through the course.

I used [Claude Code](https://claude.ai/code) — Anthropic's CLI agent — connected to the Codex desktop app via [agent-browser](https://github.com/vercel-labs/agent-browser) and Chrome DevTools Protocol. Claude Code typed "let's start" as a student would and walked through each lesson, step by step. The pipeline:

```
Claude Code → agent-browser → CDP → Codex Desktop App → AGENTS.md lessons
```

One AI tool simulating a student inside another AI tool's educational content. The testing was automated. Screenshots at each step. Full text captured from every response.

But here's the thing about the testing: **the AI found nothing wrong.**

Every lesson executed correctly. The instructor dialogue was well-written. The business data was rich. The exercises produced impressive outputs. If I'd been grading on functionality, I'd have given it full marks.

The problem wasn't in the execution. It was in the design. And no automated test could see it.

## The Diagnosis Only a Human Could Make

Watching the AI walk through my course, I saw a pattern that made me wince:

1. Codex explains a concept (well-written, engaging)
2. Codex says **"Type this: [exact prompt]"**
3. Student copies the prompt verbatim
4. Codex produces impressive output
5. Codex narrates what happened
6. Repeat

The student's cognitive role was reduced to **reading and copy-pasting**. They never predicted. Never hypothesized. Never evaluated whether the AI's output was actually right. Never made a real choice. It was a guided tour, not a learning experience.

This diagnosis wasn't something a linter could flag. There was no bug. No broken path. No missing file. The course executed flawlessly — and that execution was the problem. It performed *teaching* without requiring *thinking*.

I recognized this because I'd been thinking about it for weeks. At a [workshop with 60 high school teachers](https://chatwithgpt.substack.com/p/resistance-is-learning-what-60-teachers), I'd articulated a principle: the more AI you use, the harder you must work to keep thinking. Cognitive resistance — the effort of evaluating, questioning, and pushing back on AI output — IS the learning. Without it, you're just watching.

My course had no resistance. It was frictionless. And frictionless is the enemy of learning.

## The Framework: Missing the Outer Loop

The physicist [Alex Wissner-Gross](https://substack.com/@alexwissnergross) frames AI systems through the concept of **inner and outer loops**:

- The **inner loop** is fast, AI-driven execution — reading files, crunching data, generating reports
- The **outer loop** is slower, human-driven judgment — deciding what to analyze, evaluating whether output makes sense, choosing what to do next

My course was all inner loop. Students watched the AI execute brilliantly but never practiced being the outer loop — the judgment layer that makes AI useful rather than just fast.

The [CITL GenAI Fluency curriculum](https://citl.illinois.edu) at Illinois frames this differently but arrives at the same place: effective AI collaboration follows an **Expand → Evaluate → Refine → Deepen** cycle. My course had Expand (generate a lot of output) but skipped Evaluate and Refine entirely.

And here's the irony that made me laugh: **my testing process was itself a perfect example of the inner/outer loop.** The AI did the testing — it walked through the course, captured every screen, extracted every response. That was the inner loop, running at machine speed. But the *diagnosis* — recognizing that copy-paste learning was the problem — that was my outer loop. Human judgment applied to AI-generated evidence. The exact skill my course was failing to teach.

## The Fix: Adding Friction

I retrofitted **cognitive friction** into six lesson files — moments where the student must think before, during, or after the AI acts. Here's what the actual changes look like, pulled from the diffs:

### Predict Before You See

Before the original course had Codex analyze data, it just told students what to type. Now:

> *"Before we look at the customer feedback, what do YOU think is causing subscribers to leave? Type your prediction."*

After the analysis: *"Was your prediction right? The gap between expectation and evidence is where insight lives."*

The prediction doesn't have to be correct. It has to exist. Once you've committed to an expectation, you process the evidence differently — you're comparing, not just consuming.

### Write Your Own Prompt

The biggest structural change. Instead of **"Type this: [exact text]"**, students get the intent and write their own instruction:

> *"You need Codex to read all that feedback and create a structured analysis. But instead of me telling you exactly what to type, I want YOU to write the instruction. Think about it: if you were asking a junior analyst to summarize customer feedback, what would you tell them?"*

After they submit, the course shows the "expert" version and asks them to compare. The difference between their prompt and the expert's is where prompt engineering is learned — through contrast, not lecture. And the skill is really just clear communication. The same thing that makes you a good manager makes you good at directing AI.

### Real Decision Points

Replace scripted navigation with genuine choices:

> *"You have five folders in front of you. Which would YOU explore first, and why? There is no wrong answer, but your reasoning matters."*

The course validates their reasoning — every choice leads somewhere — but the student just made a strategic decision instead of following a railroad. And the course names it: *"Whatever you chose, here's what matters: you just made a strategic decision. That is YOUR job. Codex can read every file in seconds — but deciding what to read first, what to prioritize, what matters most — that's the outer loop."*

### Critique the Output

After impressive AI-generated deliverables, students hunt for blind spots:

> *"AI outputs always have blind spots. Read through the analysis and identify: an assumption Codex made without evidence, a pattern it oversimplified, or a question it should have raised but didn't."*

This is the highest-value skill in the modern workplace: knowing that a brilliant first draft is still a first draft.

### Reflect Between Lessons

Thirty-second gates between lessons:

> *"Write one sentence: what is the single most important thing you learned? Not what Codex did — what YOU now understand."*

The analysis Codex produced will be forgotten in a week. The insight the student articulates is theirs.

## The Meta-Lesson

I dispatched eight parallel Claude Code agents to edit the lesson files simultaneously — each handling a different `AGENTS.md` with specific friction point insertions. The implementation took about 60 seconds across all files.

Then I had another AI walk through the updated course and captured the difference.

So: AI tested the course. A human diagnosed the problem. AI implemented the fix. AI verified the result. The ratio was about three minutes of human judgment to sixty seconds of AI execution — which happens to be exactly the ratio the course now teaches students to practice.

The course also now includes an optional module — **Module 3.3: The Innermost Loop** — where students use Codex to modify the course itself. The tool improving the tool that teaches the tool. Wissner-Gross would call this recursive self-improvement. I call it the ultimate assessment artifact: a student's modification to the course IS the evidence of their learning. No quiz needed.

## What Actually Changed

**Before:** Students were passengers. They read well-written explanations, copied prescribed prompts, watched impressive outputs, and moved on. The course performed teaching.

**After:** Students predict, choose, write, evaluate, critique, and reflect. The AI still does the heavy lifting — but the student is the one deciding whether the lifting was done right.

The inner loop got faster. But the outer loop — the thinking — is now the student's job.

That's not just better pedagogy. It's the skill that matters most in an AI-augmented workplace: knowing what to do with what the AI gives you. And the way I found the problem — using AI to see the experience, then applying human judgment to diagnose it — is exactly the pattern the course now teaches.

---

*Vishal Sachdev teaches [BADM 350: Technology & AI Strategy](https://giesbusiness.illinois.edu/) at the Gies College of Business, University of Illinois. He builds with [Claude Code](https://claude.ai/code), teaches with [OpenAI Codex](https://openai.com/codex), and writes about the intersection at [The Hybrid Builder](https://chatwithgpt.substack.com).*
