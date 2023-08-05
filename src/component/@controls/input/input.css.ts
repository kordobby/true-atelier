import { style } from "@vanilla-extract/css";

const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "10px",
});

const label = style({
  fontSize: "14px",
  fontWeight: 800,
});

const inputContainer = style({
  border: `1px solid #e3e3e3`,
  width: "300px",
  height: "32px",
  padding: `2px 8px`,
  borderRadius: "5px",
  background: "white",
  backdropFilter: "blur(5px)",
  color: "#fff",
});

const inputTag = style({
  border: "none",
  background: "transparent",
  outline: "none",
});

const descMsg = style({
  color: "gray",
  fontSize: "12px",
  paddingLeft: "4px",
});

const errorMsg = style({
  color: "red",
  fontSize: "12px",
});

export const inputStyle = Object.assign(
  {},
  {
    wrapper: inputWrapper,
    container: inputContainer,
    label,
    tag: inputTag,
    desc: descMsg,
    error: errorMsg,
  }
);
