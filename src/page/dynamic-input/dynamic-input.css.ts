import { style } from "@vanilla-extract/css";

const inputWrapper = style({
  position: "relative",
  border: `1px solid red`, // "none",
  height: "40px",
  width: "300px",
});

const inputField = style({
  position: "absolute",
  lineHeight: 0,
  top: 20,
  left: 12,
});

const inputCursor = style({});

const inputTag = style({
  border: "none",
  background: "yellow", // "transparent",
  outline: "none",
  padding: 0,
  width: "300px",
  height: "40px",
  color: "transparent",
});

export const inputStyle = Object.assign(
  {},
  {
    wrapper: inputWrapper,
    field: inputField,
    tag: inputTag,
  }
);
