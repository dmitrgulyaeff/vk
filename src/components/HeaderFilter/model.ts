import { createEvent, createStore } from 'effector';
import { TGroup } from '../../lib/types';
import { debug } from 'patronum';

export const updatePrivetSelect = createEvent<"true" | "" | "false">();

export const $privetFilter = createStore<"true" | "" | "false">("").on(
  updatePrivetSelect,
  (_, val) => val
);

export const updateAvatarSelect = createEvent<TGroup["avatar_color"]>("");

export const $avatarFilter = createStore<TGroup["avatar_color"]>("").on(
  updateAvatarSelect,
  (_, val) => val
);

export const updateFriendsSelect = createEvent<"0" | "" | "1">("");

export const $friendsFilter = createStore<"0" | "" | "1">("").on(
  updateFriendsSelect,
  (_, val) => val
);

debug($privetFilter)
