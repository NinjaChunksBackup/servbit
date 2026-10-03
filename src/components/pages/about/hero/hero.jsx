import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import LINKS from 'constants/links';

const Hero = () => (
  <section className="hero relative h-[820px] border-b border-gray-new-20 safe-paddings xl:h-[854px] lg:h-[665px] md:h-[587px]">
    <Container
      className="flex h-full w-full flex-col items-center justify-between pt-[360px] pb-12 xl:pt-[353px] lg:pt-[210px] lg:pb-10 md:justify-end md:gap-y-36 md:pt-0"
      size="1600"
    >
      <Heading
        className="text-center lg:max-w-[544px] md:max-w-80"
        tag="h1"
        theme="white"
        size="md-new"
      >
        Servbit engineers high-velocity digital products and intelligent systems.
      </Heading>
      <div className="flex w-full items-center justify-between xl:items-end lg:flex-col lg:items-start lg:gap-y-6">
        <p className="max-w-[704px] font-sans text-xl leading-snug font-normal tracking-extra-tight text-gray-new-80 xl:max-w-md lg:max-w-[640px] lg:text-lg md:max-w-80 md:text-[15px]">
          App, Web, Cloud, Automation, and Custom AI engineered from concept to production with
          architectural rigor, infrastructure that scales on demand, and measurable business
          performance.
        </p>
        <div className="flex items-center justify-center gap-x-5 xl:gap-4 xl:pb-2 lg:pb-0 md:w-full md:flex-col">
          <Button
            size="lg-new"
            theme="white-filled"
            className="shrink-0 font-medium md:w-full"
            to={LINKS.contactSales}
          >
            Work with us
          </Button>
          <Button
            size="lg-new"
            theme="outlined"
            className="shrink-0 font-normal md:w-full"
            to={LINKS.careers}
          >
            View open roles at Servbit
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;
