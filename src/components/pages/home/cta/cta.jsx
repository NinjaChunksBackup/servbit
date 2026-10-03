import Button from 'components/shared/button';
import Container from 'components/shared/container';

const CTA = () => (
  <section
    className="cta relative flex min-h-105 flex-col bg-[#151617] py-14 safe-paddings xl:min-h-110 xl:py-12 lg:min-h-100 lg:py-9 md:min-h-125 md:pt-[52px] md:pb-6"
    id="contact"
  >
    <Container className="flex flex-1 flex-col" size="1920">
      <h2 className="text-[5rem] leading-none tracking-tighter 2xl:text-[4.5rem] xl:text-[3.5rem] lg:text-[2.75rem] md:text-[2rem]">
        Ready to take your <br /> business online?
      </h2>

      <div className="mt-auto flex items-end justify-between gap-x-14 lg:flex-col lg:items-start lg:gap-y-5 md:gap-y-6">
        <p className="max-w-[860px] text-[32px] leading-tight tracking-tighter xl:max-w-[480px] xl:text-[24px] lg:max-w-[520px] lg:text-[20px] md:text-[18px]">
          From concept to deployment, we build the digital systems that expand your reach and
          profits.
        </p>
        <div className="mb-2 flex items-center gap-5 xl:gap-4 lg:mb-0 md:w-full md:flex-col md:items-stretch md:gap-y-3">
          <Button theme="white-filled" size="new" to="mailto:servbit.in@gmail.com">
            Start Your Project
          </Button>
          <Button
            className="bg-[rgba(255,255,255,0.02)] md:hidden"
            theme="outlined"
            size="new"
            to="#services"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default CTA;
