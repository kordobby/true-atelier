import { Route, Routes } from "react-router-dom";
import { DYNAMIC_INPUT, FORM, SIGN_IN } from "./constant";
import SignInPage from "../page/signin";
import FormPage from "../page/form";
import DynamicInputPage from "../page/dynamic-input";

export const Router = () => {
  return (
    <Routes>
      <Route path={SIGN_IN} element={<SignInPage />} />
      <Route path={FORM} element={<FormPage />} />
      <Route path={DYNAMIC_INPUT} element={<DynamicInputPage />} />
    </Routes>
  );
};
