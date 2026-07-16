# Privacy notice: skyphusion.org

**Scope.** This notice covers the intro site that Skyphusion Labs operates at **skyphusion.org** (and
www.skyphusion.org, which redirects to it). It does not cover the projects this site links to; each of
those has its own notice (Prism, The Hollow Grid, Vivijure, Postern). The site source is public and
MIT-licensed: if you reuse it, you are the operator of your copy and this notice does not bind you.
This is a plain-language description of how the site handles data. It is not legal advice.

## We do not want your data

skyphusion.org is a static intro site. There are no accounts, no sign-in, no forms, no comments, and
nothing for you to submit. We set no cookies, we use no localStorage or sessionStorage, and there is
no advertising, ad-tech, profiling, or third-party tracker on the page. The fonts are served from this
site rather than from a font CDN, so reading a page here does not announce your visit to a font
vendor. The only outbound requests a page makes are the ones you click.

## The one thing we measure, and how

The site loads a script from **analytics.skyphusion.org**. That is **Umami**, an open-source analytics
tool that we run ourselves, on our own infrastructure. We use it for aggregate traffic counts (which
pages get read), and for nothing else.

- It is **cookieless**: it sets no cookie and no persistent identifier to follow you between visits.
- It records the page you viewed, the page that referred you, and the coarse technical details your
  browser volunteers (browser, operating system, device type, and a country derived from your IP
  address at request time).
- It is **self-hosted**, so no analytics vendor receives any of it. There is no third party in this
  path to sell it to, and we do not sell or share it.
- It is not used to profile or identify individual visitors.

If you would rather not be counted, any content blocker will stop the script from loading; the site
works fine without it.

## Cloudflare serves this site

The site runs as a Cloudflare Worker, so Cloudflare necessarily processes your request (including your
IP address) to route it, serve the page, and protect the site from abuse. That processing is
Cloudflare's, under Cloudflare's terms, as our infrastructure provider. We keep Workers request logs
in our own Cloudflare account for operational purposes: knowing the site is up, and debugging it when
it is not. We do not mine them, and there is no other processor in the path.

## What we never do

No selling. No sharing with data brokers. No ad-tech. No profiling. No cross-site tracking. No mailing
list you did not ask for, because there is no form with which to ask you.

## Contact

The site is operated by Skyphusion Labs. Privacy questions: **privacy@skyphusion.org**.

Not legal advice.
