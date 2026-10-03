import Image from 'next/image';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
import bgIllustration from 'images/pages/home/hero/bg-illustration.jpg';

const Hero = () => (
  <section className="hero relative mt-16 safe-paddings lg:mt-14">
    <Container className="relative z-30 pt-96 pb-2 xl:pt-54 lg:pt-52 md:px-5! md:pt-53" size="1600">
      <SectionLabel theme="white" icon="arrow">
        APP &middot; WEB &middot; CLOUD &middot; AUTOMATION &middot; AI
      </SectionLabel>

      <h1 className="mt-5 max-w-288 text-[4rem] leading-dense tracking-tighter text-balance 2xl:text-[3.5rem] xl:max-w-244 xl:text-[3.25rem]/dense lg:max-w-200 lg:text-[2.5rem]/dense md:mt-4 md:text-[2.625rem]/dense sm:text-[2rem]/dense">
        Every requirement in app, web, cloud, automation, and AI &mdash; we serve it. No fluff, just
        engineering that works.
      </h1>

      <div className="mt-8 flex gap-x-5 lg:mt-7 lg:gap-x-4">
        <Button data-test="home-cta" theme="white-filled" size="new" to="#contact">
          Take Your Business Online
        </Button>
        <Button data-test="home-services" theme="outlined" size="new" to="#services">
          See Our Services
        </Button>
      </div>
    </Container>

    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <Image
        className="relative left-1/2 w-480 max-w-none -translate-x-1/2 xl:w-326 lg:w-254 sm:w-188"
        src={bgIllustration}
        width={752}
        height={326}
        quality={100}
        alt=""
        priority
      />
    </div>

    <div className="absolute bottom-0 z-20 h-22 w-full bg-[linear-gradient(0deg,#000_0%,rgba(0,0,0,0.00)_100%)] xl:h-41 lg:h-39 sm:h-64.5" />
  </section>
);

export default Hero;
