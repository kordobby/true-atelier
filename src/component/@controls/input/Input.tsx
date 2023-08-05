import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
} from "react";
import { inputStyle } from "./input.css";
export type StatusType = "success" | "warning" | "error";

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  desc?: string;
  error?: string;
  status?: StatusType;
}

const Input = ({ label, children, desc, error, ...rest }: InputProps) => {
  const child = Children.only(children);
  const id = child.props.id;
  return (
    <div className={inputStyle.wrapper} {...rest}>
      <label className={inputStyle.label} htmlFor={id}>
        {label}
      </label>
      <div className={inputStyle.container}>
        {cloneElement(child, {
          id,
          name: label,
          className: inputStyle.tag,
          ...child.props,
        })}
      </div>
      {desc && <span className={inputStyle.desc}>{desc}</span>}
      {error && <span className={inputStyle.error}>{error}</span>}
    </div>
  );
};

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {}

Input.TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} {...props} />;
  }
);

export default Input;
