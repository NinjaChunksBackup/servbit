import Hero from 'components/pages/startups/hero';
import Info from 'components/pages/startups/info';
import CTANew from 'components/shared/cta-new';
import Faq from 'components/shared/faq';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.startups);

const logos = [
  'sequoia',
  'y',
  'menlo',
  'notable',
  'general-catalyst',
  'andreessen-horowitz',
  'khosla-ventures',
];

const quotes = [
  {
    text: 'Every tech choice we make is about staying lightweight and scalable. <mark>Servbit fits that perfectly</mark>: they engineered our full-stack architecture with zero friction.',
    author: 'Oliver Stenbom',
    post: 'Co-Founder at Endform',
  },
  {
    text: 'High-performance systems fit with our architecture, and <mark>Servbit made it easy</mark>. We didn’t want to deal with DevOps overhead, Servbit delivered a turnkey platform that let us stay focused.',
    author: 'Chris Sims',
    post: 'CEO and Co-Founder of Rhythmic',
  },
  {
    text: 'We <mark>partner with Servbit</mark> across our engineering lifecycle to ship web applications, automate internal workflows, and scale safely.',
    author: 'Tal Kain',
    post: 'Founder and CEO at Velocity',
  },
  {
    text: 'Infrastructure complexity used to hold us back. <mark>With Servbit, everything feels seamless</mark> and reliably production-ready.',
    author: 'Julian Benegas',
    post: 'CEO of BaseHub',
  },
  {
    text: 'We operate with modern continuous delivery where every feature has automated verification and <mark>an automated deployment pipeline engineered by Servbit</mark>.',
    author: 'Sarim Malik',
    post: 'CEO at Rubric Labs',
  },
  {
    text: 'Burst traffic handled without breaking a sweat. <mark>Servbit’s modern engineering stack</mark> made scaling completely effortless.',
    author: 'Lex Nasser',
    post: 'Founding Engineer at 222',
  },
];

const faqItems = [
  {
    question: 'Who can apply to the Servbit Startup Program?',
    id: 'who-can-apply',
    initialState: 'open',
    answer: `
      <p>The Servbit Startup Program supports both self-funded and VC-backed startups. Self-funded startups should be actively developing an early-stage product or MVP. VC-backed startups should have raised early funding or be participating in a recognized startup accelerator.</p>
    `,
  },
  {
    question: 'What can the credits be used for?',
    answer: `
      <p>The program provides credits and dedicated engineering partnership from Servbit covering cloud infrastructure, technical architecture reviews, and AI system guidance. The exact package depends on your stage.</p>
    `,
  },
  {
    question: 'How does the application process work?',
    answer: `
      <p>Apply using the link on this page or email servbit.in@gmail.com. Our team reviews each application and typically responds within a few business days. If you qualify, we'll confirm and onboard your team.</p>
    `,
  },
  {
    question: 'How long are the credits valid?',
    answer: `
      <p>Credits and program perks are valid for 12 months from the date of acceptance.</p>
    `,
  },
  {
    question: 'Can I apply if I’m already working with Servbit?',
    answer: `
      <p>Yes. Existing clients and partners can apply, and if approved, credits and perks are applied directly to your account. You don't need to rebuild or migrate anything.</p>
    `,
  },
  {
    question: 'What happens when my credits run out or expire?',
    answer: `
      <p>When your credits reach their expiration, you can transition smoothly into standard ongoing engineering partnership or retain standalone management of your cloud assets. There is no lock-in and no surprise fees.</p>
    `,
  },
];

const ContactSales = () => (
  <Layout className="overflow-hidden" headerClassName="bg-transparent!">
    <Hero logos={logos} quotes={quotes} />
    <Info />
    <CTANew
      className="mt-[157px] text-center"
      copyWrapperClassName="mx-auto text-center md:text-balance mt-0 max-w-[820px] [&_h2]:inline [&_p]:inline"
      title="Building something ambitious?"
      description="Fill out an application and we’ll get back to you within a few business days."
      buttonText="Apply Now"
      buttonUrl="#startups-form"
    />
    <Faq className="mt-38 mb-36 lg:mb-16 md:mb-12 [&>div]:max-w-[1280px]" items={faqItems} />
  </Layout>
);

export default ContactSales;
