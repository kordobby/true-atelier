import { ReactNode, forwardRef } from "react";

type FormProps = React.ComponentPropsWithoutRef<"form">;

interface Props extends FormProps {
  onFinish: () => void;
}

const Form = forwardRef<HTMLFormElement, Props>(
  ({ onFinish, children, ...rest }, ref) => {
    return (
      <form
        ref={ref}
        // action : 폼 데이터(form data)를 서버로 보낼 때 해당 데이터가 도착할 URL을 명시
        onSubmit={(event) => {
          event.preventDefault();
          onFinish();
        }}
        {...rest}
      >
        {children}
      </form>
    );
  }
);

export default Form;
