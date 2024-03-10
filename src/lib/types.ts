import { z } from 'zod';

// utils
type Expect<T extends true> = (<T>() => T extends T ? 1 : 2) extends <
T
>() => T extends true ? 1 : 2
? true
: false;

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
? 1
: 2
? true
: false;


export type GetGroupsResponse = {
  result: 1 | 0;
  data?: Group[];
};

export type Group = {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
};

export type User = {
  first_name: string;
  last_name: string;
};

export const UserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
});

export const GroupSchema = z.object({
  id: z.number(),
  name: z.string(),
  closed: z.boolean(),
  avatar_color: z.string().optional(),
  members_count: z.number(),
  friends: z.array(UserSchema).optional(),
});

export const isValidResponseSchema = z.object({
  result: z.literal(1),
  data: z.array(GroupSchema),
});

export const GetGroupsResponseSchema = z.object({
  result: z.union([z.literal(0), z.literal(1)]),
  data: z.array(GroupSchema).optional(),
});

// Inferred types from Zod schemas
  type ZUser = z.infer<typeof UserSchema>;
  type ZGroup = z.infer<typeof GroupSchema>;
  type ZGetGroupsResponse = z.infer<typeof GetGroupsResponseSchema>;
  export type ZValidResponseSchema = z.infer<typeof isValidResponseSchema>

// check schemas
  type test_ZUser_equal_User = Expect<Equal<ZUser, User>>
  type test_ZGroup_equal_Group = Expect<Equal<ZGroup, Group>>
  type test_ZGetGroupsResponse_equal_GetGroupsResponse = Expect<Equal<ZGetGroupsResponse, GetGroupsResponse>>