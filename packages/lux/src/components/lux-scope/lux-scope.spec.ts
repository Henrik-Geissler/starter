import { newSpecPage } from '@stencil/core/testing';
import { LuxScope } from './lux-scope';

/**
 * @experimental
 */
describe('lux-scope', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuxScope],
      html: `<lux-scope>Content</lux-scope>`,
    });
    expect(page.root).toBeTruthy();
  });

  it('applies density', async () => {
    const page = await newSpecPage({
      components: [LuxScope],
      html: `<lux-scope density="compact">Content</lux-scope>`,
    });
    expect(page.root).toBeTruthy();
    const div = page.root?.querySelector('div');
    expect(div).toBeTruthy();
    if (div) {
      expect(div.style.getPropertyValue('--lux-density')).toBe('compact');
    }
  });

  it('applies main color', async () => {
    const page = await newSpecPage({
      components: [LuxScope],
      html: `<lux-scope main-color="#ff0000">Content</lux-scope>`,
    });
    expect(page.root).toBeTruthy();
    const div = page.root?.querySelector('div');
    expect(div).toBeTruthy();
    if (div) {
      expect(div.style.getPropertyValue('--lux-main-color')).toBe('#ff0000');
    }
  });
});
