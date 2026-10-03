const { expect, test } = require('@playwright/test');

const { CTA_LINK_CONTRACTS, HOMEPAGE_ANCHORS } = require('./contracts');
const { expectHealthyPage, openCriticalPage } = require('./helpers');

async function expectContractLink(page, contract) {
  const link = page.getByTestId(contract.testId);

  await expect(link, `${contract.id}: ${contract.name} is missing`).toBeVisible();
  await expect(link).toHaveAttribute('href', contract.expectedHref);
}

test.describe('critical acquisition journeys', () => {
  test('[TC-CTA-001..004] every call to action keeps its destination', async ({
    isMobile,
    page,
  }) => {
    const applicationErrors = await openCriticalPage(page, '/');

    // The mobile CTA only exists once the menu is open; desktop renders it inline.
    if (isMobile) {
      const menuToggle = page.getByTestId('mobile-menu-toggle');
      await expect(menuToggle).toBeVisible();
      await menuToggle.click();
      await expect(menuToggle).toHaveAttribute('aria-label', 'Close menu');
    }

    for (const contract of CTA_LINK_CONTRACTS) {
      await test.step(`${contract.id}: ${contract.name}`, async () => {
        // header-cta is desktop-only, mobile-cta is mobile-only.
        const isWrongViewport =
          (contract.testId === 'header-cta' && isMobile) ||
          (contract.testId === 'mobile-cta' && !isMobile);

        if (isWrongViewport) return;

        await expectContractLink(page, contract);
      });
    }

    if (isMobile) {
      const menuToggle = page.getByTestId('mobile-menu-toggle');
      await menuToggle.click();
      await expect(menuToggle).toHaveAttribute('aria-label', 'Open menu');
    }

    await expectHealthyPage(applicationErrors);
  });

  test('[TC-CTA-005] every CTA anchor exists on the homepage', async ({ page }) => {
    const applicationErrors = await openCriticalPage(page, '/');

    for (const anchor of HOMEPAGE_ANCHORS) {
      await test.step(`#${anchor}`, async () => {
        await expect(page.locator(`#${anchor}`)).toHaveCount(1);
      });
    }

    await expectHealthyPage(applicationErrors);
  });

  test('[TC-CTA-006] the contact page renders its form and contact address', async ({ page }) => {
    const applicationErrors = await openCriticalPage(page, '/contact-sales');

    await expect(page.getByTestId('contact-sales-form')).toBeVisible();
    await expect(page.getByRole('link', { name: 'servbit.in@gmail.com' }).first()).toBeVisible();

    await expectHealthyPage(applicationErrors);
  });
});
