import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
}

export const Button = ({ children }: Props) => {
  return <button>{children}</button>;
};
