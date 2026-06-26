# skyphusion-org

The intro site for **skyphusion.org** -- who we are and what we make. Replaces the AI playground
currently served at the root.

A thin Cloudflare Worker that serves a static site from `public/`. **No build step, no framework**
-- vanilla HTML/CSS/JS by design (house rule: minimal runtime deps; no em-dashes/en-dashes).

## Develop
```
npm install
npm run dev          # wrangler dev -> http://localhost:8787
npm run typecheck
```
Edit `public/` for content + design. `src/index.ts` is intentionally tiny (serve assets + /health).

## Deploy
```
npm run deploy       # wrangler deploy (account from CLOUDFLARE_ACCOUNT_ID)
```
Routing the `skyphusion.org` root at this worker (it currently serves the playground) is an infra
step -- see the `[[routes]]` note in `wrangler.toml`. Coordinate with Strummer.

## Scope
This is the **front door**, not an app. The studio (Vivijure), the worlds, and the blog
(skyphusion.net) live elsewhere. Keep this lean.

See the build brief in the tracking issue.

## License

- **Site code:** [MIT](LICENSE).
- **Site content** (copy, design, images, and other written or visual material): all rights reserved. No license is granted to reuse the content; the MIT license covers the code only.
