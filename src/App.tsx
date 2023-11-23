import { useCallback, useState } from 'react';
import { Selector } from './component/@controls/selector/Selector';
import { layoutStyled } from './component/@gnb/layout.css';

const data = ['Hello', 'Bye', 'How Are You', 'Im Fine'];

function App() {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('User Wrote something...', e.target.value);
  }, []);

  const onSubmit = useCallback((list: string[]) => {
    setSelectedList(list);
  }, []);

  return (
    <div className={layoutStyled}>
      <Selector
        list={data}
        placeholder="선택해주세요."
        selected={selectedList}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
