const authPageContent = {
  slug: 'auth',
  pageLabel: 'Auth',
  backendServicesTitle: 'Your auth branches with everything else.',
  faqItems: [
    {
      question: 'What is Servbit Auth?',
      answer:
        '<p>Managed authentication built into the Servbit backend. Users, sessions, and OAuth config live in your database, in the <code>servbit_auth</code> schema, so you can query them with SQL and pair them with RLS. There is no auth server to run. Configure it in the Console, then use the client or server SDK in your app.</p>',
      initialState: 'open',
    },
    {
      question: 'Why would auth need to branch?',
      answer:
        '<p>Branching gives each preview its own isolated copy of users, sessions, and auth configuration alongside your application data. Test sign-up, login, OAuth, password resets, and permission changes without affecting production or other branches.</p>',
    },
    {
      question: 'What happens to sessions when I branch?',
      answer:
        '<p>Session records are copied with the database, but browser cookies remain scoped to their original domain. You need to sign in again on the preview environment. Each branch has its own Auth API URL, and tokens issued in one branch are not valid in another.</p>',
    },
    {
      question: 'How does Servbit Auth compare to self-hosted auth?',
      answer:
        '<p>Servbit Auth provides instant setup, zero maintenance, and full branching isolation integrated with database branching. Self-hosting requires maintaining separate auth containers, migrations, and infrastructure that cannot branch with your preview environments.</p>',
    },
    {
      question: 'Can my coding agent set this up?',
      answer:
        '<p>Yes. Use the setup instructions in the docs to add Servbit Auth to your app. Your agent can enable auth, configure the SDK and environment variables, and test sign-up and login on an isolated branch using test credentials.</p>',
    },
    {
      question: 'How does pricing work?',
      answer:
        '<p>Servbit Auth is included in Servbit plans, with usage measured in monthly active users (MAU). An MAU is a unique user who authenticates at least once during the monthly billing period. See <a href="/pricing">Servbit pricing</a> for the allowances in each plan.</p>',
    },
  ],
  hero: {
    label: 'Managed Auth for Servbit Platform',
    title: 'Authentication that branches, managed by Servbit',
    titleLines: ['Authentication that branches,', 'managed by Servbit'],
    illustrationDescription:
      'Sign-up and password recovery interfaces connected to user records in the Servbit Database.',
    primaryAction: {
      label: 'Start building',
      linkKey: 'signup',
    },
    secondaryAction: {
      label: 'Read the docs',
      linkKey: 'authOverview',
    },
  },
  benefits: {
    title: 'Test real login flows.',
    highlightedTitle:
      'When you deploy a Servbit branch, auth branches too, so your previews fully reflect production.',
    items: [
      {
        id: 'foundation',
        label: 'Foundation',
        title: 'Modern Auth Architecture',
        description:
          'A modern authentication foundation your team (and agent) already knows, plus branching.',
        badges: [
          {
            id: 'servbit-auth',
            label: 'Servbit Auth',
          },
          {
            id: 'familiar-apis',
            label: 'Familiar APIs',
          },
          {
            id: 'open-source',
            label: 'Open source',
          },
        ],
      },
      {
        id: 'managed',
        label: 'Managed',
        title: 'Managed by Servbit',
        description:
          'Servbit operates the auth layer for you, so you can ship authentication without provisioning, maintaining, or scaling separate infrastructure.',
        badges: [
          {
            id: 'no-infrastructure',
            label: 'No infrastructure',
          },
          {
            id: 'built-in-auth',
            label: 'Built-in auth',
          },
        ],
      },
      {
        id: 'sdks',
        label: 'SDKs',
        title: 'Client and server SDKs',
        description:
          'Use client and server SDKs to add sign-in, sessions, OAuth, and account flows without wiring everything together yourself.',
        badges: [
          {
            id: 'client-server',
            label: 'Client + server',
          },
          {
            id: 'sign-in-sessions',
            label: 'Sign-in & sessions',
          },
        ],
      },
    ],
  },
  identity: {
    label: 'Backend compute',
    title: 'Users, sessions, and auth live in Postgres.',
    highlightedTitle:
      'Keep identity data and auth configuration right in your backend, not on an external service.',
    inspectAuth: {
      title: 'Inspect auth with SQL.',
      descriptionBeforeCode: 'The',
      code: 'servbit_auth',
      descriptionAfterCode:
        'schema gives teams a concrete place to inspect auth state and connect identity to RLS-based access rules.',
    },
    identityData: {
      title: 'Keep identity with your data.',
      description:
        'Keep users and sessions close to application data without syncing identity from another provider.',
    },
  },
  branching: {
    label: 'Branches with your data',
    title: 'Build previews you can actually log into',
    description:
      "Sign up, log in, reset a password, complete OAuth. When you're done testing, delete the branch.",
    diagramAlt:
      'A production branch forks a preview branch with its own users, auth, and sessions. A preview user is verified and their session becomes active. A separate staging branch is deleted after its tests pass.',
    caption: 'Deploy one Servbit branch per preview',
    capabilities: [
      {
        id: 'sign-up',
        label: 'Sign up',
      },
      {
        id: 'login',
        label: 'Login',
      },
      {
        id: 'oauth',
        label: 'OAuth',
      },
      {
        id: 'password-reset',
        label: 'Password reset',
      },
      {
        id: 'rls',
        label: 'RLS',
      },
    ],
  },
  setupSteps: {
    title: 'Ask your coding agent to deploy and configure Servbit Auth.',
    highlightedTitle: 'Deploy a preview branch and start testing.',
    items: [
      {
        id: 'enable',
        title: 'Enable',
        description:
          'Turn on Servbit Auth on the Servbit branch, from the prompt, the CLI, or the Console.',
      },
      {
        id: 'configure',
        title: 'Configure',
        description: 'Add Google OAuth, email and password, trusted domains on that branch.',
      },
      {
        id: 'wire-your-app',
        title: 'Wire your app',
        description: 'The agent installs the SDK, env vars, and sign-in routes for your framework.',
      },
      {
        id: 'preview',
        title: 'Preview',
        description:
          'A child branch gets its own users, sessions, and auth URL. Test real logins, then delete it.',
      },
    ],
  },
};

module.exports = { authPageContent };
