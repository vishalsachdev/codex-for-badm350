import { useCurrentFrame, useVideoConfig, Img, staticFile, Sequence } from "remotion";
import { Audio } from "@remotion/media";
import { interpolate } from "remotion";
import { baseStyle, headlineStyle, COLORS } from "../styles";

// Highlight region as percentages of the image (0-1)
export type HighlightRegion = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};

export const ScreenshotScene: React.FC<{
  text: string;
  screenshot: string;
  label?: string;
  labelColor?: string;
  highlight?: HighlightRegion;
}> = ({ text, screenshot, label, labelColor, highlight }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const imgOpacity = interpolate(frame, [0.3 * fps, 0.8 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const imgScale = interpolate(frame, [0.3 * fps, 0.8 * fps], [0.95, 1], {
    extrapolateRight: "clamp",
  });

  const imgY = interpolate(frame, [0.3 * fps, 0.8 * fps], [20, 0], {
    extrapolateRight: "clamp",
  });

  // Spotlight overlay fades in after the image appears
  const spotlightOpacity = highlight
    ? interpolate(frame, [1.2 * fps, 1.8 * fps], [0, 1], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      })
    : 0;

  // Subtle pulse on the highlight border
  const borderPulse = highlight
    ? interpolate(frame, [1.8 * fps, 2.5 * fps, 3.2 * fps], [0.6, 1, 0.6], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      })
    : 0;

  const IMG_MAX_W = 1400;
  const IMG_MAX_H = 700;

  return (
    <div style={{ ...baseStyle, justifyContent: "flex-start", paddingTop: 60 }}>
      <div
        style={{
          ...headlineStyle,
          fontSize: 36,
          marginBottom: 30,
          padding: "0 40px",
          opacity: textOpacity,
        }}
      >
        {text}
      </div>

      <div
        style={{
          position: "relative",
          opacity: imgOpacity,
          transform: `scale(${imgScale}) translateY(${imgY}px)`,
        }}
      >
        {label && (
          <div
            style={{
              position: "absolute",
              top: -20,
              left: 40,
              fontSize: 24,
              fontWeight: 700,
              color: "#FFF",
              backgroundColor: labelColor || COLORS.accent,
              padding: "6px 20px",
              borderRadius: 6,
              letterSpacing: 2,
              textTransform: "uppercase" as const,
              fontFamily: "Inter, system-ui, sans-serif",
              zIndex: 10,
            }}
          >
            {label}
          </div>
        )}

        <Img
          src={staticFile(screenshot)}
          style={{
            maxWidth: IMG_MAX_W,
            maxHeight: IMG_MAX_H,
            borderRadius: 12,
            boxShadow: COLORS.cardShadow,
            display: "block",
          }}
        />

        {/* Spotlight overlay: dims everything except the highlight region */}
        {highlight && spotlightOpacity > 0 && (
          <>
            {/* Dark overlay with cutout using clip-path */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: `rgba(0, 0, 0, ${0.55 * spotlightOpacity})`,
                borderRadius: 12,
                // Polygon that covers the whole area except the highlight box
                // outer rect (clockwise) then inner rect (counter-clockwise)
                clipPath: `polygon(
                  0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%,
                  ${highlight.left * 100}% ${highlight.top * 100}%,
                  ${highlight.left * 100}% ${highlight.bottom * 100}%,
                  ${highlight.right * 100}% ${highlight.bottom * 100}%,
                  ${highlight.right * 100}% ${highlight.top * 100}%,
                  ${highlight.left * 100}% ${highlight.top * 100}%
                )`,
                zIndex: 5,
              }}
            />

            {/* Highlight border */}
            <div
              style={{
                position: "absolute",
                top: `${highlight.top * 100}%`,
                left: `${highlight.left * 100}%`,
                width: `${(highlight.right - highlight.left) * 100}%`,
                height: `${(highlight.bottom - highlight.top) * 100}%`,
                border: `3px solid rgba(37, 99, 235, ${borderPulse})`,
                borderRadius: 8,
                boxShadow: `0 0 20px rgba(37, 99, 235, ${0.3 * borderPulse})`,
                zIndex: 6,
              }}
            />
          </>
        )}
      </div>

      <Sequence from={Math.round(0.3 * fps)} layout="none">
        <Audio src={staticFile("typing.wav")} volume={0.4} />
      </Sequence>
    </div>
  );
};
