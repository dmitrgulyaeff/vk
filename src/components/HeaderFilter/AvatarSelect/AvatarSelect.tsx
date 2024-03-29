import { useList, useUnit } from 'effector-react';
import { $uniqGroupsColors } from '../../../App/model';
import { updateAvatarSelect } from '../model';

export function AvatarSelect() {
  const updateAvatarSelectEvent = useUnit(updateAvatarSelect)
  
  const handleUpdateAvatarSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    updateAvatarSelectEvent(value || null);
  };

  return (
    <div>
      <label>
        Цвет аватарки:
        <select name="avatar-color" onChange={handleUpdateAvatarSelect}>
          <option value="">без разницы</option>
          {useList($uniqGroupsColors, (value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
          <option value="undefined">без аватарки</option>
        </select>
      </label>
    </div>
  );
}
