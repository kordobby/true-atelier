import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { FORM } from "./route/constant";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(FORM)}>FORM</button>
    </>
  );
}

export default App;
