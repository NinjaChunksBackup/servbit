export const CODE_EXAMPLES = {
  agent: `GET https://servbit.in/auth.md

POST https://claimable.servbit.in/v1/agent/identity
Content-Type: application/json

{
  "type": "anonymous",
  "capabilities": ["backend", "data_api", "auth"]
}`,
  cli: `npm i -g servbit@latest
servbit claim create \\
  --service data-api \\
  --service auth \\
  --env-pull

servbit branches list
servbit claim accept --no-open`,
  config: `import { defineConfig } from '@servbit/config/v1';

export default defineConfig({
  auth: true,
  dataApi: true,
});`,
};

export const INTERFACES = [
  {
    id: 'agent',
    label: 'auth.md',
    language: 'http',
    title: 'Discover and register',
    description:
      'Start from one text document, request capabilities, and exchange the identity assertion for short-lived access tokens.',
  },
  {
    id: 'cli',
    label: 'Servbit CLI',
    language: 'bash',
    title: 'Use existing commands',
    description:
      'Create a claimable project, then branch, query, and configure it with the same CLI commands used for regular projects.',
  },
  {
    id: 'config',
    label: 'servbit.ts',
    language: 'typescript',
    title: 'Declare services',
    description:
      'If servbit.ts is present, Servbit requests the declared services and keeps unavailable ones denied until the project is claimed.',
  },
];
