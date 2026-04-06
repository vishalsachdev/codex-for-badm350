import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { baseStyle, headlineStyle } from "../styles";

export const TextOnlyScene: React.FC<{
  text: string;
  subtitle?: string;
  large?: boolean;
}> = ({ text, subtitle, large }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 0.6 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [0, 0.6 * fps], [30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={baseStyle}>
      <div
        style={{
          ...headlineStyle,
          fontSize: large ? 72 : 56,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        {text}
      </div>
      {subtitle && (
        <div
          style={{
            fontSize: 32,
            color: "#6B7280",
            marginTop: 30,
            opacity: interpolate(frame, [0.4 * fps, 1 * fps], [0, 1], {
              extrapolateRight: "clamp",
            }),
            fontFamily: "Inter, system-ui, sans-serif",
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};
