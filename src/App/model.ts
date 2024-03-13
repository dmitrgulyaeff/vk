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
export const fetchGroupsFx = createEffect(async () => {
  const res = await getGroupsResponse();
  return randomSwapArrElements(res);
});

// Инициализация загрузки данных при монтировании страницы
sample({ clock: pageMounted, target: fetchGroupsFx });

// Создаем хранилище для данных
export const $groups = createStore<TGroup[]>([]).on(
  fetchGroupsFx.doneData,
  (_, result) => result
);

// Создаём хранилище с уникальными цветами для фильтра выбора цвета группы
export const $uniqGroupsColors = $groups.map((groups) => {
  const set = new Set(groups.map((group) => group.avatar_color));
  set.delete(undefined);
  return Array.from(set) as string[]
});

// Создаем хранилище для данных для отображения
export const $displayedGroups = createStore<TGroup[]>([]);

// Фильтрация данных отображения при изменении фильтра или данных
const filterOrGroupsChanged = merge([$filter, $groups])

sample({
  clock: filterOrGroupsChanged,
  source: { groups: $groups, filter: $filter },
  fn: filterGroups,
  target: $displayedGroups,
});

debug($displayedGroups);
