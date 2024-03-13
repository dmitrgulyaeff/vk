import { useUnit } from 'effector-react';
import { Selector } from '../../Selector/Selector';
import { updatePrivateSelect } from '../model';

const map = {
  "без разницы": null,
  "да"         : true,
  "нет"        : false,
};

export function ClosedSelect() {
  const updatePrivateSelectEvent = useUnit(updatePrivateSelect)

  return (
    <Selector 
      name="closed"
      label="Закрытая:"
      options={map} 
      handlerEvent={updatePrivateSelectEvent}
    />
  );
}
