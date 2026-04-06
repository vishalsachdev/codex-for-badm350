import { staticFile } from "remotion";
import { Audio } from "@remotion/media";

/**
 * Wraps any scene with a narration audio track.
 * The narration starts 0.3s after the scene begins (after the fade-in).
 */
export const NarratedScene: React.FC<{
  sceneNum: number;
  children: React.ReactNode;
}> = ({ sceneNum, children }) => {
  const num = sceneNum.toString().padStart(2, "0");

  return (
    <>
      {children}
      <Audio
        src={staticFile(`narration/scene-${num}.mp3`)}
        volume={0.9}
      />
    </>
  );
};
