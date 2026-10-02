import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';

import BackendServices from './services';

const SERVICE_ITEMS = [
  {
    title: 'App Development',
    description:
      'Native iOS, Android & cross-platform apps built for speed, responsiveness, and maximum user retention.',
    videoBase: 'postgres-database',
    version: '20261002',
    aspectRatio: 'aspect-588/580',
    width: 588,
    height: 580,
  },
  {
    title: 'Web Engineering',
    description:
      'High-conversion web platforms, SaaS applications, and modern digital storefronts engineered to scale.',
    videoBase: 'authentication',
    version: '20260821',
    aspectRatio: 'aspect-590/440',
    width: 590,
    height: 440,
  },
  {
    title: 'Cloud & DevOps',
    description:
      'High-availability infrastructure, automated CI/CD pipelines, and active cloud cost optimization.',
    videoBase: 'compute',
    version: '20260821',
    aspectRatio: 'aspect-590/300',
    width: 590,
    height: 300,
  },
  {
    title: 'Workflow Automation',
    description:
      'System integrations and intelligent pipelines that eliminate manual operations and operational drag.',
    videoBase: 'storage',
    version: '20260827',
    aspectRatio: 'aspect-590/680',
    width: 590,
    height: 680,
  },
  {
    title: 'Custom AI & Agents',
    description:
      'Autonomous business agents and practical AI solutions engineered for measurable commercial impact.',
    videoBase: 'ai-gateway',
    version: '20260814',
    aspectRatio: 'aspect-592/220',
    width: 592,
    height: 220,
  },
];

const BuildYourBackend = () => (
  <section
    className="build-your-backend mt-53 overflow-hidden bg-black-pure safe-paddings 2xl:mt-32 lg:mt-24 md:mt-20 sm:mt-18"
    id="services"
    aria-labelledby="services-heading"
  >
    <Container className="lg:pt-10 md:pt-8 sm:pt-6" size="1600">
      <div className="grid grid-cols-[22rem_minmax(0,1fr)] xl:grid-cols-[16rem_minmax(0,1fr)] lg:block">
        <div className="pt-3.25 lg:pt-0">
          <SectionLabel theme="white">CORE CAPABILITIES</SectionLabel>
          <span
            className="mt-4.25 block font-mono text-[8rem] leading-none tracking-tighter text-gray-new-10 xl:items-center xl:text-[6rem] lg:items-start md:mt-2 md:text-[5rem]"
            aria-hidden="true"
          >
            01
          </span>
        </div>
        <h2
          className="max-w-296 min-w-0 indent-24 text-5xl leading-dense font-normal tracking-tighter text-pretty text-white 2xl:text-[2.75rem] xl:indent-16 xl:text-[2.25rem] lg:mt-10 lg:indent-0 md:mt-8 md:text-[1.75rem]"
          id="services-heading"
        >
          <span>Not just developers. </span>
          <span className="text-gray-new-50">
            Servbit is your complete digital execution partner across App, Web, Cloud, Automation,
            and AI.
          </span>
        </h2>
      </div>

      <div className="mt-33 2xl:mt-16 md:mt-14 sm:mt-12">
        <BackendServices items={SERVICE_ITEMS} />
      </div>
    </Container>
  </section>
);

export default BuildYourBackend;
