import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  borderRadius: "10px",
  border: `1px solid transparent`,
  fontSize: "1em",
  fontWeight: 600,
  backdropFilter: "blur(10px)",
  padding: `0.5em 1.2em`,
  height: "48px",
  width: "100%",
  backgroundColor: "#FFD336",
  cursor: "pointer",
  ":hover": {
    borderColor: "white",
  },
  ":focus": {
    outline: "none",
  },
  ":focus-visible": {
    outline: "none",
  },
});
