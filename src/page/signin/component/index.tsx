import { Link } from "./atom/Link";
import { Layout } from "./atom/Layout";
import LoginForm from "./organism/Form";

const Template = () => {
  return (
    <Layout.Template>
      <LoginForm />
      <Layout.Link>
        <Link.FindPw></Link.FindPw>
        <Link.MoveSignup></Link.MoveSignup>
      </Layout.Link>
    </Layout.Template>
  );
};

export default Template;
