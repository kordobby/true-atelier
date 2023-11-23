import { Selector } from './component/@controls/selector/Selector';
import { layoutStyled } from './component/@gnb/layout.css';

function App() {
  return (
    <div className={layoutStyled}>
      <Selector />
    </div>
  );
}

export default App;
