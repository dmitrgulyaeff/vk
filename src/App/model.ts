import {
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector';
import { getGroupsResponse } from '../api/api';

// Создаем событие для клика по кнопке
export const buttonClicked = createEvent();

// Создаем хранилище для счетчика
export const $counter = createStore(0).on(buttonClicked, (n) => n + 1);

// Создаем эффект для загрузки данных
export const fetchData = createEffect(async () => {
  const d = await getGroupsResponse();
  return JSON.stringify(d);
});

// Создаем событие для монтирования страницы
export const pageMounted = createEvent();

// Создаем хранилище для данных
export const $data = createStore('').on(
  fetchData.doneData,
  (_, result) => result
);

sample({ clock: pageMounted, target: [fetchData] });
