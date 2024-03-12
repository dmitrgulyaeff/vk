import { TGroup, TGroupFilter } from '../lib/types';

const filterByAvatarColor = (group: TGroup, { avatarColor }: TGroupFilter) =>
  avatarColor === null || avatarColor === '' + group.avatar_color;

const filterByClosedStatus = (group: TGroup, { closed }: TGroupFilter) =>
  closed === null || group.closed === closed;

const filterByFriendsPresence = (
  group: TGroup,
  { haveFriends }: TGroupFilter
) => haveFriends === null || haveFriends === !!group.friends?.length;

const combinedFilter = (group: TGroup, filter: TGroupFilter) => {
  return (
    filterByAvatarColor(group, filter) &&
    filterByClosedStatus(group, filter) &&
    filterByFriendsPresence(group, filter)
  );
};

export function filterGroups({
  data,
  filter,
}: {
  data: TGroup[];
  filter: TGroupFilter;
}) {
  return data.filter((group) => combinedFilter(group, filter));
}
