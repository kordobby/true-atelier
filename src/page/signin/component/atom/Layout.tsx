import { PropsWithChildren } from "react";

const Template = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const Form = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const Button = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const Link = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export const Layout = Object.assign(
  {},
  {
    Form,
    Button,
    Template,
    Link,
  }
);
