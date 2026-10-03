import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://servbit.in';

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Servbit',
  alternateName: 'Servbit Digital Engineering',
  url: SITE_URL,
  description: SEO_DATA.index.description,
  logo: `${SITE_URL}/images/servbit-logo.svg`,
  sameAs: [LINKS.instagram, LINKS.linkedin, LINKS.twitter, LINKS.youtube],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: `${SITE_URL}${LINKS.contactSales}`,
  },
});
