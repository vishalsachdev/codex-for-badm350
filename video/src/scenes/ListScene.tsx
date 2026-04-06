import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { baseStyle, headlineStyle, COLORS } from "../styles";

export const ListScene: React.FC<{
  title: string;
  items: string[];
}> = ({ title, items }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 0.4 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ ...baseStyle, alignItems: "flex-start", paddingLeft: 200 }}>
      <div
        style={{
          ...headlineStyle,
          textAlign: "left",
          opacity: titleOpacity,
          marginBottom: 50,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((item, i) => {
          const itemStart = 0.5 * fps + i * 0.3 * fps;
          const itemOpacity = interpolate(frame, [itemStart, itemStart + 0.3 * fps], [0, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });
          const itemX = interpolate(frame, [itemStart, itemStart + 0.3 * fps], [40, 0], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });

          return (
            <div
              key={i}
              style={{
                fontSize: 40,
                fontWeight: 600,
                color: COLORS.text,
                opacity: itemOpacity,
                transform: `translateX(${itemX}px)`,
                fontFamily: "Inter, system-ui, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ color: COLORS.accent, fontSize: 32 }}>+</span>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
