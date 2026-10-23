# Vishwaranjan Singh — Portfolio

Personal portfolio built with React, Vite, GSAP ScrollTrigger, Lenis and React Bits.

**Website:** https://vishwaranjan0001.github.io/

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Publish updates

Push changes to `main`. The GitHub Pages workflow installs dependencies, builds the site and deploys `dist/` automatically. It can also be run manually from the Actions tab. Repository Settings → Pages uses **GitHub Actions** as its source.

This repository is the account website, so Vite's default `/` base path is correct. No API keys, server or environment variables are required.

## Content and motion

- OctaTrade is one of three portfolio projects. Its cover is an actual screenshot from its repository.
- Storage and food project images are illustrative interface concepts, described in image alt text.
- The portrait and résumé were supplied by Vishwaranjan Singh.
- Name lettering uses React Bits SplitText. Achievement counters animate only on their first appearance per page visit.
- The site respects reduced-motion preferences and supports touch and keyboard interactions.

See [asset credits](ASSET-CREDITS.md) and the [React Bits license](REACT-BITS-LICENSE.md).
