import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  useCurrentFrame,
  staticFile,
  Sequence,
} from "remotion";

const FPS = 30;

// Each scene: image revealed left-to-right with easing
const RevealScene: React.FC<{
  src: string;
  durationFrames: number;
  revealFraction?: number; // how much of duration is reveal vs hold (0-1)
}> = ({ src, durationFrames, revealFraction = 0.6 }) => {
  const frame = useCurrentFrame();
  const revealEnd = Math.floor(durationFrames * revealFraction);

  const clipPercent = revealFraction === 0
    ? 100
    : interpolate(frame, [0, revealEnd], [0, 100], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      });

  return (
    <AbsoluteFill style={{ backgroundColor: "#FAFAF5" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          clipPath: `inset(0 ${100 - clipPercent}% 0 0)`,
        }}
      >
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

// Scene durations matched to narration (~50s total):
// "When AI tests AI..." (5s) → testing method (8s) → diagnosis (9s) →
// inner/outer loop (8s) → friction points (10s) → before/after (10s)
const scenes = [
  { name: "01-title", duration: 5, reveal: 0 },  // no reveal — starts fully visible for thumbnail
  { name: "02-ai-testing-ai", duration: 8, reveal: 0.5 },
  { name: "03-the-diagnosis", duration: 9, reveal: 0.5 },
  { name: "04-inner-outer-loop", duration: 8, reveal: 0.5 },
  { name: "05-friction-points", duration: 10, reveal: 0.5 },
  { name: "06-final-split", duration: 10, reveal: 0.4 },
];

export const TEASER_DURATION = scenes.reduce((sum, s) => sum + s.duration, 0);

export const RSAAnimateTeaser: React.FC = () => {
  let offset = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#FAFAF5" }}>
      <Audio src={staticFile("rsa-narration.mp3")} />
      {scenes.map((scene) => {
        const from = offset * FPS;
        const durationFrames = scene.duration * FPS;
        offset += scene.duration;

        return (
          <Sequence
            key={scene.name}
            from={from}
            durationInFrames={durationFrames}
          >
            <RevealScene
              src={staticFile(`rsa-frames/${scene.name}.png`)}
              durationFrames={durationFrames}
              revealFraction={scene.reveal}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
