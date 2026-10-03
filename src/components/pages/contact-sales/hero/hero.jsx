import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';
import SectionLabel from 'components/shared/section-label';

import ContactForm from './contact-form';

const CAPABILITIES = [
  { title: 'App', description: 'iOS, Android & cross-platform' },
  { title: 'Web', description: 'Platforms, SaaS & storefronts' },
  { title: 'Cloud', description: 'Infrastructure, CI/CD & cost' },
  { title: 'Automation', description: 'Integrations & pipelines' },
  { title: 'AI', description: 'Agents & applied AI systems' },
];

const Hero = () => (
  <section className="hero relative z-10 grow overflow-hidden bg-black-pure py-40 xl:pt-32 xl:pb-24 lg:py-24 md:py-24">
    <Container size="1280">
      <div className="flex min-h-[578px] justify-between gap-16 xl:min-h-0 xl:gap-10 lg:flex-col lg:gap-12">
        <div className="flex max-w-[544px] flex-1 flex-col lg:max-w-full">
          <SectionLabel className="mb-5 lg:mb-[18px] md:mb-4" theme="white">
            Talk to us
          </SectionLabel>
          <Heading
            className="text-pretty lg:max-w-2xl md:!text-[36px] xs:!text-[32px]"
            tag="h1"
            size="md-new"
            theme="white"
          >
            Tell us what you are building
          </Heading>
          <div className="mt-auto flex flex-col gap-7 xl:gap-5 lg:gap-7">
            <p className="max-w-[544px] text-lg leading-normal tracking-tight text-pretty text-gray-new-70 xl:text-base lg:mt-[18px] lg:max-w-xl">
              Tell us about the app, platform, cloud setup, automation, or AI system you need. We
              reply from one accountable team, not a queue.
            </p>
            <ul className="flex flex-col gap-y-5 border-t border-gray-new-20 pt-7 xl:gap-y-3 xl:pt-5 lg:flex-row lg:flex-wrap lg:gap-x-5 lg:gap-y-3 lg:border-t-0 lg:pt-0 md:gap-x-4 md:gap-y-3.5">
              {CAPABILITIES.map(({ title, description }) => (
                <li className="flex flex-col gap-0.5 lg:gap-0" key={title}>
                  <span className="text-lg leading-normal font-medium tracking-tight text-gray-new-90 xl:text-base lg:leading-none">
                    {title}
                  </span>
                  <span className="text-sm leading-normal tracking-tight text-gray-new-60 xl:text-xs">
                    {description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative max-w-xl flex-1 lg:max-w-full">
          <ContactForm />
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;
