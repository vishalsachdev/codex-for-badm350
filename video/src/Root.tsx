import { Composition } from "remotion";
import { HighlightReel } from "./HighlightReel";
import { RSAAnimateTeaser, TEASER_DURATION } from "./RSAAnimateTeaser";

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HighlightReel"
        component={HighlightReel}
        durationInFrames={110 * FPS} // ~1:50
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="RSAAnimateTeaser"
        component={RSAAnimateTeaser}
        durationInFrames={TEASER_DURATION * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="RSAAnimateTeaserSquare"
        component={RSAAnimateTeaser}
        durationInFrames={TEASER_DURATION * FPS}
        fps={FPS}
        width={1080}
        height={1080}
      />
    </>
  );
};
