import LINKS from './links';

export default {
  header: [
    {
      text: 'Services',
      sections: [
        {
          title: 'Software & Web Engineering',
          items: [
            {
              title: 'App Development',
              to: '/#services',
              description: 'Native iOS, Android & desktop apps built for speed and user retention.',
            },
            {
              title: 'Web Engineering',
              to: '/#services',
              description:
                'High-conversion web platforms, web apps, and modern digital storefronts.',
            },
            {
              title: 'Cloud & DevOps',
              to: '/#services',
              description:
                'Bulletproof cloud infrastructure, automated CI/CD, and cost optimization.',
            },
          ],
        },
        {
          title: 'Automation & AI',
          items: [
            {
              title: 'Workflow Automation',
              to: '/#services',
              description:
                'System integrations and automated pipelines that eliminate manual tasks.',
            },
            {
              title: 'Custom AI & Agents',
              to: '/#services',
              description:
                'Autonomous agents and practical AI engineered for measurable business utility.',
            },
          ],
        },
      ],
    },
    {
      text: 'Solutions',
      sections: [
        {
          title: 'Business Transformations',
          items: [
            {
              title: 'Take Your Business Online',
              to: '/#solutions',
              description:
                'Complete digital transition from traditional operations to online market dominance.',
            },
            {
              title: 'Scale Reach & Profits',
              to: '/#solutions',
              description:
                'Conversion-engineered digital presence designed to maximize commercial margins.',
            },
            {
              title: 'Legacy Modernization',
              to: '/#solutions',
              description:
                'Replace obsolete, fragile software with high-velocity cloud architecture.',
            },
          ],
        },
        {
          title: 'Work with us',
          variant: 'cards',
          items: [
            {
              title: 'End-to-End Projects',
              to: '/#contact',
              description: 'From concept to production, we own the full delivery.',
              graphic: 'agents',
            },
            {
              title: 'Ongoing Partnership',
              to: '/#contact',
              description: 'Continuous engineering, optimization, and support.',
              graphic: 'platforms',
            },
          ],
        },
      ],
    },
    {
      text: 'About',
      to: LINKS.aboutUs,
    },
    {
      text: 'Contact',
      to: '/#contact',
    },
  ],
  footer: [
    {
      heading: 'Company',
      items: [
        { text: 'About', to: LINKS.aboutUs },
        { text: 'Careers', to: LINKS.careers },
        { text: 'Contact Sales', to: LINKS.contactSales },
      ],
    },
    {
      heading: 'Services',
      items: [
        { text: 'App Development', to: '/#services' },
        { text: 'Web Engineering', to: '/#services' },
        { text: 'Cloud & DevOps', to: '/#services' },
        { text: 'Workflow Automation', to: '/#services' },
        { text: 'Custom AI & Agents', to: '/#services' },
      ],
    },
    {
      heading: 'Connect',
      items: [
        { text: 'LinkedIn', to: LINKS.linkedin, icon: 'linkedin-icon' },
        { text: 'X.com', to: LINKS.twitter, icon: 'x-icon' },
        { text: 'YouTube', to: LINKS.youtube, icon: 'youtube-icon' },
      ],
    },
  ],
};
