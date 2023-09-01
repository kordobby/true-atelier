import { ButtonHTMLAttributes } from "react";
import { buttonStyle } from "./button.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
}

export const Button = ({ children }: Props) => {
  return <button className={buttonStyle}>{children}</button>;
};
