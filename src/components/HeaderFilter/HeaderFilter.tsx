import { useUnit } from 'effector-react';
import { $data } from '../../App/model';
import {
  updateAvatarSelect,
  updateFriendsSelect,
  updatePrivateSelect,
} from './model';

export function HeaderFilter() {
  const data = useUnit($data);

  const handleUpdatePrivateSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const v = event.target.value;
    if (v === '0') updatePrivateSelect(false);
    else if (v === '1') updatePrivateSelect(true);
    else if (v === '') updatePrivateSelect(null);
    else throw Error('invalid value, pls give "0" | "1" | ""');
  };

  const handleUpdateFriendsSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const v = event.target.value;
    if (v === '0') updateFriendsSelect(false);
    else if (v === '1') updateFriendsSelect(true);
    else if (v === '') updateFriendsSelect(null);
    else throw Error('invalid value, pls give "0" | "1" | ""');
  };

  const handleUpdateAvatarSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const v = event.target.value;
    updateAvatarSelect(v || null)
  };

  return (
    <header>
      <label>
        Закрытая:
        <select name="type" onChange={handleUpdatePrivateSelect}>
          <option value="">без разницы</option>
          <option value="1">да</option>
          <option value="0">нет</option>
        </select>
      </label>
      <label>
        Цвет аватарки:
        <select name="avatar-color" onChange={handleUpdateAvatarSelect}>
          <option value="">без разницы</option>
          {Array.from(new Set(data.map((el) => el.avatar_color)))
            .filter(Boolean)
            .map((o, i) => (
              <option key={i} value={o}>
                {o}
              </option>
            ))}
          <option value="undefined">без аватарки</option>
        </select>
      </label>
      <label>
        Есть друзья в группе:
        <select name="friends" onChange={handleUpdateFriendsSelect}>
          <option value="">без разницы</option>
          <option value="1">да</option>
          <option value="0">нет</option>
        </select>
      </label>
    </header>
  );
}
