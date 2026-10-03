import BuildYourBackend from 'components/pages/home/build-your-backend';
import CTA from 'components/pages/home/cta';
import Hero from 'components/pages/home/hero';
import OperateWithAgents from 'components/pages/home/operate-with-agents';
import ScaleYourApp from 'components/pages/home/scale-your-app';
import JsonLd from 'components/shared/json-ld';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import { generateOrganizationSchema } from 'lib/schema';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata({
  ...SEO_DATA.index,
  robotsNoindex: 'noindex',
});

const HomePage = () => {
  const organizationSchema = generateOrganizationSchema();

  return (
    <Layout isHeaderSticky isHeaderStickyOverlay>
      <JsonLd data={organizationSchema} />
      <Hero />
      <BuildYourBackend />
      <OperateWithAgents />
      <ScaleYourApp />
      <CTA />
    </Layout>
  );
};

export default HomePage;

export const revalidate = false;
