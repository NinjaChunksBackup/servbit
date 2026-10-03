# Critical user flow monitoring

This suite monitors business-critical website journeys without blocking releases. A failing run
should be investigated, but the GitHub check must not be configured as a required status check
until the release policy is agreed with the business owner.

## Contract model

Each flow separates three concerns:

- `priority`: user impact if the flow breaks (`P0` or `P1`)
- `mode`: how deeply the flow is exercised (`navigate`, `render`, or `submit`)
- `policy`: whether a failure only reports a regression or blocks a release (`monitor` for now)

The code-reviewed contract registry is in `contracts.js`. Update the registry, selectors, tests,
and PR description together when a critical destination or outcome changes.

## Monitored flows

Servbit is a digital engineering services business. There is no console, no signup, no
documentation site, no blog and no subscription programme, so those journeys no longer have a
destination to monitor. The suite covers what actually exists:

| Test ID            | Priority | Journey                        | Expected outcome                                                        |
| ------------------ | -------- | ------------------------------ | ----------------------------------------------------------------------- |
| `TC-CTA-001..004`  | P0       | Homepage and header calls to action | Each CTA keeps its anchor destination on the right viewport         |
| `TC-CTA-005`       | P0       | Homepage section anchors       | `#services`, `#solutions` and `#contact` all resolve                   |
| `TC-CTA-006`       | P0       | Contact page                   | The form renders and the business mailbox is reachable                 |
| `TC-LEAD-001*`     | P0       | Contact sales                  | Required fields, email, analytics payload, success, and failure states work |

Every browser test follows Arrange, Act, Assert:

1. Arrange a clean page and mock analytics or external form submission.
2. Act through the same controls a user uses.
3. Assert the final business outcome, payload, destination, and page health.

Tests must never create accounts or leads. Use `@example.com` addresses and keep all external
submission boundaries mocked.

## Retired coverage

The following suites were removed because every flow they monitored pointed at a route that no
longer exists. They are not replaced with `expect(page).toHaveURL(404)` assertions: a 404 is the
intended behaviour of a retired route, not a regression.

- `docs-onboarding.spec.js` - documentation quickstart, docs search and the init command
- `subscriptions.spec.js` - changelog and blog article email subscriptions
- `TC-ACQ-001..008` acquisition contracts - console login, console signup and console billing
- `TC-DOC-001..002` docs contracts - docs entry point and docs onboarding
- `TC-LEAD-002` startup application - the startup programme page
- `TC-LEAD-003` AI agent application - the AI agents use-case page

## Local commands

Install browser binaries once:

```bash
npx playwright install chromium webkit
```

Run the complete desktop/mobile Chromium and WebKit matrix:

```bash
npm run test
```

`npm run test:critical` is an explicit alias for the same monitoring suite. Run a fast desktop
Chromium check with:

```bash
npm run test:critical:quick
```

Open Playwright UI mode or the last HTML report:

```bash
npm run test:critical:ui
npm run test:critical:report
```

Playwright starts the local Next.js server automatically. Set `PLAYWRIGHT_BASE_URL` to test an
already running local or preview deployment. Set `PLAYWRIGHT_SKIP_WEB_SERVER=1` when the target
server is managed separately.

## Why Playwright

Playwright is the project's E2E runner because it provides:

- first-class Chromium and WebKit projects; Cypress WebKit support is experimental
- one declarative project matrix for desktop and mobile device profiles
- isolated browser contexts and native support for multiple pages, tabs, and popups
- trace, screenshot, and video artifacts on failure
- automatic local web server lifecycle

The tradeoffs are:

- Cypress has a particularly strong interactive command log and time-travel debugging experience
- Playwright's async API requires every action and assertion to be awaited consistently
- additional browser downloads and CI time
- WebKit tests approximate Safari but do not execute the branded Safari browser

The Cypress runner, configuration, workflow, and dependencies were removed after the active form
coverage was migrated.