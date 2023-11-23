import { Button } from '../button/Button';
import { Menu } from '../menu/Menu';
import { MenuItem } from '../menu/MenuItem';

export function Selector() {
  return (
    <div>
      <Button>선택</Button>
      <Menu>
        <ul>
          <li>
            <MenuItem checked={true}>..</MenuItem>
          </li>
          <li>
            <MenuItem checked={true}>..</MenuItem>
          </li>
        </ul>
      </Menu>
    </div>
  );
}
