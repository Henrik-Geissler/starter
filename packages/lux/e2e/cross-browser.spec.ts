import { test, expect } from '@playwright/test';

/**
 * Cross-browser functionality tests
 */
test.describe('Cross-Browser Tests', () => {
  test('lux-button click event', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-button--primary');
    await page.waitForSelector('lux-button');

    const button = page.locator('lux-button').first();
    await button.click();

    // Verify button is clickable
    await expect(button).toBeVisible();
  });

  test('lux-tabs navigation', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-tabs--default');
    await page.waitForSelector('lux-tabs');

    const tabs = page.locator('lux-tabs').first();
    const tabButtons = tabs.locator('button[role="tab"]');

    // Click second tab
    await tabButtons.nth(1).click();

    // Verify tab is active
    await expect(tabButtons.nth(1)).toHaveAttribute('aria-selected', 'true');
  });

  test('lux-scope config propagation', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-scope--compact');
    await page.waitForSelector('lux-scope');

    const scope = page.locator('lux-scope').first();
    const computedStyle = await scope.evaluate(el => {
      return window.getComputedStyle(el).getPropertyValue('--lux-density');
    });

    expect(computedStyle.trim()).toBe('compact');
  });
});
