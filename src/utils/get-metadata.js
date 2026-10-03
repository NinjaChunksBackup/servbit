import SEO_DATA from 'constants/seo-data';

const DEFAULT_TITLE = SEO_DATA.index.title;
const DEFAULT_DESCRIPTION = SEO_DATA.index.description;

// Social cards are generated at request time by the /api/og route, which takes
// the card title base64-encoded so it survives the query string. Pointing
// openGraph and twitter at the generator keeps one card layout in the codebase
// and means every page gets a card without a static image per route.
const buildOgImagePath = (title) =>
  `/api/og?title=${encodeURIComponent(Buffer.from(title, 'utf8').toString('base64'))}`;

const assertAbsoluteHttpUrl = (value, fieldName) => {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`${fieldName} must be an absolute HTTP(S) URL, got ${JSON.stringify(value)}`);
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error(`${fieldName} must be an absolute HTTP(S) URL, got ${JSON.stringify(value)}`);
  }
};

export default function getMetadata({
  title,
  description,
  keywords,
  robotsNoindex,
  pathname,
  imagePath,
  canonical,
}) {
  const SITE_URL =
    process.env.VERCEL_ENV === 'preview'
      ? `https://${process.env.VERCEL_BRANCH_URL}`
      : process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
  const canonicalUrl = SITE_URL + pathname;

  const metaTitle = title || DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;

  const resolvedImagePath = imagePath || buildOgImagePath(metaTitle);
  const metaImageUrl = resolvedImagePath.startsWith('http')
    ? resolvedImagePath
    : SITE_URL + resolvedImagePath;

  const siteName = 'Servbit';
  const robots = robotsNoindex === 'noindex' ? { index: false } : null;

  let alternateCanonical = canonicalUrl;

  if (canonical !== undefined && canonical !== null) {
    assertAbsoluteHttpUrl(canonical, 'canonical');
    alternateCanonical = canonical;
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: alternateCanonical,
    },
    manifest: '/manifest.json',
    keywords: Array.from(new Set(keywords?.split(',').map((keyword) => keyword.trim()))).join(', '), // Remove duplicates
    robots,
    icons: {
      icon: [
        { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon/favicon.ico', sizes: '32x32' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
        { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      ],
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: metaImageUrl,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@servbit',
    },
  };
}
