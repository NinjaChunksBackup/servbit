import Image from 'next/image';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
import LINKS from 'constants/links';
import backgroundNoise from 'images/pages/home/working-together/bg-noise.jpg';
import ownershipIcon from 'images/pages/home/working-together/ownership-icon.svg';
import runbooksIcon from 'images/pages/home/working-together/runbooks-icon.svg';
import sameTeamIcon from 'images/pages/home/working-together/same-team-icon.svg';
import scopeAgreedIcon from 'images/pages/home/working-together/scope-agreed-icon.svg';

const COMMITMENTS = [
  {
    icon: scopeAgreedIcon,
    title: 'Scope agreed in writing',
    description:
      'Requirements, architecture and a written plan are signed off before implementation starts. The price does not move afterwards.',
  },
  {
    icon: ownershipIcon,
    title: 'Yours from the first commit',
    description:
      'Source code, cloud accounts and documentation are yours on day one. There is nothing to licence and nothing to unlock.',
  },
  {
    icon: sameTeamIcon,
    title: 'The engineers you brief',
    description:
      'The people who design your system are the people who build and maintain it. No account manager relays messages in either direction.',
  },
  {
    icon: runbooksIcon,
    title: 'Ready to run without us',
    description:
      'Runbooks, deployment pipelines and architecture notes ship with the system, so your team can run and extend it without us.',
  },
];

const DecorativeBackground = () => (
  <Image
    className="pointer-events-none absolute top-0 -right-[10%] h-full w-auto 2xl:-right-[20%] lg:hidden sm:-right-1/2"
    src={backgroundNoise}
    alt=""
    width={1175}
    height={927}
    quality={100}
  />
);

const WorkingTogether = () => (
  <section
    className="working-together relative overflow-hidden bg-[#E4F1EB] py-40 safe-paddings text-black-pure 2xl:py-32 xl:py-24 md:py-20"
    id="working-together"
    aria-labelledby="working-together-heading"
  >
    <DecorativeBackground />
    <Container className="relative z-10 px-0! 2xl:px-8! md:px-5!" size="1280">
      <div className="max-w-5xl">
        <SectionLabel className="mb-5">Working together</SectionLabel>
        <h2
          className="text-[4.5rem] leading-none font-normal tracking-tighter text-pretty 2xl:text-[4rem] xl:text-[3.25rem] md:text-[2.25rem] sm:text-[2rem]"
          id="working-together-heading"
        >
          A working relationship you can plan around.
        </h2>
        <p className="mt-6 max-w-184 text-lg leading-normal font-normal tracking-extra-tight text-pretty text-gray-new-40 lg:text-base lg:leading-snug md:mt-4.5 md:text-[0.9375rem]">
          Servbit is built for ambitious businesses that need to build, iterate, and scale rapidly.
          Clear deliverables, transparent engagement, and engineering that delivers compounding ROI.
        </p>
        <Button
          className="mt-9 bg-black-pure! font-medium hover:bg-gray-new-20! lg:mt-8 md:mt-7"
          size="new"
          theme="secondary"
          to={LINKS.contactSales}
        >
          Talk Through Your Scope
        </Button>
      </div>

      <ul className="mt-22 grid grid-cols-4 gap-4 lg:mt-16 lg:grid-cols-2 sm:mt-12 sm:grid-cols-1 sm:gap-3">
        {COMMITMENTS.map(({ icon, title, description }) => (
          <li
            className="flex min-h-94 flex-col bg-[#CDDFD7] px-8 pt-8 pb-7 xl:min-h-84 lg:min-h-80 lg:px-7 lg:pt-7 lg:pb-6 md:h-75 md:px-5 md:pt-5 md:pb-5 sm:h-63"
            key={title}
          >
            <Image className="size-14 md:size-10" src={icon} width={56} height={56} alt="" />
            <div className="mt-auto flex flex-col gap-3">
              <h3 className="text-[1.75rem] leading-tight font-normal tracking-extra-tight text-balance xl:text-[1.375rem] md:text-2xl/tight sm:text-[1.375rem]/tight">
                {title}
              </h3>
              <p className="max-w-xl text-base leading-snug font-normal tracking-tight text-pretty text-gray-new-20 md:text-[0.9375rem] md:leading-snug">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default WorkingTogether;
