# Repository guide

Guidance for AI agents and contributors working in this repository.

## What this repository is

The Servbit marketing site: a Next.js App Router application with four static
routes (`/`, `/about-us`, `/contact-sales`, and a 404) plus two API routes that
support them. There is no CMS, no database, no authentication and no
documentation site.

## Project structure

```text
├── public/              # Static assets served at the site root
├── scripts/             # Repository maintenance scripts
├── src/
│   ├── app/             # App Router routes and the root layout
│   ├── components/
│   │   ├── pages/       # Page-specific components, grouped per route
│   │   └── shared/      # Reusable components (header, footer, layout, …)
│   ├── constants/       # Links, navigation menus, SEO metadata, form constants
│   ├── contexts/        # React contexts (tabs, code tabs, topbar)
│   ├── hooks/           # Custom React hooks
│   ├── icons/           # SVG icons, imported as `icons/…`
│   ├── images/          # Images, imported as `images/…`
│   ├── lib/             # Structured data generation
│   ├── styles/          # Global CSS, imported from `styles/globals.css`
│   └── utils/           # Helpers
├── tests/critical-flows # Playwright end-to-end suite
└── next.config.js       # Next.js configuration
```

The `components`, `constants`, `hooks`, `icons`, `images`, `lib`, `utils` and
`scripts` directories are import aliases. Use them bare rather than with
relative paths: `import LINKS from 'constants/links'`.

## Key commands

### Development

```bash
npm run dev              # Start the dev server on http://localhost:3000
npm run build            # Production build plus sitemap generation
npm start                # Serve the production build
```

### Code quality

```bash
npm run fix:js           # Run this before committing JS changes
npm run lint:js          # ESLint only, no writes
npm run check:broken-links  # Crawl the running site for broken links
```

### Testing

```bash
npm run test:unit:run      # Unit tests once (Vitest)
npm run test:unit          # Unit tests in watch mode
npm run test:critical:quick # End-to-end, desktop Chromium only
npm run test                # Full end-to-end matrix
```

## Git workflow

Standard flow: commit to a branch and open a pull request against `main`. No
special push commands are needed.

For JavaScript and CSS changes, run `npm run fix:js` before committing.

Two hooks run automatically:

- **pre-commit** — lint-staged over staged files: ESLint autofix then Prettier
- **pre-push** — the unit test suite. A failure aborts the push.

Commit messages must follow Conventional Commits. The permitted scopes are
`components`, `constants`, `hooks`, `icons`, `images`, `pages`, `styles`,
`templates` and `utils`. Anything outside that list is rejected.

Never bypass the hooks with `--no-verify`.

## Architecture conventions

### Routing

Routes live in `src/app`. Each route is a `page.jsx` that composes components
from `src/components/pages/<route>`. A route must not reach into another
route's component directory.

### Content and copy

All page copy is JSX inside the page components. There is no content
directory and no frontmatter. To change wording, edit the component.

The public-facing copy must match the approved positioning: Servbit takes
businesses online and expands their reach and profits, across app, web, cloud,
automation and AI. Service names are exactly `App Development`, `Web
Engineering`, `Cloud & DevOps`, `Workflow Automation` and `Custom AI & Agents`.

The single contact address is `servbit.in@gmail.com`. It is the value of
`careers` and `signup` in `src/constants/links.js` and appears in the footer
and the contact form.

### Do not invent claims

This is a real business with a short public track record. Do not add:

- certifications, compliance badges or audit claims
- performance metrics, request volumes or percentages
- named customers, testimonials or client logos
- funding history, investors or awards
- client counts, uptime figures or team sizes

Every number and every third-party name on the site must be something the
business owner has confirmed. If a section would need an invented fact to look
complete, leave the section out.

### Links

Add destinations to `src/constants/links.js` and reference them as
`LINKS.<key>`. Never inline a URL in a component. Section links in
`src/constants/menus.js` must be root-relative (`/#services`) so they resolve
from every page, not bare fragments.

Adding a key to `links.js` makes it a public claim. A destination that the
business does not control, or does not want associated with the brand, must
not be added.

### Icons and images

Icons are imported from `icons/…` and images from `images/…`. Inline SVG
components use the `.inline.svg` suffix and are transformed by the Turbopack
`@svgr/webpack` rule configured in `next.config.js`; use them as JSX.

Footer social icons are CSS masks. Adding one means adding the SVG to
`public/images/footer/`, a matching rule in `src/styles/mask-icons.css`, and the
link in `src/constants/links.js`.

### Adding a route

1. Create `src/app/<route>/page.jsx`.
2. Add its components under `src/components/pages/<route>/`.
3. Add a `pathname` entry to `src/constants/seo-data.js` and pass it to
   `getMetadata`.
4. Add any navigation link to `src/constants/menus.js`.
5. Add or extend a Playwright contract in `tests/critical-flows/contracts.js`.

`next.config.js` is intentionally small. Do not add redirects, rewrites or
middleware speculatively; removed routes should return 404 rather than be
papered over with redirects.

## Verifying a change

Before reporting a change as done:

```bash
npm run lint:js
npm run test:unit:run
npm run build
npm run test:critical:quick
```

`npm run build` must succeed, and the Playwright suite must pass. The
pre-push hook runs the unit tests, so a broken build will block the push.

## Notes

- The codebase uses `autocrlf` line endings with LF normalisation required by
  Prettier. If lint-staged suddenly fails on files that look unchanged,
  normalise the working tree to LF before retrying.
- There is no `content/` directory, no navigation YAML and no vendored
  agent-skill content. Guidance referring to those is obsolete.
- Multiple people clone this repository to different local paths. Never
  hardcode a local path in code or documentation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
