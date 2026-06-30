# CLAUDE.md

Guidance for Claude Code (and the crew) working in this repo.

## What this is

**skyphusion.org: the intro site.** The front door for Skyphusion Labs (who we are and what we
make), replacing the AI playground that used to serve the root. A single thin Cloudflare Worker that
serves a static site from `public/` over Workers Assets; the Worker code only adds a `/health`
endpoint and a `www` -> apex redirect. **No build step, no framework** -- vanilla HTML/CSS/JS by
design. Currently **v0.1.0**. Live: skyphusion.org (apex) and www.skyphusion.org. This is the
front door, NOT an app: the studio (Vivijure), the worlds (the-hollow-grid), and the blog
(skyphusion.net) live in their own repos. Keep this lean.

## Commands

```bash
npm install
npm run dev          # wrangler dev -> http://localhost:8787
npm run typecheck    # tsc --noEmit -- the CI gate; run before pushing
npm run deploy       # wrangler deploy (account from CLOUDFLARE_ACCOUNT_ID)
npx vitest run       # the router tests (index.test.ts); there is no `test` npm script
```

Edit `public/` for content and design. `src/index.ts` stays intentionally tiny (serve assets +
`/health` + the canonical-host redirect). If this ever needs more than that, ask whether it belongs
here or in a real app.

### Verifying changes

`npm run typecheck` is the gate (`tsc` is not part of any vitest run, so type errors pass silently).
Behavior is covered by `index.test.ts` (Vitest), run with `npx vitest run`: it asserts the root
serves 200, `www` 301-redirects to the apex preserving the path, and `/health` returns
`{ok: true, service: "skyphusion-org"}` as JSON without touching the `ASSETS` binding. CI runs
typecheck + deploy on `main` (`.github/workflows/ci.yml`), a standalone typecheck on push/PR
(`typecheck.yml`), and the Vitest coverage run (`code-coverage.yml`). All on GitHub-hosted
`ubuntu-latest`: this is a PUBLIC repo, so per house CI policy it runs the fork-safe hosted path, NOT
the self-hosted org fleet.

## Architecture

- **The Worker is deliberately tiny.** `src/index.ts` exports a single `fetch` handler: it
  301-redirects `www.skyphusion.org` to the bare apex (preserving path), answers `/health` with a
  JSON liveness object, and otherwise hands the request to `env.ASSETS.fetch(request)`. The static
  site in `public/` is the product; the Worker is just the shell.
- **Static assets, served by Workers Assets.** `wrangler.toml` binds `public/` as `ASSETS`
  (`assets = { directory = "./public", binding = "ASSETS" }`). Content lives in `public/`:
  `index.html`, `styles.css`, `main.js` (a dependency-free IntersectionObserver reveal-on-scroll,
  skipped under `prefers-reduced-motion`), self-hosted `fonts/`, `og-image.png`, `robots.txt`,
  `sitemap.xml`, `logo-icon.svg`.
- **Both hostnames are Workers Custom Domains.** `[[routes]]` provisions proxied DNS + cert for the
  bare apex `skyphusion.org` AND `www.skyphusion.org` via `custom_domain = true` (a plain route
  pattern would have no DNS to attach to at the apex). The apex MX/TXT (email routing) records are
  unaffected. Routing changes are infra work: coordinate with Strummer.

## Conventions

- **No em-dashes (U+2014) or en-dashes (U+2013) anywhere** (source, comments, docs, or site copy).
  Use commas, semicolons, parentheses, or `--`. (SEO meta once tripped this; keep it clean.)
- **No framework, no build step, no CSS preprocessor.** Vanilla HTML/CSS/JS is deliberate. Minimal
  runtime deps; justify any new one.
- **Handle / username is `skyphusion`** across all services.
- **Mirror every `wrangler.toml` binding in the hand-authored `Env`** in `src/index.ts` (currently
  just `ASSETS: Fetcher`). Runtime types come from the pinned `@cloudflare/workers-types` devDep; do
  not generate `worker-configuration.d.ts`.
- **`account_id` is never hardcoded** -- it is injected from `CLOUDFLARE_ACCOUNT_ID` (env / CI
  secret).
- **Licensing:** site CODE is MIT (`LICENSE`); site CONTENT (copy, design, images) is all rights
  reserved. The MIT grant covers the code only.

## Crew + identity

- Crew members work as their own Unix + gh identity. The FIRST command in any op is the member's own
  login shell: `sudo -u <member> bash -lc '<ops>'` (loads their `$HOME`, their `~/dev/skyphusion-org`
  clone, their gh/CF creds).
- Crew commits land under the member's own `skyphusion-<member>` identity, never Conrad's. (Conrad
  devs ONLY on his laptop, where his commits author as `Conrad Rockenhaus <conrad@skyphusion.org>`
  -- his real name kept, the in-house `@skyphusion.org` email; his name is never scrubbed and his
  history never rewritten. On jello the `conrad` user is the god process and commits as
  `Mackaye <mackaye@skyphusion.org>`.)
- Cross-project operating context lives in the main auto-memory
  (`~/.claude/projects/-home-conrad/memory/`); load it before acting.

## Commits & versioning

Conventional Commits (`feat(scope):` / `fix(scope):` / `docs:` / `ci:`); the body explains the why.
SemVer-style `0.MINOR.PATCH` while pre-1.0 (PATCH for fixes / copy tweaks, MINOR for new
sections/features); bump `package.json` `version` in the release commit.
