import LINKS from './links';

export const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg?updated=2026-05-27';

export default {
  index: {
    title: 'Servbit — App, Web, Cloud, Automation & AI Execution',
    description:
      'Any requirements related to app, web, cloud, automation, and AI — we serve it! We completely take businesses online, increase their reach and profits factually, brutally honestly, and professionally.',
    pathname: '',
  },
  about: {
    title: 'About Us — Servbit',
    description:
      'The Servbit team consists of systems architects, cloud engineers, and full-stack builders on a mission to deliver resilient digital platforms for ambitious companies.',
    pathname: '',
  },
  ai: {
    title: 'AI Platform and Intelligent Backends — Servbit',
    description:
      'Build AI agents faster with Servbit: serverless database, Auth, Functions, Storage, and AI Gateway, engineered for autonomous scale.',
    imagePath: '/images/social-previews/ai.jpg',
    pathname: LINKS.ai,
  },
  aiGateway: {
    title: 'AI Gateway — One API for frontier models | Servbit',
    description:
      'Call frontier and open-weight models from your Servbit backend with one credential, unified billing, and zero markup.',
    pathname: LINKS.aiGateway,
    markdownPath: `${LINKS.aiGateway}.md`,
  },
  lakebase: {
    title: 'Servbit Database — Database for apps and agents | Servbit',
    description:
      'Build apps and agents on Servbit Database: standard Postgres with instant branching, point-in-time restore, autoscaling, and scale to zero.',
    pathname: LINKS.lakebase,
    markdownPath: `${LINKS.lakebase}.md`,
  },
  aboutUs: {
    title: 'About Us — Servbit',
    description:
      'The Servbit team consists of systems architects, cloud engineers, and full-stack builders on a mission to deliver resilient digital platforms for ambitious companies.',
    pathname: LINKS.aboutUs,
  },
  blog: {
    title: 'Our Blog — Servbit',
    description:
      'Learn about Servbit and how it can help you build better backends for apps and agents by reading our blog posts.',
    imagePath: '/images/social-previews/blog.jpg',
    pathname: LINKS.blog,
  },
  guides: {
    title: 'Guides — Servbit',
    description: 'Learn how to build and scale with Servbit using our guides.',
    pathname: LINKS.guides,
  },
  faqs: {
    title: 'FAQs — Servbit',
    description: 'Frequently asked questions about Servbit.',
    pathname: LINKS.faqs,
  },
  caseStudies: {
    title: 'Case Studies — Servbit',
    description: 'Discover how modern companies scale and succeed with Servbit.',
    pathname: LINKS.caseStudies,
    imagePath: '/images/social-previews/case-studies.jpg',
  },
  claimableNeon: {
    title: 'Instant Sandbox Environments — Servbit',
    description:
      'Let agents provision a temporary Servbit project (Servbit Database, Data API, and Managed Auth) before creating a full account.',
    pathname: LINKS.claimableNeon,
  },
  cli: {
    title: 'Your Servbit workflow lives in the terminal',
    description:
      'The Servbit CLI brings full platform control and branch management to your terminal.',
    pathname: LINKS.cli,
    imagePath: '/images/social-previews/cli.jpg',
  },
  functions: {
    title: 'Servbit Functions — Long-running serverless functions',
    description:
      'Run long-running Node.js functions next to Servbit Database, with branch-aware data and service credentials injected automatically.',
    pathname: LINKS.functions,
    markdownPath: `${LINKS.functions}.md`,
  },
  auth: {
    title: 'Servbit Auth — Authentication that branches with your backend',
    description:
      'Authentication built into Servbit. Keep users, sessions, and auth configuration in Postgres, and test real login flows in isolated database branches.',
    pathname: LINKS.authPage,
    markdownPath: '/md/auth-page.md',
  },
  objectStorage: {
    title: 'Servbit Object Storage — S3-compatible storage that branches',
    description:
      'S3-compatible object storage built into the Servbit backend. Branch files alongside Postgres, use your existing S3 tools, and authenticate with a Servbit credential.',
    pathname: LINKS.objectStorage,
    markdownPath: `${LINKS.objectStorage}.md`,
  },
  contactSales: {
    title: 'Contact Sales — Servbit',
    description:
      'Interested in learning more about our plans, pricing, and capabilities? Contact our solutions team.',
    pathname: LINKS.contactSales,
  },
  enterprise: {
    title: 'Servbit for Enterprise — Mission-Critical Scale',
    description:
      'Partner with Servbit for improved scalability, reliability, and engineering efficiency. For developers and AI Agents.',
    pathname: LINKS.enterprise,
    imagePath: '/images/social-previews/enterprise.jpg',
  },
  migration: {
    title: 'Database Migration — Servbit',
    description: 'Learn how to migrate your Postgres database to Servbit.',
    pathname: LINKS.migration,
    imagePath: '/images/social-previews/migration.jpg',
  },
  useCases: {
    title: 'Use Cases — Servbit',
    description:
      'Explore how teams use Servbit to support branching databases, CI pipelines, preview environments, and production workloads.',
    pathname: LINKS.useCases,
  },
  partners: {
    title: 'Accelerate your business with Servbit partnership — Servbit',
    description: 'Bring familiar, reliable and scalable cloud infrastructure to your customers.',
    imagePath: '/images/social-previews/partners.jpg',
    pathname: LINKS.partners,
  },
  pingThing: {
    robotsNoindex: 'noindex',
  },
  pricing: {
    title: 'Pricing — Servbit',
    description:
      'Servbit delivers serverless, scalable backend primitives with flexible usage and volume-based plans.',
    imagePath: '/images/social-previews/pricing.jpg',
    pathname: LINKS.pricing,
  },
  report: {
    title: 'Impact of Postgres restores survey',
    description:
      'We asked 50 developers managing production Postgres about recovery times and their business impact.',
    pathname: LINKS.report,
    imagePath: '/images/social-previews/report.jpg',
  },
  variable: {
    title: 'Dynamically scale your Postgres database — Servbit',
    description:
      'Discover how Servbit dynamically scales Postgres compute resources for optimal performance during peak traffic without overpaying.',
    imagePath: '/images/social-previews/variable.jpg',
    pathname: LINKS.variable,
  },
  costFleets: {
    title: 'Servbit for platforms: Cost estimator',
    description:
      'Run thousands of Postgres databases for a fraction of the cost with Servbit. Great for building your free tier.',
    imagePath: '/images/social-previews/cost-fleets.jpg',
    pathname: LINKS.costFleets,
  },
  branching: {
    title: 'Database Branching Workflows — Servbit',
    description:
      'A new paradigm for managing Postgres. Instantly create, test, preview, and roll back environments with Servbit’s powerful database branching.',
    imagePath: '/images/social-previews/branching.jpg',
    pathname: LINKS.branching,
    type: 'article',
  },
  platforms: {
    title: 'Embedded Postgres for Platforms — Servbit',
    description: 'Offer Postgres to your users with Servbit',
    pathname: LINKS.platforms,
    type: 'article',
    imagePath: '/images/social-previews/platforms.jpg',
  },
  security: {
    title: 'Security — Servbit',
    description:
      "Discover Servbit's security & compliance standards, including SOC 2, GDPR, and HIPAA, with encryption and access controls to protect your data.",
    imagePath: '/images/social-previews/security.jpg',
    pathname: LINKS.security,
  },
  startups: {
    title: 'Servbit Credits for Startups',
    description:
      'Apply to the Servbit Startup Program and get credits and architecture support for venture-backed companies and startup accelerators.',
    pathname: LINKS.startups,
  },
  tools: {
    title: 'Postgres upgrade and migration tools — Servbit',
    description:
      'Tools to assess major version upgrades, catch compatibility issues, and find the right migration path for your database.',
    pathname: LINKS.tools,
  },
  autoscalingReport: {
    title: 'Compute Autoscaling Report',
    description: 'A deep-dive into the numbers behind Servbit Autoscaling.',
    imagePath: '/images/social-previews/compute-autoscaling-report.jpg',
    pathname: LINKS.autoscalingReport,
  },
  error: {
    title: 'Page Is Broken — Servbit',
  },
  404: {
    title: 'Page Not Found — Servbit',
  },
};

export const getBlogCategoryDescription = (category) => {
  switch (category) {
    case 'company':
      return 'Stay updated on the latest Servbit company news and partnership announcements. Explore our blog posts for valuable insights and stay ahead in the world of modern engineering.';
    case 'engineering':
      return 'Dive into the technical depths of Servbit architecture. Optimize performance, scalability, and reliability. Explore our cutting-edge approach.';
    case 'community':
      return 'Join the vibrant developer and engineering community. Engage in discussions, tutorials, and success stories. Connect with developers and industry experts.';
    default:
      return 'Learn about Servbit and how it can help you build better with serverless infrastructure by reading our blog posts.';
  }
};
