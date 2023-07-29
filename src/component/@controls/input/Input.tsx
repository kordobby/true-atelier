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

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  desc?: string;
}

const Item = ({ label, children, desc, ...rest }: Props) => {
  const child = Children.only(children);
  const id = child.props.id;
  return (
    <div {...rest}>
      <label htmlFor={id}>{label}s</label>
      {cloneElement(child, {
        id,
        ...child.props,
      })}
      {desc && <span>{desc}</span>}
    </div>
  );
};

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {}

const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} {...props} />;
  }
);

export const Input = Object.assign(
  {},
  {
    Item,
    TextField,
  }
);
