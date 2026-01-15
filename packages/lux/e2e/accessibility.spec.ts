import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility tests using axe-core for WCAG AA compliance
 */
test.describe('Accessibility Tests', () => {
  test('lux-button should be accessible', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-button--primary');
    await page.waitForSelector('lux-button');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('lux-card should be accessible', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-card--default');
    await page.waitForSelector('lux-card');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('lux-tabs should be accessible', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-tabs--default');
    await page.waitForSelector('lux-tabs');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
