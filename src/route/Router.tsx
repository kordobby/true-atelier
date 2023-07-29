import { Route, Routes } from "react-router-dom";
import { SIGN_IN } from "./constant";
import SignInPage from "page/signin";

export const Router = () => {
  return (
    <Routes>
      <Route path={SIGN_IN} element={<SignInPage />} />
    </Routes>
  );
};
