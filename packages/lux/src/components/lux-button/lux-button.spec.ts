import { newSpecPage } from '@stencil/core/testing';
import { LuxButton } from './lux-button';

/**
 * @experimental
 */
describe('lux-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuxButton],
      html: `<lux-button></lux-button>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button).toBeTruthy();
    if (button) {
      expect(button.classList.contains('lux-button')).toBe(true);
      expect(button.classList.contains('lux-button--primary')).toBe(true);
      expect(button.type).toBe('button');
    }
  });

  it('renders with variant', async () => {
    const page = await newSpecPage({
      components: [LuxButton],
      html: `<lux-button variant="secondary"></lux-button>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button).toBeTruthy();
    if (button) {
      expect(button.classList.contains('lux-button--secondary')).toBe(true);
    }
  });

  it('handles disabled state', async () => {
    const page = await newSpecPage({
      components: [LuxButton],
      html: `<lux-button disabled></lux-button>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const button = page.root?.shadowRoot?.querySelector('button') as HTMLButtonElement;
    expect(button).toBeTruthy();
    if (button) {
      expect(button.hasAttribute('disabled') || button.disabled).toBeTruthy();
      expect(button.classList.contains('lux-button--disabled')).toBe(true);
    }
  });

  it('handles click events', async () => {
    const page = await newSpecPage({
      components: [LuxButton],
      html: `<lux-button></lux-button>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root?.shadowRoot).toBeTruthy();
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button).toBeTruthy();
    if (button) {
      const clickSpy = jest.fn();
      page.doc.addEventListener('luxClick', clickSpy);
      button.click();
      await page.waitForChanges();
    }
  });
});
