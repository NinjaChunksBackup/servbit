const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const defaultConfig = {
  poweredByHeader: false,
  transpilePackages: ['geist', 'react-icons'],
  outputFileTracingExcludes: {
    '*': ['./public/**'],
  },
  outputFileTracingIncludes: {
    '*': ['./public/**/*.svg', './public/**/*.md'],
    // OG image routes run on the Node.js runtime and read these assets from disk at
    // request time, so they must be traced into the serverless bundle. The fonts live
    // under src/ (not traced by default) and the images are otherwise dropped by the
    // ./public/** exclude above.
    '/api/og': [
      './src/fonts/esbuild/ESBuild-Medium.ttf',
      './src/fonts/inter/Inter-Regular.ttf',
      './public/images/og-image/logo.png',
      './public/images/og-image/background.png',
    ],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90, 95, 99, 100],
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=0, s-maxage=31536000',
          },
        ],
      },
      {
        source: '/home',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=0, s-maxage=31536000',
          },
        ],
      },
      {
        source: '/fonts/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
      {
        source: '/animations/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/brand/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  turbopack: {
    root: __dirname,
    rules: {
      '*.inline.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  'prefixIds',
                ],
              },
            },
          },
        ],
        as: '*.js',
      },
    },
    resolveAlias: {
      fs: { browser: './empty.js' },
      module: { browser: './empty.js' },
      path: { browser: './empty.js' },
      crypto: { browser: './empty.js' },
      stream: { browser: './empty.js' },
      assert: { browser: './empty.js' },
      http: { browser: './empty.js' },
      https: { browser: './empty.js' },
      os: { browser: './empty.js' },
      url: { browser: './empty.js' },
    },
  },
};

module.exports = withBundleAnalyzer(defaultConfig);
