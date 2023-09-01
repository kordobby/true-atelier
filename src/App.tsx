import { useNavigate } from "react-router-dom";
import "./App.css";
import { DYNAMIC_INPUT } from "./route/constant";
import "./index.css";
import { Button } from "./component/@controls/button/Button";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(DYNAMIC_INPUT)}>DYNAMIC INPUT</Button>
    </>
  );
}

export default App;
