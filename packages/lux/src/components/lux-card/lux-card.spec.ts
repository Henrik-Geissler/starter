import { newSpecPage } from '@stencil/core/testing';
import { LuxCard } from './lux-card';

/**
 * @experimental
 */
describe('lux-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuxCard],
      html: `<lux-card>Card content</lux-card>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const card = page.root?.shadowRoot?.querySelector('.lux-card');
    expect(card).toBeTruthy();
    if (card) {
      expect(card.classList.contains('lux-card--default')).toBe(true);
      expect(card.querySelector('.lux-card__content')).toBeTruthy();
    }
  });
});
