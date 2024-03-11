import {
  UnitValue,
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector';
import { getGroupsResponse } from '../api/api';
import { TGroup, ZValidResponseSchema } from '../lib/types';
import randomSwapArrElements from '../utils/randomSwapArrElements';
import { debug } from 'patronum';
import { $filter } from '../components/HeaderFilter/model';

// Создаем событие для монтирования страницы
export const pageMounted = createEvent();

// Создаем эффект для загрузки данных
export const fetchData = createEffect(async () => {
  const res = await getGroupsResponse();
  return randomSwapArrElements(res);
});

// Создаем хранилище для данных
export const $data = createStore<ZValidResponseSchema['data']>([]).on(
  fetchData.doneData,
  (_, result) => result
);

sample({ clock: pageMounted, target: [fetchData] });

export const $displayedData = createStore<TGroup[]>([]).on($data, (_, v)=> v);

sample({
  clock: $filter,
  source: $data,
  fn: (data, f) => {
    const newData = data.filter(group => {
      if (f.avatarColor !== null && f.avatarColor != "" + group.avatar_color) return false
      if (f.closed !== null  && f.closed != group.closed) return false
      if (f.haveFriends !== null  && !group.friends?.length) return false
      return true
    })
    return newData
  },
  target: $displayedData
})

debug($displayedData)
