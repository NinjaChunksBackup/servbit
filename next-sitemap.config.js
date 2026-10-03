module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://servbit.in',
  transform: async (config, routePath) => ({
    loc: routePath,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    changefreq: config.changefreq,
    priority: config.priority,
    alternateRefs: config.alternateRefs ?? [],
    trailingSlash: config.trailingSlash,
  }),
  exclude: [
    // API routes
    '/api/*',

    // XML routes (sitemaps)
    '**/*.xml',
  ],
  generateRobotsTxt: true,
  additionalPaths: async (config) => [await config.transform(config, '/')],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
