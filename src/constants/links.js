// Central link registry. Only destinations that resolve in this app live here.
// Internal values point at routes that exist; anything else is an absolute URL.
export default {
  // Pages
  aboutUs: '/about-us',
  brand: '/brand',
  contactSales: '/contact-sales',
  home: '/',

  // Mailbox (the business has a single contact address)
  careers: 'mailto:servbit.in@gmail.com',
  signup: 'mailto:servbit.in@gmail.com',

  // External
  github: 'https://github.com/NinjaChunksBackup/servbit',
  linkedin: 'https://www.linkedin.com/company/servbit/',
  twitter: 'https://x.com/servbit',
  youtube: 'https://www.youtube.com/@servbit',
  discord: 'https://discord.gg/servbit',
};
