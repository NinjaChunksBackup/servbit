import Container from 'components/shared/container';
import Link from 'components/shared/link';
import UseCaseCalculator from 'components/shared/use-case-calculator';
import LINKS from 'constants/links';

const Hero = () => (
  <section className="hero relative overflow-hidden pt-[88px] safe-paddings xl:pt-14 lg:pt-11 md:pt-8">
    <Container size="xxs">
      <div className="px-8 sm:px-0">
        <h1 className="text-6xl leading-dense font-semibold tracking-tighter xl:text-[56px] lg:text-5xl md:text-[36px] md:leading-tight">
          Servbit for platforms
        </h1>
        <p className="mt-4 text-2xl leading-snug tracking-extra-tight text-gray-new-80 xl:text-xl md:mt-3 md:text-lg">
          Use Servbit to build your platform with maximum cost efficiency.
        </p>
      </div>

      <div className="prose-variable px-8 sm:px-0">
        <p>
          Servbit is a cost-effective option for managing fleets of database and compute instances.
          Why? Because of its usage-based pricing and scale-to-zero. Via its developer-friendly API,
          you can <strong>run thousands of databases without a DBA</strong>.
        </p>
        <p className="mt-4!">
          Modern engineering teams and ambitious software platforms rely on Servbit to power robust,
          multi-tenant backend infrastructure. To get an estimate for your platform,{' '}
          <Link to={LINKS.contactSales}>reach out to us</Link>.
        </p>
      </div>

      <UseCaseCalculator />
    </Container>
  </section>
);

export default Hero;
