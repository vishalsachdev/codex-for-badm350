import { useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { ScreenshotScene } from "./scenes/ScreenshotScene";
import { TextOnlyScene } from "./scenes/TextOnlyScene";
import { ListScene } from "./scenes/ListScene";
import { TitleScene } from "./scenes/TitleScene";
import { NarratedScene } from "./components/NarratedScene";
import { COLORS } from "./styles";

export const HighlightReel: React.FC = () => {
  const { fps } = useVideoConfig();
  const fadeDuration = Math.round(0.5 * fps);

  return (
    <TransitionSeries>
      {/* Scene 1: Opening — welcome screen (more visual than empty start) */}
      <TransitionSeries.Sequence durationInFrames={7 * fps}>
        <NarratedScene sceneNum={1}>
          <ScreenshotScene
            text="I built an AI course that teaches inside the AI tool itself"
            screenshot="before-01-initial.png"
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 2: Students start */}
      <TransitionSeries.Sequence durationInFrames={8 * fps}>
        <NarratedScene sceneNum={2}>
          <ScreenshotScene
            text={`Students clone a repo, open it in Codex, and say "let's start"`}
            screenshot="before-03-welcome.png"
            highlight={{ top: 0.05, left: 0.05, bottom: 0.55, right: 0.95 }}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 3: The problem — highlight "Type this:" at bottom */}
      <TransitionSeries.Sequence durationInFrames={8 * fps}>
        <NarratedScene sceneNum={3}>
          <ScreenshotScene
            text="But every lesson had the same problem:"
            screenshot="before-07-first-task.png"
            highlight={{ top: 0.85, left: 0.02, bottom: 0.99, right: 0.95 }}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 4: Copy-paste */}
      <TransitionSeries.Sequence durationInFrames={7 * fps}>
        <NarratedScene sceneNum={4}>
          <TextOnlyScene text="Students were copy-pasting, not thinking" large />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 5: Agent as virtual student — highlight blue chat bubble */}
      <TransitionSeries.Sequence durationInFrames={9 * fps}>
        <NarratedScene sceneNum={5}>
          <ScreenshotScene
            text="Claude Code connected to Codex via Chrome DevTools — typing prompts as a virtual student"
            screenshot="after-04-agent-typed.png"
            highlight={{ top: 0.52, left: 0.25, bottom: 0.68, right: 0.95 }}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 6: Meta moment */}
      <TransitionSeries.Sequence durationInFrames={6 * fps}>
        <NarratedScene sceneNum={6}>
          <TextOnlyScene
            text="One AI testing another AI's educational content"
            subtitle="Claude Code + agent-browser + Chrome DevTools + Codex Desktop"
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 7: The fix */}
      <TransitionSeries.Sequence durationInFrames={10 * fps}>
        <NarratedScene sceneNum={7}>
          <ListScene
            title="The fix: 7 cognitive friction points"
            items={[
              "Predict before you see",
              "Write your own prompt",
              "Evaluate before moving on",
              "Make real choices",
              "Reflect between lessons",
              "Spot the limitation",
              "Discover model controls",
            ]}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 8: BEFORE — highlight "Say: What should I look at first?" */}
      <TransitionSeries.Sequence durationInFrames={9 * fps}>
        <NarratedScene sceneNum={8}>
          <ScreenshotScene
            text={`BEFORE: "Say: What should I look at first?"`}
            screenshot="before-14-first-analysis.png"
            label="Before"
            labelColor={COLORS.beforeLabel}
            highlight={{ top: 0.50, left: 0.05, bottom: 0.62, right: 0.85 }}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 9: AFTER — highlight choice question */}
      <TransitionSeries.Sequence durationInFrames={8 * fps}>
        <NarratedScene sceneNum={9}>
          <ScreenshotScene
            text={`AFTER: "Which folder would YOU explore first, and why?"`}
            screenshot="after-05-file-listing-choice.png"
            label="After"
            labelColor={COLORS.afterLabel}
            highlight={{ top: 0.82, left: 0.05, bottom: 0.98, right: 0.95 }}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 10: Inner/outer loop */}
      <TransitionSeries.Sequence durationInFrames={11 * fps}>
        <NarratedScene sceneNum={10}>
          <ScreenshotScene
            text="The inner loop is AI execution. The outer loop is your judgment."
            screenshot="after-06-choice-innerloop.png"
            highlight={{ top: 0.55, left: 0.05, bottom: 0.80, right: 0.95 }}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 11: Prediction */}
      <TransitionSeries.Sequence durationInFrames={6 * fps}>
        <NarratedScene sceneNum={11}>
          <ScreenshotScene
            text="Students now predict before they see"
            screenshot="after-03-prediction-prompt.png"
            highlight={{ top: 0.72, left: 0.05, bottom: 0.92, right: 0.95 }}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 12: Own prompts */}
      <TransitionSeries.Sequence durationInFrames={6 * fps}>
        <NarratedScene sceneNum={12}>
          <TextOnlyScene text="They write their own prompts instead of copying" />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 13: Critique */}
      <TransitionSeries.Sequence durationInFrames={6 * fps}>
        <NarratedScene sceneNum={13}>
          <TextOnlyScene text="They critique AI output before moving on" />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 14: Meta module */}
      <TransitionSeries.Sequence durationInFrames={9 * fps}>
        <NarratedScene sceneNum={14}>
          <TextOnlyScene
            text="Optional Module 3.3: students modify the course itself"
            subtitle="The tool improving the tool that teaches the tool"
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: fadeDuration })}
      />

      {/* Scene 15: Title card */}
      <TransitionSeries.Sequence durationInFrames={5 * fps}>
        <NarratedScene sceneNum={15}>
          <TitleScene
            title="The Innermost Loop"
            byline={`Vishal Sachdev · Gies College of Business\nThe Hybrid Builder · chatwithgpt.substack.com`}
          />
        </NarratedScene>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
