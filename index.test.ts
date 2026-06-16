import { describe, it, expect } from 'vitest';
import worker from './src/index.ts';

describe('Skyphusion Org Landing Site Router', () => {
  it('should process root request headers and execute cleanly', async () => {
    const request = new Request('https://skyphusion.org', {
      method: 'GET'
    });

    const env = {
      ASSETS: {
        fetch: async (req: Request) => new Response('Mocked Vanilla Static HTML Payload')
      }
    };

    const ctx = {
      waitUntil: (promise: Promise<any>) => {},
      passThroughOnException: () => {}
    };

    const response = await worker.fetch(request, env, ctx);

    expect(response.status).toBe(200);
  });
});
