import { AvatarSelect } from './AvatarSelect/AvatarSelect';
import { ClosedSelect } from './ClosedSelect/ClosedSelect';
import { FriendsSelect } from './FriendsSelect/FriendsSelect';

export function HeaderFilter() {

  return (
    <header>
      <ClosedSelect />
      <FriendsSelect />
      <AvatarSelect />
    </header>
  );
}
