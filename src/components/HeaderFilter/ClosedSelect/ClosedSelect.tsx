import { Selector } from '../../Selector/Selector';
import { updatePrivateSelect } from '../model';

const map = {
  "без разницы": null,
  "да"         : true,
  "нет"        : false,
};

export function ClosedSelect() {
  return (
    <Selector 
      name="closed"
      label="Закрытая:"
      options={map} 
      handler={updatePrivateSelect}
    />
  );
}
