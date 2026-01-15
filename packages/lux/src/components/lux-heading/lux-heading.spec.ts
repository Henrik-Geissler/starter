import { newSpecPage } from '@stencil/core/testing';
import { LuxHeading } from './lux-heading';

/**
 * @experimental
 */
describe('lux-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuxHeading],
      html: `<lux-heading level="1">Heading</lux-heading>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const h1 = page.root?.shadowRoot?.querySelector('h1');
    expect(h1).toBeTruthy();
    if (h1) {
      expect(h1.classList.contains('lux-heading--level-1')).toBe(true);
    }
    expect(page.root?.textContent).toContain('Heading');
  });

  it('renders with different levels', async () => {
    const page = await newSpecPage({
      components: [LuxHeading],
      html: `<lux-heading level="2">Subheading</lux-heading>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const h2 = page.root?.shadowRoot?.querySelector('h2');
    expect(h2).toBeTruthy();
    if (h2) {
      expect(h2.classList.contains('lux-heading--level-2')).toBe(true);
    }
  });
});
