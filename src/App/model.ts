import { createEffect, createEvent, createStore, sample } from 'effector';
import { debug } from 'patronum';
import { getGroupsResponse } from '../api/api';
import { $filter } from '../components/HeaderFilter/model';
import { TGroup } from '../lib/types';
import { filterGroups } from '../utils/filterGroups';
import randomSwapArrElements from '../utils/randomSwapArrElements';

// Создаем событие для монтирования страницы
export const pageMounted = createEvent();

// Создаем эффект для загрузки данных
export const fetchDataFx = createEffect(async () => {
  const res = await getGroupsResponse();
  return randomSwapArrElements(res);
});

sample({ clock: pageMounted, target: fetchDataFx });

// Создаем хранилище для данных
export const $data = createStore<TGroup[]>([]).on(
  fetchDataFx.doneData,
  (_, result) => result
  );
  
// Создаем хранилище для данных для отображения
export const $displayedData = createStore<TGroup[]>([]);

sample({
  clock: $filter,
  source: $data,
  fn: (data, filter) => filterGroups({ data, filter }),
  target: $displayedData,
});

sample({
  clock: $data,
  source: $filter,
  fn: (filter, data) => filterGroups({ data, filter }),
  target: $displayedData,
});

debug($displayedData);
