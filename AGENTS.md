# skyphusion.org

This file is the guide for any coding agent and any contributor. Follow it.

## What this project is

skyphusion.org is the intro site for Skyphusion Labs. It says who we are and what we make. A thin Cloudflare Worker serves static files from `public/`. There is no framework. There is no build step. Read [README.md](README.md).

The version is in `package.json`. See the latest `v*` tag. Live hosts are skyphusion.org and www.skyphusion.org.

The playground stays at https://play.skyphusion.org. This repo does not host that playground. Do not redirect the playground to this apex.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run test
npm run deploy
```

`npm run dev` serves http://localhost:8787. `npm run typecheck` is `tsc --noEmit`. Run it before you push. `tsc` does not run inside Vitest. Run `npm run test` on your machine. [`.github/workflows/ci.yml`](.github/workflows/ci.yml) typechecks a pull request. The same workflow publishes on `main`. Set `CLOUDFLARE_ACCOUNT_ID` for `npm run deploy`. [`.github/workflows/coverage.yml`](.github/workflows/coverage.yml) is the coverage check.

Edit `public/` for content and design. Keep `src/index.ts` small.

## Architecture

`src/index.ts` exports one `fetch` handler. `www.skyphusion.org` returns 301 to the apex. The path stays. `/health` returns JSON. The service field is `skyphusion-org`. Other requests go to the `ASSETS` binding.

`wrangler.toml` binds `public/` as `ASSETS`. `run_worker_first` is true, so the Worker sees `/health` and the `www` redirect first. Both hostnames are custom domains. Email DNS records stay as they are. A route change needs a change request. A DNS change needs a change request.

The hand-authored `Env` lists `ASSETS`. Do not generate `worker-configuration.d.ts`. Use the pinned `@cloudflare/workers-types` package. Do not hardcode `account_id`.

There is no CSS preprocessor. Justify any new dependency.

## License

Site code is MIT. See `LICENSE`. Site content is all rights reserved. The MIT grant covers the code only.

## Docs

Write Simplified Technical English. Use short sentences. Use one idea per sentence. Use the active present tense. Use plain words. Use the same word every time.

Do not use an em dash (U+2014). Do not use an en dash (U+2013). Use a comma, a semicolon, parentheses, or two hyphens (`--`). This rule covers source, comments, docs, and site copy.

State the limit next to the capability. Do not turn a measured result into a promise.

## Safety

Do not put a secret in a tracked file, a log, or an issue. Use `npm run dev` to try a local change. A change to the live hostnames needs a change request.

## Commits and versions

Use Conventional Commits. The body says why. A version moves only in a release pull request. Tags use the `v*` form.

The public handle is `skyphusion`. X links on this site use https://x.com/rockrockenhaus.
