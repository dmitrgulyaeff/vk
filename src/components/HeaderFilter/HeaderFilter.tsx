import { useUnit } from 'effector-react';
import { $data } from '../../App/model';
import {
  updateAvatarSelect,
  updateFriendsSelect,
  updatePrivetSelect,
} from './model';

export default function HeaderFilter() {
  const data = useUnit($data);

  const handleUpdatePrivetSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updatePrivetSelect(event.target.value as '' | 'true' | 'false');
  };

  const handleUpdateFriendsSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updateFriendsSelect(event.target.value as '0' | '1' | '');
  };

  const handleUpdateAvatarSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updateAvatarSelect(event.target.value);
  };

  return (
    <header>
      <label>
        Закрытая:
        <select name="type" onChange={handleUpdatePrivetSelect}>
          <option value="">без разницы</option>
          <option value="true">да</option>
          <option value="false">нет</option>
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