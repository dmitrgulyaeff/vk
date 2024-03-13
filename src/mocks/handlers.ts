import { HttpResponse, delay, http } from 'msw';
import groups from './groups.json';

export const handlers = [
  http.get('/groups', async () => {
    await delay(1000);
    const randomValue = Math.random();
    if (randomValue > 0.7) {
      // 70% успешных ответов, 30% ошибок
      return HttpResponse.json({ result: 0 }, { status: 404 });
    } else if (randomValue > 0.5) {
      // 20% ошибок
      return new HttpResponse(null, {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }
    return HttpResponse.json({ result: 1, data: groups });
  }),
];
