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

export const $displayedData = createStore<TGroup[]>([]);


debug($data);
