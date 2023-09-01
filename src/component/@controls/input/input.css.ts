import { style } from "@vanilla-extract/css";

const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: `10px 0px`,
});

const label = style({
  fontSize: "14px",
  fontWeight: 800,
  color: `#343738`,
  paddingLeft: "4px",
});

const inputBox = style({
  display: "flex",
  gap: "10px",
});

const labelIcon = style({
  width: "48px",
  height: "48px",
  color: `#4860db`,
  borderRadius: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
});

const inputContainer = style({
  display: "flex",
  alignItems: "center",
  width: "300px",
  height: "48px",
  boxSizing: "border-box",
  padding: `0.5em 1.2em`,
  borderRadius: "10px",
  background: `#f3f0ec`,
  color: "#343738",
});

const inputTag = style({
  border: "none",
  background: "transparent",
  outline: "none",
  width: "fit-content",
  minWidth: 0,
  maxWidth: "fit-content",
  // caretColor: "transparent",
  // color: "transparent",
});

const descMsg = style({
  color: "#343738",
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
    labelIcon,
    tag: inputTag,
    desc: descMsg,
    error: errorMsg,
    inputBox,
  }
);
