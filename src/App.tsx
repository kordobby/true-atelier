import { useNavigate } from "react-router-dom";
import "./App.css";
import { FORM } from "./route/constant";
import "./index.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <button className="button" onClick={() => navigate(FORM)}>
        FORM
      </button>
    </>
  );
}

export default App;
