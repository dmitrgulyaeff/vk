import {
  createEffect,
  createEvent,
  createStore,
  merge,
  sample,
} from 'effector';
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

// Инициализация загрузки данных при монтировании страницы
sample({ clock: pageMounted, target: fetchDataFx });

// Создаем хранилище для данных
export const $data = createStore<TGroup[]>([]).on(
  fetchDataFx.doneData,
  (_, result) => result
);

// Создаем хранилище для данных для отображения
export const $displayedData = createStore<TGroup[]>([]);

// Фильтрация данных отображения при изменении фильтра или данных
sample({
  clock: merge([$filter, $data]),
  source: { data: $data, filter: $filter },
  fn: filterGroups,
  target: $displayedData,
});

debug($displayedData);
