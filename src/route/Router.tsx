import { Route, Routes } from "react-router-dom";
import { FORM, SIGN_IN } from "./constant";
import SignInPage from "../page/signin";
import FormPage from "../page/form";

export const Router = () => {
  return (
    <Routes>
      <Route path={SIGN_IN} element={<SignInPage />} />
      <Route path={FORM} element={<FormPage />} />
    </Routes>
  );
};
