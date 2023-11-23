import styled from 'styled-components';
import { Button } from '../button/Button';
import { Menu } from '../menu/Menu';
import { MenuItem } from '../menu/MenuItem';

type Props = {
  list: string[];
  placeholder: string;
  selected: string[];
  onSubmit(arg: string[]): void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Selector(props: Props) {
  const { list, placeholder, selected, onSubmit, onChange } = props;
  return (
    <SelectorLayout>
      <Button>선택</Button>
      <MenuBox>
        <ul>
          <li>
            <MenuItem checked={true}>..</MenuItem>
          </li>
          <li>
            <MenuItem checked={true}>..</MenuItem>
          </li>
        </ul>
      </MenuBox>
    </SelectorLayout>
  );
}

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
`;
