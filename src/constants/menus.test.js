import { describe, expect, it } from 'vitest';

import MENUS from './menus';

// Every navigation target must resolve from any page, so section links are
// root-relative ('/#services'), not bare fragments ('#services').
const SECTION_ANCHORS = ['/#services', '/#solutions', '/#contact'];

describe('navigation targets', () => {
  it.each([
    ['App Development', '/#services'],
    ['Web Engineering', '/#services'],
    ['Cloud & DevOps', '/#services'],
    ['Workflow Automation', '/#services'],
    ['Custom AI & Agents', '/#services'],
  ])('links %s to its services anchor', (title, path) => {
    const services = MENUS.header.find(({ text }) => text === 'Services');
    const items = services.sections.flatMap(({ items }) => items);

    expect(items.find((item) => item.title === title)?.to).toBe(path);
  });

  it('never uses a bare fragment in the header or footer menus', () => {
    const targets = [
      ...MENUS.header.flatMap((item) => {
        const own = item.to ? [item.to] : [];
        const nested = (item.sections || []).flatMap((section) =>
          (section.items || []).map((i) => i.to)
        );
        return [...own, ...nested];
      }),
      ...MENUS.footer.flatMap(({ items }) => items.map((i) => i.to)),
    ].filter(Boolean);

    const bare = targets.filter((t) => t.startsWith('#'));

    expect(bare).toEqual([]);
    expect(targets.filter((t) => SECTION_ANCHORS.includes(t)).length).toBeGreaterThan(0);
  });

  it('keeps every footer link on a real route or an absolute URL', () => {
    for (const { heading, items } of MENUS.footer) {
      for (const { to } of items) {
        if (/^https?:|^mailto:/.test(to)) continue;
        expect(to, `${heading} -> ${to}`).toMatch(/^\/|^#\//);
      }
    }
  });
});
