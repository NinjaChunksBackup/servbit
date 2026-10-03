# Servbit

Marketing site for Servbit, a digital engineering business building apps, web
platforms, cloud infrastructure, workflow automation and custom AI.

The site is a Next.js App Router application. It is a small, deliberately
static marketing site: four routes, no CMS, no database, no authentication.

## Routes

| Route            | Page                                                                    |
| ---------------- | ----------------------------------------------------------------------- |
| `/`              | Homepage: hero, core capabilities, business transformation, scale, CTA   |
| `/about-us`      | Company story, vision, engineering standards, social connections          |
| `/contact-sales` | Contact form, submitted to HubSpot                                       |

Two API routes support the pages above:

- `POST /api/hubspot` — forwards contact form submissions to HubSpot
- `GET /api/og` — generates Open Graph images

Anything else returns 404.

## Stack

- Next.js with the App Router and Turbopack
- React with Tailwind CSS
- Rive for the globe animation, Framer Motion for transitions
- React Hook Form with a Yup validation schema for the contact form
- next-sitemap for `sitemap.xml` and `robots.txt`
- Playwright for end-to-end tests, Vitest for unit tests

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site is then available on <http://localhost:3000>.

## Commands

| Command                     | Purpose                                                  |
| --------------------------- | -------------------------------------------------------- |
| `npm run dev`               | Start the development server                              |
| `npm run build`             | Production build, followed by sitemap generation          |
| `npm start`                 | Serve the production build                                |
| `npm run lint:js`           | ESLint                                                    |
| `npm run fix:js`            | ESLint with autofix, then Prettier                        |
| `npm run test:unit:run`     | Unit tests once (Vitest)                                  |
| `npm run test:unit`         | Unit tests in watch mode                                  |
| `npm run test:critical:quick` | End-to-end tests, desktop Chromium only                 |
| `npm run test`              | Full end-to-end matrix: desktop and mobile, Chromium and WebKit |
| `npm run check:broken-links`| Crawl the running site for broken links                   |

`npm run fix:js` must be run before committing JavaScript changes. The
pre-commit hook runs lint-staged over staged files, and the pre-push hook runs
the unit tests.

## Testing

Unit tests live beside the code they cover. The end-to-end suite is in
`tests/critical-flows/` and is contract-driven: destinations and outcomes are
declared in `contracts.js` and asserted in the specs. See
`tests/critical-flows/README.md`.

Playwright needs browser binaries once:

```bash
npx playwright install chromium webkit
```

## Configuration

`.env.example` documents every variable the application reads. Only
`NEXT_PUBLIC_DEFAULT_SITE_URL` is required; the rest are Vercel-provided or
belong to tooling.

The canonical production origin is `https://servbit.in`.

## Deployment

The site builds to static output and is deployed on Vercel. `postbuild`
generates the sitemap, so no additional build configuration is needed.