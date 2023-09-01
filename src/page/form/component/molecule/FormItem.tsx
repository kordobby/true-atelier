import { useContext } from "react";
import Input, { StatusType } from "../../../../component/@controls/input/Input";
import { Button } from "../../../../component/@controls/button/Button";
import { FormContext, FormContextType } from "../organism/Form";
import { FaUserAstronaut } from "react-icons/fa";
/* 
🤔 공용으로 쓰는 FormItem 이 무조건 좋은 것인가에 대한 고민
const FormItem = ({ id, ...rest }: FormItemProps) => {
  const { handleValue } = useContext<FormContextType>(FormContext);
  return (
    <Input {...rest}>
      <Input.TextField
        id={id}
        type="text"
        onChange={(event) => handleValue(event.target.value, id)}
      />
    </Input>
  );
};
 */

const Id = () => {
  const { handleValue } = useContext<FormContextType>(FormContext);

  // 공통된 validation 은 어떻게 빼는게 효율적일까.
  const validate = (): [StatusType, string[]] => {
    let error: string[] = [];

    const status: StatusType = error.length === 0 ? "error" : "success";
    return [status, error];
  };

  const onChangeHandler = (text: string) => {
    const value = {
      value: text,
      status: validate()[0],
      error: validate()[1],
    };
    handleValue(value, "password");
  };

  return (
    <Input desc="아이디를 입력해주세요." iconLabel={<FaUserAstronaut />}>
      <Input.TextField
        id="id"
        type="text"
        onChange={(event) => onChangeHandler(event.target.value)}
      />
    </Input>
  );
};

// 영문숫자 특수기호 조합 8자리 이상
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

const Password = () => {
  const {
    value: { password },
    handleValue,
  } = useContext<FormContextType>(FormContext);

  const validate = (text: string): [StatusType, string[]] => {
    let error: string[] = [];
    if (text.match(passwordRegEx) === null) {
      error.push("비밀번호 형식에 맞지 않습니다.");
    } else {
      error = [];
    }
    const status: StatusType = error.length === 0 ? "error" : "success";
    return [status, error];
  };

  const onChangeHandler = (text: string) => {
    const value = {
      value: text,
      status: validate(text)[0],
      error: validate(text)[1],
    };
    handleValue(value, "password");
  };

  // @TODO : state error case
  return (
    <Input status={password.status} desc={password.error?.[0]}>
      <Input.TextField
        id="password"
        type="text"
        onChange={(event) => onChangeHandler(event.target.value)}
      />
    </Input>
  );
};

const Submit = () => {
  return (
    <Button className="button" type="submit">
      제출하기
    </Button>
  );
};

export const FormItem = Object.assign(
  {},
  {
    Id,
    Password,
    Submit,
  }
);
