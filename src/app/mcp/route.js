export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    $schema: 'https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json',
    name: 'com.servbit/mcp',
    title: 'Servbit',
    description: 'Official Servbit MCP server for managing Servbit projects and cloud resources.',
    repository: {
      url: 'https://github.com/servbit',
      source: 'github',
      subfolder: 'landing',
    },
    version: '1.0.0',
    websiteUrl: 'https://servbit.com/docs/ai/servbit-mcp-server',
    icons: [
      {
        src: 'https://servbit.com/brand/servbit-logo-light-color.svg',
        mimeType: 'image/svg+xml',
        sizes: ['any'],
        theme: 'light',
      },
      {
        src: 'https://servbit.com/brand/servbit-logo-dark-color.svg',
        mimeType: 'image/svg+xml',
        sizes: ['any'],
        theme: 'dark',
      },
    ],
    remotes: [
      {
        type: 'streamable-http',
        url: 'https://mcp.servbit.com/mcp',
        headers: [
          {
            name: 'Authorization',
            description: 'Optional Bearer token with a Servbit API key.',
            isSecret: true,
          },
          {
            name: 'x-read-only',
            description: 'Optional header to enable read-only mode for tool filtering.',
            format: 'boolean',
            default: 'false',
          },
        ],
      },
    ],
  });
}
