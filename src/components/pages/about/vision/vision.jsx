import SecondarySection from 'components/shared/secondary-section';
import SectionLabel from 'components/shared/section-label';

import BlobNoisy from './images/blob-horizontal-noise.inline.svg';
import BlobLargeNoisy from './images/blob-large-horizontal-noise.inline.svg';
import Blob from './images/blob.inline.svg';

const Vision = () => (
  <SecondarySection title="Our Vision" className="md:pb-[26px]">
    <div className="flex gap-x-[140px] xl:gap-x-32 lg:gap-x-12 md:flex-col md:gap-y-20">
      <div className="relative flex-1 before:absolute before:top-0 before:-left-8 before:h-full before:w-px before:bg-gray-new-50 xl:ml-8 md:ml-0 md:before:hidden">
        <SectionLabel icon="arrow">Where we&apos;re headed</SectionLabel>

        <h3 className="mt-5 max-w-[736px] text-5xl leading-dense font-normal tracking-tighter text-gray-new-40 xl:max-w-[600px] xl:text-[36px] lg:max-w-full lg:text-2xl md:mt-4 md:text-xl">
          <span className="text-black-pure">Servbit is the premier digital engineering firm.</span>{' '}
          We engineer high-velocity App, Web, Cloud, Automation, and Custom AI architectures for
          modern businesses.
        </h3>
      </div>

      <div className="relative grid w-[416px] content-between before:absolute before:top-0 before:-left-8 before:h-full before:w-px before:bg-gray-new-50 xl:w-[320px] lg:order-0 lg:w-[238px] md:w-full md:gap-y-4 md:before:hidden">
        <SectionLabel icon="arrow">Our Vision</SectionLabel>

        <div className="grid gap-y-10 xl:gap-y-9 lg:gap-y-7 md:gap-y-4">
          <p className="text-xl leading-normal tracking-tighter text-black-pure xl:text-lg lg:text-base md:text-[15px]">
            The mission is focused: deliver world-class digital software and intelligent systems{' '}
            <mark className="rounded-sm bg-[#39A57D]/60 text-black-pure">
              {' '}
              for enterprises and startups
            </mark>{' '}
            engineered for market dominance.
          </p>

          <p className="text-xl leading-normal tracking-tighter text-black-pure xl:text-lg lg:text-base md:mr-8 md:text-[15px]">
            From rapid product concept to production cloud scale, Servbit delivers cohesive
            engineering{' '}
            <mark className="rounded-sm bg-[#39A57D]/60 text-black-pure">
              across web, mobile, cloud infrastructure, and autonomous agent workflows.
            </mark>
          </p>
        </div>
      </div>
    </div>
    <BlobLargeNoisy className="pointer-events-none absolute bottom-[48%] left-[47%] -rotate-45 xl:left-[35%]" />
    <BlobNoisy className="pointer-events-none absolute bottom-0 left-full -rotate-[75deg] xl:left-3/4" />
    <Blob className="pointer-events-none absolute -bottom-[30%] left-[85%] -rotate-45 xl:left-[70%]" />
  </SecondarySection>
);

export default Vision;
