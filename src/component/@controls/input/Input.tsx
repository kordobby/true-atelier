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

export type StatusType = "success" | "warning" | "error";

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  desc?: string;
  status?: StatusType;
}

const Input = ({ label, children, desc, ...rest }: InputProps) => {
  const child = Children.only(children);
  const id = child.props.id;
  return (
    <div {...rest}>
      <label htmlFor={id}>{label}</label>
      {cloneElement(child, {
        id,
        name: label,
        ...child.props,
      })}
      {desc && <span>{desc}</span>}
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
