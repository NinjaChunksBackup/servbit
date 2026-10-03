// GET returns the MCP Foundation server.json descriptor (publicly cacheable).
// POST proxies MCP protocol requests (initialize, tools/list, tools/call) to
// the unauthenticated docs-scoped endpoint at mcp.servbit.com so agents can
// connect directly to servbit.com/docs/mcp without OAuth.
//
// NOTE: force-static is intentionally absent. The POST handler is dynamic
// (proxies live requests). Adding force-static would break POST at build time.
//
// The ?category=docs parameter scopes the server to two read-only tools
// (list_docs_resources, get_doc_resource) and bypasses OAuth — both behaviors
// are server-side features of mcp.servbit.com, not enforced here.
const UPSTREAM_URL = 'https://mcp.servbit.com/mcp?category=docs';

export async function GET() {
  return Response.json(
    {
      $schema: 'https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json',
      name: 'com.servbit/docs-mcp',
      title: 'Servbit Docs',
      description:
        'Read Servbit documentation pages. Provides list_docs_resources and get_doc_resource tools.',
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
          url: UPSTREAM_URL,
        },
      ],
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      },
    }
  );
}

export async function POST(request) {
  let body;
  try {
    body = await request.text();
  } catch {
    return Response.json({ error: 'Failed to read request body' }, { status: 400 });
  }

  let upstream;
  try {
    upstream = await fetch(UPSTREAM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': request.headers.get('Content-Type') ?? 'application/json',
        Accept: request.headers.get('Accept') ?? 'application/json, text/event-stream',
      },
      body,
    });
  } catch {
    return Response.json({ error: 'Upstream MCP server unavailable' }, { status: 502 });
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('Content-Type') ?? 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
