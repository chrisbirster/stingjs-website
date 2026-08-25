# StingJS Website

The public website for [StingJS](https://github.com/chrisbirster/stingjs).

## Stack

- SolidJS 2 beta (`solid-js` + `@solidjs/web`)
- Solid Router 2 next line for SolidJS 2 compatibility
- Vite 8
- TypeScript
- Plain CSS — no component framework
- Cloudflare Pages

The Solid packages are intentionally pinned while SolidJS 2 is prerelease software so the compiler and runtime cannot silently drift apart.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Cloudflare Pages

Connect this repository to Cloudflare Pages with:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22

`public/_redirects` rewrites application routes to `index.html` so Solid Router deep links work on Pages.

## Design direction

The homepage intentionally stays nearly monochrome until Sting is doing useful work. Electric blue represents the Sting boundary and native mutations. The orange eye/atom motif at the bottom is an original visual joke about the incumbent ecosystem; it is not labeled or required to understand the page.
