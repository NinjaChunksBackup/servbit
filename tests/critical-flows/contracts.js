// Route + contract definitions for the critical-flow E2E suite.
//
// Servbit is a digital engineering services business: there is no console, no
// signup flow, no docs and no blog. Every destination below must resolve either
// to a route that exists in this app or to the single business mailbox.

const DESTINATIONS = {
  contact: 'mailto:servbit.in@gmail.com',
  contactSales: '/contact-sales',
  home: '/',
};

// Calls to action rendered on the homepage and in the header. The homepage CTAs
// use same-document anchors (they only ever render on `/`); the header CTAs
// render on every page, so they must be root-relative to resolve elsewhere.
const CTA_LINK_CONTRACTS = [
  {
    id: 'TC-CTA-001',
    key: 'home-cta',
    name: 'Homepage primary CTA',
    priority: 'P0',
    mode: 'navigate',
    policy: 'monitor',
    testId: 'home-cta',
    expectedHref: '#contact',
  },
  {
    id: 'TC-CTA-002',
    key: 'home-services',
    name: 'Homepage services CTA',
    priority: 'P0',
    mode: 'navigate',
    policy: 'monitor',
    testId: 'home-services',
    expectedHref: '#services',
  },
  {
    id: 'TC-CTA-003',
    key: 'header-cta',
    name: 'Desktop header CTA',
    priority: 'P0',
    mode: 'navigate',
    policy: 'monitor',
    testId: 'header-cta',
    expectedHref: '/#contact',
  },
  {
    id: 'TC-CTA-004',
    key: 'mobile-cta',
    name: 'Mobile menu CTA',
    priority: 'P0',
    mode: 'navigate',
    policy: 'monitor',
    testId: 'mobile-cta',
    expectedHref: '/#contact',
  },
];

// Anchors that must exist on the homepage for the CTAs above to land anywhere.
const HOMEPAGE_ANCHORS = ['services', 'solutions', 'contact'];

const LEAD_FORM_CONTRACTS = [
  {
    id: 'TC-LEAD-001',
    key: 'contact-sales',
    name: 'Contact sales',
    priority: 'P0',
    mode: 'submit',
    policy: 'monitor',
    pagePath: DESTINATIONS.contactSales,
    testId: 'contact-sales-form',
    submitText: 'Submit',
    successText: 'Sent!',
    fields: {
      firstname: 'Alex',
      lastname: 'Lopez',
      email: 'critical-flow-contact@example.com',
      companyWebsite: 'https://example.com',
      message: 'Critical user flow monitoring',
    },
    selects: {
      companySize: '0_1',
      reasonForContact: 'New project',
    },
    expectedEvents: [
      {
        name: 'identify',
        properties: { email: 'critical-flow-contact@example.com' },
      },
      {
        name: 'Contact Sales Form Submitted',
        properties: {
          email: 'critical-flow-contact@example.com',
          first_name: 'Alex',
          last_name: 'Lopez',
          company_website: 'https://example.com',
          company_size: '0_1',
          reason_for_contact: 'New project',
          message: 'Critical user flow monitoring',
        },
      },
    ],
    analyticsFailureId: 'TC-LEAD-001-ERR',
    identifyFailureId: 'TC-LEAD-001-ERR-IDENTIFY',
    validation: {
      required: {
        id: 'TC-LEAD-001-VAL-REQUIRED',
        seedField: 'firstname',
        errorCount: 5,
        errorText: /Required [Ff]ield/,
      },
      invalidEmail: {
        id: 'TC-LEAD-001-VAL-EMAIL',
        errorText: 'Please enter a valid email',
      },
    },
  },
];

module.exports = {
  CTA_LINK_CONTRACTS,
  DESTINATIONS,
  HOMEPAGE_ANCHORS,
  LEAD_FORM_CONTRACTS,
};
