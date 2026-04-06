import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { baseStyle, COLORS } from "../styles";

export const TitleScene: React.FC<{
  title: string;
  byline: string;
}> = ({ title, byline }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ ...baseStyle, opacity }}>
      <div
        style={{
          fontSize: 80,
          fontWeight: 700,
          color: COLORS.text,
          textAlign: "center",
          fontFamily: 'Georgia, "Times New Roman", serif',
          marginBottom: 30,
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: 120,
          height: 4,
          backgroundColor: COLORS.accent,
          marginBottom: 30,
          borderRadius: 2,
        }}
      />
      <div
        style={{
          fontSize: 28,
          color: COLORS.textMuted,
          textAlign: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          lineHeight: 1.6,
        }}
      >
        {byline}
      </div>
    </div>
  );
};
