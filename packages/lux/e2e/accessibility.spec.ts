import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

/**
 * Accessibility tests using axe-core for WCAG AA compliance
 */
test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await injectAxe(page);
  });

  test('lux-button should be accessible', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-button--primary');
    await page.waitForSelector('lux-button');
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });

  test('lux-card should be accessible', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-card--default');
    await page.waitForSelector('lux-card');
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });

  test('lux-tabs should be accessible', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-tabs--default');
    await page.waitForSelector('lux-tabs');
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });
});
