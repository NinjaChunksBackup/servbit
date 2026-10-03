import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import SEO_DATA from 'constants/seo-data';

import getMetadata from './get-metadata';

describe('getMetadata', () => {
  const originalSiteUrl = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
  const originalVercelEnv = process.env.VERCEL_ENV;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_DEFAULT_SITE_URL = 'https://servbit.in';
    delete process.env.VERCEL_ENV;
  });

  afterEach(() => {
    if (originalSiteUrl === undefined) {
      delete process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_DEFAULT_SITE_URL = originalSiteUrl;
    }

    if (originalVercelEnv === undefined) {
      delete process.env.VERCEL_ENV;
    } else {
      process.env.VERCEL_ENV = originalVercelEnv;
    }
  });

  it('builds the canonical and og:url from the site URL plus pathname', () => {
    const metadata = getMetadata(SEO_DATA.aboutUs);

    expect(metadata.alternates.canonical).toBe('https://servbit.in/about-us');
    expect(metadata.openGraph.url).toBe('https://servbit.in/about-us');
  });

  it('falls back to the index title and description', () => {
    const metadata = getMetadata({ pathname: '/somewhere' });

    expect(metadata.title).toBe(SEO_DATA.index.title);
    expect(metadata.description).toBe(SEO_DATA.index.description);
  });

  it('emits noindex robots only when asked', () => {
    expect(getMetadata(SEO_DATA.aboutUs).robots).toBeNull();
    expect(getMetadata({ ...SEO_DATA.aboutUs, robotsNoindex: 'noindex' }).robots).toEqual({
      index: false,
    });
  });

  it('deduplicates and trims keywords', () => {
    const metadata = getMetadata({
      pathname: '/',
      keywords: 'cloud, automation , cloud,ai',
    });

    expect(metadata.keywords).toBe('cloud, automation, ai');
  });

  it('uses the preview branch URL as the canonical base on Vercel previews', () => {
    process.env.VERCEL_ENV = 'preview';
    process.env.VERCEL_BRANCH_URL = 'servbit-pr-42.example.vercel.app';

    const metadata = getMetadata(SEO_DATA.contactSales);

    expect(metadata.metadataBase.host).toBe('servbit-pr-42.example.vercel.app');
    expect(metadata.alternates.canonical).toBe(
      'https://servbit-pr-42.example.vercel.app/contact-sales'
    );
  });

  it('accepts an absolute external canonical and keeps og:url on Servbit', () => {
    const metadata = getMetadata({
      pathname: '/about-us',
      canonical: 'https://servbit.in/about',
    });

    expect(metadata.alternates.canonical).toBe('https://servbit.in/about');
    expect(metadata.openGraph.url).toBe('https://servbit.in/about-us');
  });

  it('rejects a relative canonical', () => {
    expect(() => getMetadata({ pathname: '/', canonical: '/elsewhere' })).toThrow(
      'canonical must be an absolute HTTP(S) URL, got "/elsewhere"'
    );
  });

  it('rejects an empty canonical', () => {
    expect(() => getMetadata({ pathname: '/', canonical: '' })).toThrow(
      'canonical must be an absolute HTTP(S) URL, got ""'
    );
  });

  it('rejects a non-HTTP canonical', () => {
    expect(() => getMetadata({ pathname: '/', canonical: 'ftp://example.com/page' })).toThrow(
      'canonical must be an absolute HTTP(S) URL, got "ftp://example.com/page"'
    );
  });

  it('keeps the absolute image path when one is supplied', () => {
    const metadata = getMetadata({
      pathname: '/',
      imagePath: 'https://cdn.example.com/card.jpg',
    });

    expect(metadata.openGraph.images[0].url).toBe('https://cdn.example.com/card.jpg');
  });
});
