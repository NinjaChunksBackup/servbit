import { describe, it, expect, beforeAll } from 'vitest';

beforeAll(() => {
  process.env.NEXT_PUBLIC_DEFAULT_SITE_URL = 'https://servbit.in';
});

describe('generateOrganizationSchema', () => {
  it('returns a complete Organization node (no postal address)', async () => {
    const { generateOrganizationSchema } = await import('./schema');
    const s = generateOrganizationSchema();

    expect(s['@context']).toBe('https://schema.org');
    expect(s['@type']).toBe('Organization');
    expect(s.name).toBe('Servbit');
    expect(s.alternateName).toBe('Servbit Digital Engineering');
    expect(s.legalName).toBe('Servbit LLC');
    expect(s.url).toBe('https://servbit.in');
    expect(s.description).toBeTruthy();
    expect(s.logo).toMatch(/^https?:\/\//);
    expect(Array.isArray(s.sameAs)).toBe(true);
    expect(s.sameAs.length).toBeGreaterThanOrEqual(3);
    expect(s.contactPoint?.['@type']).toBe('ContactPoint');
    expect(s.contactPoint?.contactType).toBeTruthy();
    // Product decision: no PostalAddress
    expect(s.address).toBeUndefined();
  });

  it('produces JSON-serialisable output', async () => {
    const { generateOrganizationSchema } = await import('./schema');
    expect(() => JSON.stringify(generateOrganizationSchema())).not.toThrow();
  });
});
