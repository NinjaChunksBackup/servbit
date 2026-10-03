import { describe, expect, it } from 'vitest';

import nextConfig from './next.config';

describe('next.config static asset caching', () => {
  it('marks versioned font and animation assets as immutable', async () => {
    const headers = await nextConfig.headers();
    const immutable = ['/fonts/:slug*', '/animations/:all*', '/brand/:all*'];

    for (const source of immutable) {
      expect(headers.find((h) => h.source === source)?.headers).toContainEqual({
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      });
    }
  });

  it('caches top-level raster and vector assets revalidably', async () => {
    const headers = await nextConfig.headers();
    const match = headers.find((h) => h.source === '/:all*(svg|jpg|png)');

    expect(match.locale).toBe(false);
    expect(match.headers).toContainEqual({
      key: 'Cache-Control',
      value: 'public, max-age=31536000, must-revalidate',
    });
  });

  it('long-caches the homepage at the edge but keeps it revalidable in the browser', async () => {
    const headers = await nextConfig.headers();

    for (const source of ['/', '/home']) {
      expect(headers.find((h) => h.source === source)?.headers).toContainEqual({
        key: 'Cache-Control',
        value: 'max-age=0, s-maxage=31536000',
      });
    }
  });

  it('does not advertise the retired agent-discovery surfaces', async () => {
    const headers = await nextConfig.headers();
    const linkHeaders = headers.flatMap((h) => h.headers).filter((h) => h.key === 'Link');

    expect(linkHeaders).toEqual([]);
  });
});
