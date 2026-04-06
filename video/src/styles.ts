import { CSSProperties } from "react";

export const COLORS = {
  bg: "#FAFAFA",
  text: "#1A1A1A",
  textMuted: "#6B7280",
  accent: "#2563EB",
  accentLight: "#DBEAFE",
  cardShadow: "0 4px 24px rgba(0, 0, 0, 0.10)",
  beforeLabel: "#DC2626",
  afterLabel: "#16A34A",
};

export const baseStyle: CSSProperties = {
  backgroundColor: COLORS.bg,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 80,
  fontFamily:
    'Georgia, "Times New Roman", serif',
};

export const headlineStyle: CSSProperties = {
  fontSize: 56,
  fontWeight: 700,
  color: COLORS.text,
  textAlign: "center",
  lineHeight: 1.3,
  maxWidth: 1400,
  fontFamily: 'Georgia, "Times New Roman", serif',
};

export const bodyStyle: CSSProperties = {
  fontSize: 36,
  fontWeight: 400,
  color: COLORS.textMuted,
  textAlign: "center",
  lineHeight: 1.5,
  maxWidth: 1200,
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};

export const labelStyle = (color: string): CSSProperties => ({
  fontSize: 28,
  fontWeight: 700,
  color: "#FFFFFF",
  backgroundColor: color,
  padding: "8px 24px",
  borderRadius: 8,
  letterSpacing: 2,
  textTransform: "uppercase" as const,
  fontFamily: 'Inter, system-ui, sans-serif',
});
