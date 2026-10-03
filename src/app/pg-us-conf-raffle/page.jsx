import RaffleHero from 'components/pages/pg-us-conf-raffle/hero';
import Layout from 'components/shared/layout';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata({
  title: 'Servbit Conference Raffle — Servbit',
  description: 'Enter the Servbit conference raffle for a chance to win a $500 LEGO gift card.',
  pathname: '/pg-us-conf-raffle',
  robotsNoindex: 'noindex',
});

const RafflePage = () => (
  <Layout headerClassName="absolute! bg-transparent!">
    <RaffleHero />
  </Layout>
);

export default RafflePage;
