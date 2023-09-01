import { useNavigate } from "react-router-dom";
// import "./App.css";
import { DYNAMIC_INPUT } from "./route/constant";
import "./index.css";
import { Button } from "./component/@controls/button/Button";
import { styled } from "styled-components";

function App() {
  const navigate = useNavigate();
  return (
    <Layout>
      {/* <Button onClick={() => navigate(DYNAMIC_INPUT)}>DYNAMIC INPUT</Button> */}
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%); */
  background-image: linear-gradient(45deg, #a8edea 0%, #fed6e3 100%);
  /* background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%); */
  overflow: scroll;
  overflow-x: hidden;
`;
