import useSignIn from "page/signin/hook";
import { Layout } from "../atom/Layout";
import { FormItem } from "../molecule/FormItem";

const LoginForm = () => {
  const { onRequestLogin } = useSignIn();

  return (
    <Layout.Form>
      <form id="login" onSubmit={onRequestLogin}>
        <FormItem.Id />
        <FormItem.Password />
        <FormItem.SubmitButton />
      </form>
    </Layout.Form>
  );
};

export default LoginForm;
