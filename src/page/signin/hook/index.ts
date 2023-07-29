import { useState } from "react";

type FormType = {
  [key: string]: string;
  id: string;
  password: string;
};

const useSignIn = () => {
  const [value, setValue] = useState<FormType>({
    id: "",
    password: "",
  });

  const handleValue = (key: string, text: string) => {
    setValue((prev) => ({ ...prev, [key]: text }));
  };
  const onRequestLogin = async () => {
    console.log(value, "LOGIN_VALUE");
  };

  return { handleValue, onRequestLogin };
};

export default useSignIn;
