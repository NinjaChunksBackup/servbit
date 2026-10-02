import { describe, expect, it } from 'vitest';

import MENUS from './menus';

describe('Services navigation', () => {
  it.each([
    ['App Development', '#services'],
    ['Web Engineering', '#services'],
    ['Cloud & DevOps', '#services'],
    ['Workflow Automation', '#services'],
    ['Custom AI & Agents', '#services'],
  ])('links %s to its services anchor', (title, path) => {
    const services = MENUS.header.find(({ text }) => text === 'Services');
    const items = services.sections.flatMap(({ items }) => items);

    expect(items.find((item) => item.title === title)?.to).toBe(path);
  });
});
