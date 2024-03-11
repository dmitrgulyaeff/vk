import { createEvent, createStore, sample } from 'effector';
import { TGroupFilter } from '../../lib/types';
import { debug } from 'patronum';

export const $filter = createStore<TGroupFilter>({
  avatarColor: null,
  closed: null,
  haveFriends: null
});

function getUpdatedFilter<T extends Record<string, unknown>, K extends keyof T>(
  filter: T,
  key: K,
  value: T[K]
){
  const newFilter = { ...filter };
  if (value === undefined) {
    delete newFilter[key];
  } else {
    newFilter[key] = value;
  }
  return newFilter;
}

// по типу приватности
export const updatePrivetSelect = createEvent<TGroupFilter['closed']>();

export const $privetFilter = createStore<TGroupFilter['closed']>(null).on(
  updatePrivetSelect,
  (_, val) => val
);

sample({
  clock: $privetFilter,
  source: $filter,

  fn: (filter, newValue) => getUpdatedFilter(filter, 'closed', newValue),

  target: $filter,
});

// по цвету аватарки
export const updateAvatarSelect = createEvent<TGroupFilter['avatarColor']>();

export const $avatarFilter = createStore<TGroupFilter['avatarColor']>(
  null
).on(updateAvatarSelect, (_, val) => val);

sample({
  clock: $avatarFilter,
  source: $filter,

  fn: (filter, newValue) => getUpdatedFilter(filter, 'avatarColor', newValue),

  target: $filter,
});

// по наличию друзей в группе
export const updateFriendsSelect = createEvent<TGroupFilter['haveFriends']>();

export const $friendsFilter = createStore<TGroupFilter['haveFriends']>(
  null
).on(updateFriendsSelect, (_, val) => val);

sample({
  clock: $friendsFilter,
  source: $filter,

  fn: (filter, newValue) => getUpdatedFilter(filter, 'haveFriends', newValue),

  target: $filter,
});

debug($filter);
