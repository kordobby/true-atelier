import { Button as Btn } from "component/@controls/button/Button";

const FindPw = () => {
  return <Btn variant="link">비밀번호 찾기</Btn>;
};

const MoveSignup = () => {
  return <Btn variant="link">회원가입</Btn>;
};

export const Link = Object.assign(
  {},
  {
    FindPw,
    MoveSignup,
  }
);
