import { EventCallable, combine, createEvent, createStore } from "effector";
import { TGroupFilter } from "../../lib/types";
import { debug } from "patronum";

const createFilterStore = <T>(updateEvent: EventCallable<T>, initialValue: T) => {
  const $store = createStore<T>(initialValue).on(updateEvent, (_, val) => val);
  return $store;
};

// События для обновления фильтров
export const updatePrivateSelect = createEvent<TGroupFilter['closed']>();
export const updateAvatarSelect  = createEvent<TGroupFilter['avatarColor']>();
export const updateFriendsSelect = createEvent<TGroupFilter['haveFriends']>();

export const $filter = combine<TGroupFilter>(
  {
    closed:      createFilterStore(updatePrivateSelect, null),
    avatarColor: createFilterStore(updateAvatarSelect,  null),
    haveFriends: createFilterStore(updateFriendsSelect, null),
  },
);

debug($filter);