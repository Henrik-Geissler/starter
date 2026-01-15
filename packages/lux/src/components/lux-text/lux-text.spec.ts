import { newSpecPage } from '@stencil/core/testing';
import { LuxText } from './lux-text';

/**
 * @experimental
 */
describe('lux-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuxText],
      html: `<lux-text>Test text</lux-text>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const span = page.root?.shadowRoot?.querySelector('span');
    expect(span).toBeTruthy();
    if (span) {
      expect(span.classList.contains('lux-text')).toBe(true);
      expect(span.classList.contains('lux-text--base')).toBe(true);
    }
  });

  it('renders with size', async () => {
    const page = await newSpecPage({
      components: [LuxText],
      html: `<lux-text size="lg"></lux-text>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const span = page.root?.shadowRoot?.querySelector('span');
    expect(span).toBeTruthy();
    if (span) {
      expect(span.classList.contains('lux-text--lg')).toBe(true);
    }
  });
});
