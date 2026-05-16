import { createAPIFileRoute } from '@tanstack/react-start/api';
import { createClient } from 'redis';

const redis = await createClient().connect();

export const APIRoute = createAPIFileRoute('/api/redis')({
  POST: async () => {
    const result = await redis.get('item');
    return new Response(JSON.stringify({ result }), { status: 200 });
  },
});
