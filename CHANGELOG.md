# Changelog

## Unreleased

- **fix(site): the current lineup, no analytics, and offline hosts named as offline.**
  - Adds a WordPress on Cloudflare section (Skyphusion AI on WordPress.org, the WordPress on Cloudflare framework, Zaraz Consent, and the GGC store at ggc.sh), prism-mcp in Tooling, and an "In development" teaser for a forex trading bot (no link).
  - Drops the archived vivijure-musetalk and vivijure-audio-upscale cards, and the crew-bus card and footer link (the bus is retired).
  - Postern points at https://posternonline.com in the JSON-LD and the footer.
  - The Umami tag is removed from both pages, because its host no longer resolves. The privacy notice says "Analytics: none" and the footer note matches.
  - Hosts that do not resolve are deleted: the Rust Choir and Verdigris Spool worlds are "offline, moving to containers"; Common Thread's hosted service is "offline, moving to a container with Hyperdrive"; the dead status-page link is removed.
  - Home title (69 to 59 characters) and description (277 to 153) fit search snippets.
  - `llms.txt` and the sitemap `lastmod` are updated to match.

## v0.3.2 -- 2026-11-05

- **docs(site):** X handle moved from `@skyphusion` to `@rockrockenhaus` (2026-11-05); `x.com/skyphusion` no longer resolves. Every X link and `twitter:` meta tag now points at `x.com/rockrockenhaus`.

## v0.3.1 -- 2026-08-05

- **feat(site): advertise crew-bus.** Cross-agent / cross-context MCP message bus is a public
  product others are pointed at for multi-runtime coordination. Tooling rail card + `llms.txt`;
  not fleet-internal-only.

## v0.3.0 -- 2026-08-05

- **feat(site): Labs product surface catch-up.** Hero product focus Vivijure + Postern; Prism
  gets its own playground section; Hollow multi-world ports (rustchoir, verdigris); Common Thread
  demoted to research/maintenance. Vivijure constellation adds wan-train (working) and
  control-plane; dual-panel parity, CogVideoX production door, MCP depth, Slate memory. Postern
  v1.4 identity-bound + demo CTAs; JSON-LD for Postern and Prism; footer demos + status;
  `llms.txt` expanded. Project count 20+.

## v0.2.0

**feat: publish `/privacy` from the docs/legal notice (#42).**

- `public/privacy.html` serves the instance privacy notice (content locked to
  `docs/legal/PRIVACY.md`), styled to match the intro site.
- Footer link on home + privacy pages; analytics line points at the notice.
- `sitemap.xml` includes `/privacy`.

## v0.1.1

Release sync bump (2026-07-21). No functional changes in this tag.

