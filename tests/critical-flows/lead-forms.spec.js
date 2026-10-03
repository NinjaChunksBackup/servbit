const { expect, test } = require('@playwright/test');

const { LEAD_FORM_CONTRACTS } = require('./contracts');
const {
  expectAnalyticsEvents,
  expectHealthyPage,
  expectManagedFormReady,
  expectNoAnalyticsEvents,
  installAnalyticsMock,
  mockExternalFormSubmissions,
  openCriticalPage,
  releaseDeferredAnalyticsFailure,
} = require('./helpers');

async function fillLeadForm(form, contract, fieldOverrides = {}) {
  const fields = { ...contract.fields, ...fieldOverrides };

  for (const [name, value] of Object.entries(fields)) {
    await form.locator(`[name="${name}"]`).fill(value);
  }

  for (const [name, value] of Object.entries(contract.selects)) {
    await form.locator(`[name="${name}"]`).selectOption(value);
  }
}

async function submitLeadForm(form, contract) {
  await form.getByRole('button', { name: contract.submitText }).click();
}

async function openLeadForm(page, contract, analyticsOptions = {}) {
  await installAnalyticsMock(page, analyticsOptions);
  await mockExternalFormSubmissions(page);
  const applicationErrors = await openCriticalPage(page, contract.pagePath);
  const form = page.getByTestId(contract.testId);

  await expect(form).toBeVisible();
  await expectManagedFormReady(form);

  return { applicationErrors, form };
}

for (const contract of LEAD_FORM_CONTRACTS) {
  test(`[${contract.id}] ${contract.name} reaches the monitored success outcome`, async ({
    page,
  }) => {
    const { applicationErrors, form } = await openLeadForm(page, contract);

    await fillLeadForm(form, contract);
    await submitLeadForm(form, contract);

    await expect(form.getByRole('button')).toHaveText(contract.successText);
    await expectAnalyticsEvents(page, contract.expectedEvents);
    await expectHealthyPage(applicationErrors);
  });

  test(`[${contract.validation.required.id}] ${contract.name} reports every missing required field`, async ({
    page,
  }) => {
    const { applicationErrors, form } = await openLeadForm(page, contract);
    const { errorCount, errorText, seedField } = contract.validation.required;

    await form.locator(`[name="${seedField}"]`).fill(contract.fields[seedField]);
    await submitLeadForm(form, contract);

    const errors = form.getByTestId('error-field-message');
    await expect(errors).toHaveCount(errorCount);
    await expect(errors).toContainText(Array(errorCount).fill(errorText));
    await expectNoAnalyticsEvents(page);
    await expectHealthyPage(applicationErrors);
  });

  test(`[${contract.validation.invalidEmail.id}] ${contract.name} rejects an invalid email`, async ({
    page,
  }) => {
    const { applicationErrors, form } = await openLeadForm(page, contract);

    await fillLeadForm(form, contract, { email: 'invalid-email' });
    await submitLeadForm(form, contract);

    const emailInput = form.locator('[name="email"]');
    const validity = await emailInput.evaluate((input) => ({
      typeMismatch: input.validity.typeMismatch,
      valid: input.validity.valid,
      validationMessage: input.validationMessage,
    }));

    expect(validity).toMatchObject({ typeMismatch: true, valid: false });
    expect(validity.validationMessage).not.toBe('');

    await form.evaluate((formElement) => {
      formElement.noValidate = true;
    });
    await submitLeadForm(form, contract);

    const errors = form.getByTestId('error-field-message');
    await expect(errors).toHaveCount(1);
    await expect(errors).toHaveText(contract.validation.invalidEmail.errorText);
    await expect(form.locator('button[type="submit"]')).toHaveText(contract.submitText);
    await expectNoAnalyticsEvents(page);
    await expectHealthyPage(applicationErrors);
  });

  test(`[${contract.identifyFailureId}] ${contract.name} stops when identification fails`, async ({
    page,
  }) => {
    const { applicationErrors, form } = await openLeadForm(page, contract, {
      failureEventName: 'identify',
    });

    await fillLeadForm(form, contract);
    await submitLeadForm(form, contract);

    await expect(page.getByTestId('error-message')).toBeVisible();
    await expect(form.locator('button[type="submit"]')).not.toHaveText(contract.successText);
    await expectAnalyticsEvents(page, [contract.expectedEvents[0]]);
    await expectHealthyPage(applicationErrors);
  });

  test(`[${contract.analyticsFailureId}] ${contract.name} does not show success when analytics fails`, async ({
    page,
  }) => {
    const { applicationErrors, form } = await openLeadForm(page, contract, {
      failureEventName: 'Contact Sales Form Submitted',
    });

    await fillLeadForm(form, contract);
    await submitLeadForm(form, contract);

    await expect(page.getByTestId('error-message')).toBeVisible();
    await expect(form.getByRole('button', { name: contract.submitText })).not.toHaveText(
      contract.successText
    );
    await expectAnalyticsEvents(page, contract.expectedEvents);
    await expectHealthyPage(applicationErrors);
  });

  test(`[${contract.identifyFailureId}-DEFERRED] ${contract.name} recovers when identification settles`, async ({
    page,
  }) => {
    const { applicationErrors, form } = await openLeadForm(page, contract, {
      deferFailure: true,
      failureEventName: 'identify',
    });
    const submitButton = form.locator('button[type="submit"]');

    await fillLeadForm(form, contract);
    await submitLeadForm(form, contract);

    await expect(submitButton).toBeDisabled();
    await releaseDeferredAnalyticsFailure(page);
    await expect(submitButton).toHaveText(contract.submitText);
    await expect(submitButton).toBeEnabled();
    await expectHealthyPage(applicationErrors);
  });
}
