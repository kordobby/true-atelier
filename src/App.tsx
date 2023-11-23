import { useCallback, useState } from 'react';
import { Selector } from './component/@controls/selector/Selector';
import { layoutStyled } from './component/@gnb/layout.css';

const data = ['Hello', 'Bye', 'How Are You', 'Im Fine'];
const compareCaseInsensitiveWord = (ref: string, com: string): boolean => {
  return ref.toLowerCase().includes(com.toLowerCase());
};

function App() {
  const list = new Set(data);
  const [selectedList, setSelectedList] = useState<Map<string, string>>(
    new Map()
  );
  const [menuList, setMenuList] = useState<Set<string>>(list);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value;
      const selectedValues = Array.from(selectedList.keys());
      const searchList = new Set([...list, ...selectedValues]);

      if (keyword.trim() === '') {
        setMenuList(new Set([...list, ...selectedValues]));
        return;
      }

      const filteredResult = new Set(
        [...searchList].filter((value) =>
          compareCaseInsensitiveWord(value, keyword)
        )
      );

      const isEmptyList = filteredResult.has(keyword);
      if (!isEmptyList) {
        setMenuList(new Set([...filteredResult, keyword]));
        return;
      }

      setMenuList(filteredResult);
    },
    [selectedList, menuList]
  );

  const onSubmit = useCallback((value: Map<string, string>) => {
    const selectedValues = Array.from(value.keys());
    setSelectedList(value);
    setMenuList(new Set([...list, ...selectedValues]));
  }, []);

  return (
    <div className={layoutStyled}>
      <Selector onSubmit={onSubmit} selected={selectedList}>
        <Selector.Trigger>선택</Selector.Trigger>
        <Selector.MenuList list={menuList} onChange={onChange} />
      </Selector>
    </div>
  );
}

export default App;
