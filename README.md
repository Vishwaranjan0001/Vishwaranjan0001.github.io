# Vishwaranjan Singh — Portfolio

Personal portfolio built with React, Vite, GSAP ScrollTrigger, Lenis and React Bits.

**[Visit portfolio](https://vishwaranjan0001.github.io/)** · **[GitHub profile](https://github.com/Vishwaranjan0001)** · **[Résumé](https://vishwaranjan0001.github.io/Vishwaranjan-Singh-Resume.pdf)**

Computer Science undergraduate at Graphic Era University, focused on backend engineering, full-stack applications, and AI-powered workflows.

## Project directory

| Project | Focus | Stack |
| --- | --- | --- |
| [OctaTrade](https://github.com/Vishwaranjan0001/OctaTrade) | Paper trading, order concurrency, virtual wallets | Node.js, Express, MongoDB, Redis, React |
| [SupportOps AI](https://github.com/Vishwaranjan0001/SupportOps-AI) | Tool-backed customer support, policy retrieval, human refund approval | Python, FastAPI, LangGraph, MCP, React, SQLite |
| [Simple Storage Service](https://github.com/Vishwaranjan0001/S3) | Bucket-based file storage API | Python, Flask, SQLAlchemy, SQLite |
| [FoodBridge](https://github.com/Vishwaranjan0001/App) | Food donation coordination; group project | React, Express, MongoDB, JWT |
| [WanderLust](https://github.com/Vishwaranjan0001/WanderLust) | Travel listings, reviews, booking workflows | Express, EJS, MongoDB, Passport |
| [BalanceX](https://github.com/Vishwaranjan0001/BalanceX-Module-final) | Heap-based load balancing prototype | C++17, CMake, Asio |
| [MediMatch](https://github.com/Vishwaranjan0001/MediMatchfinL) | Blood-request coordination prototype | Java, Spring Boot, MongoDB |
| [Krishi Sarthi](https://github.com/Vishwaranjan0001/Krishi_Sarthi_Implement-1-) | Bilingual farming dashboard prototype | React, TypeScript, Tailwind |
| [ADAM fork](https://github.com/Vishwaranjan0001/ADAM) | Public-record knowledge and retrieval platform | Python, FastAPI, Next.js, PostgreSQL |

ADAM is a fork of [anuragdevcode/ADAM](https://github.com/anuragdevcode/ADAM); the link identifies its upstream source. Individual READMEs describe current scope and setup requirements.

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
