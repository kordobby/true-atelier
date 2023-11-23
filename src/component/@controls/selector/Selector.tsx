import styled from 'styled-components';
import { Button } from '../button/Button';
import { Menu } from '../menu/Menu';
import { MenuItem } from '../menu/MenuItem';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props extends PropsWithChildren {
  selected: Map<string, string>;
  onSubmit(list: Map<string, string>): void;
}

interface SelectorContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  draftList: Map<string, string>;
  setDraftList: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

const SelectorContext = createContext<SelectorContextType | null>(null);

function useSelectorContext() {
  const context = useContext(SelectorContext);
  if (!context) throw new Error('context 가 없습니다.');

  return context;
}

export function Selector({ selected, onSubmit, children }: Props) {
  const refMenu = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [draftList, setDraftList] = useState<Map<string, string>>(selected);

  useEffect(() => {
    const handleClickOuter = (event: MouseEvent) => {
      if (
        refMenu.current &&
        !refMenu.current.contains(event.target as Node | null)
      ) {
        onSubmit(draftList);
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOuter);

    return () => window.removeEventListener('mousedown', handleClickOuter);
  }, [onSubmit, draftList]);

  return (
    <SelectorContext.Provider
      value={{ open, setOpen, draftList, setDraftList }}>
      <SelectorLayout ref={refMenu}>
        <>{children}</>
      </SelectorLayout>
    </SelectorContext.Provider>
  );
}

function Trigger({ children }: PropsWithChildren) {
  const { setOpen, draftList } = useSelectorContext();
  const isEmptyList = draftList.size === 0;
  const selectedValues = Array.from(draftList.keys());

  const placeholder = isEmptyList ? children : [...selectedValues].join(', ');

  return (
    <Button onClick={() => setOpen((prev) => !prev)}>{placeholder}</Button>
  );
}

interface MenuListProps {
  list: Set<string>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MenuList({ list, onChange }: MenuListProps) {
  const { open, draftList, setDraftList } = useSelectorContext();

  const handleSelectMenu = (value: string, isFreeForm: boolean) => {
    const content = isFreeForm ? 'freeForm' : 'original';
    const isSelected = draftList.get(value);

    if (isSelected) {
      setDraftList((prev) => {
        const deletedList = new Map(prev);
        deletedList.delete(value);
        return deletedList;
      });
      return;
    }
    setDraftList((prev) => new Map(prev).set(value, content));
  };

  if (!open) return null;
  return (
    <MenuBox>
      {onChange && (
        <div className="inputBox">
          <Input placeholder={'검색어를 입력해주세요.'} onChange={onChange} />
        </div>
      )}
      <ul>
        {[...list].map((value, index) => {
          const selectedValue = draftList.get(value);
          const isFreeForm = selectedValue === 'FreeForm';
          return (
            <li
              key={index}
              onClick={() =>
                handleSelectMenu(value, !new Set(list).has(value))
              }>
              <MenuItem checked={Boolean(selectedValue)}>
                <span>{value}</span>
                {isFreeForm && <span>(FreeForm)</span>}
              </MenuItem>
            </li>
          );
        })}
      </ul>
    </MenuBox>
  );
}

Selector.Trigger = Trigger;
Selector.MenuList = MenuList;

const SelectorLayout = styled.div`
  position: relative;
`;

const MenuBox = styled(Menu)`
  position: absolute;
  top: 34px;

  ul {
    list-style: 'none';
    padding-left: 0;
  }

  .inputBox {
    padding: 0px 5px 5px;
    border-bottom: 1px solid #dde1e8;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 0 10px;
  width: 100%;
  height: 32px;
  line-height: 1;
  border: 1px solid #dde1e8;
  border-radius: 3px;
  font-size: 12px;
  color: #575a5e;
  text-overflow: ellipsis;
  box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.04);

  &:focus {
    border: 1px solid #2f87f7;
    outline: none;
  }

  &::placeholder {
    color: #b2b8bf;
    line-height: inherit !important;
  }
`;
