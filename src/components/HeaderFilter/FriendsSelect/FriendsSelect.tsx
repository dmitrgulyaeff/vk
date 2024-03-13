import { useUnit } from 'effector-react';
import { Selector } from '../../Selector/Selector';
import { updateFriendsSelect } from '../model';

const map = {
  "без разницы": null,
  "да"         : true,
  "нет"        : false,
};

export function FriendsSelect() {
  const updateFriendsSelectEvent = useUnit(updateFriendsSelect)
  return (
    <Selector
      name='have-friends'
      label="Есть друзья в группе:"
      options={map}
      handlerEvent={updateFriendsSelectEvent}
    />
  );
}
