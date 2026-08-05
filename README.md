# skyphusion-org

The intro site for **skyphusion.org** -- who we are and what we make. Apex and `www` both
route here (`wrangler.toml` custom domains). The AI playground lives at
**https://play.skyphusion.org** (prism), not at the org root.

A thin Cloudflare Worker that serves a static site from `public/`. **No build step, no framework**
-- vanilla HTML/CSS/JS by design (house rule: minimal runtime deps; no em-dashes/en-dashes).

## Develop
```
npm install
npm run dev          # wrangler dev -> http://localhost:8787
npm run typecheck
```
Edit `public/` for content + design. `src/index.ts` is intentionally tiny (serve assets + /health;
`www` 301-redirects to apex).

## Deploy
```
npm run deploy       # wrangler deploy (account from CLOUDFLARE_ACCOUNT_ID)
```
Routes for `skyphusion.org` and `www.skyphusion.org` are already in `wrangler.toml`
(`custom_domain = true` on both).

## Scope
This is the **front door**, not an app. The playground (play.skyphusion.org), the studio
(Vivijure), the worlds, and the blog (skyphusion.net) live elsewhere. Keep this lean.

## Who this is for

Visitors evaluating Skyphusion Labs and anyone looking for the front door to our open-source projects.

## Links

- **Live site:** https://skyphusion.org
- **Blog:** https://skyphusion.net
- **Open source:** https://github.com/skyphusion-labs
- **Vivijure:** https://vivijure.com

## License

- **Site code:** [MIT](LICENSE).
- **Site content** (copy, design, images, and other written or visual material): all rights reserved. No license is granted to reuse the content; the MIT license covers the code only.
