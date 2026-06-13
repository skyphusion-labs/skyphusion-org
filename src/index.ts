// skyphusion.org -- intro site worker.
//
// Deliberately tiny: serve the static site from public/ via Workers Assets.
// Keep it that way. If this ever needs more than /health + static, ask whether
// it belongs here or in a real app (the studio / the worlds live elsewhere).

export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ ok: true, service: "skyphusion-org" }), {
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
