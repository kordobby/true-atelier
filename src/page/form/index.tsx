import Form from "../../component/@form/Form";
import { createContext, useState } from "react";
import { FormItem } from "./component/molecule/FormItem";
import { StatusType } from "component/@controls/input/Input";

type FormItemType = {
  value: string;
  status: StatusType;
  error: string[];
};

type FormType = {
  [key: string]: FormItemType;
  id: FormItemType;
  password: FormItemType;
};

export type FormContextType = {
  value: FormType;
  handleValue: (text: FormItemType, key: string) => void;
};

const initialValue: FormType = {
  id: {
    value: "",
    status: "success",
    error: [],
  },
  password: {
    value: "",
    status: "success",
    error: [],
  },
};

export const FormContext = createContext<FormContextType>({
  value: initialValue,
  handleValue: () => {},
});

const FormPage = () => {
  const [formValue, setFormValue] = useState<FormType>(initialValue);
  const onRequestSubmit = () => {};

  const handleValue = (value: FormItemType, key: string) => {
    setFormValue((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Form onFinish={onRequestSubmit}>
      <FormContext.Provider
        value={{
          value: formValue,
          handleValue,
        }}
      >
        <FormItem.Id />
        <FormItem.Password />
        <FormItem.Submit />
      </FormContext.Provider>
    </Form>
  );
};

export default FormPage;
