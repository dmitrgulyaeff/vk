import { ENDPOINT } from '../config';
import { z } from 'zod';
import { GetGroupsValidResponseSchema } from '../lib/types';
import { delay } from 'msw';

export async function getGroupsResponse() {
  try {
    const req = await fetch(ENDPOINT);
    const data = await req.json();

    const validatedData = GetGroupsValidResponseSchema.parse(data);

    return validatedData;
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error(err.issues);
    } else {
      console.error(err);
    }
    await delay(100)
    return getGroupsResponse()
  }
}
