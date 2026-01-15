import { test, expect } from '@playwright/test';

/**
 * Screenshot tests for visual regression
 * 
 * Note: Developers must review and commit screenshot changes
 * when layout intentionally changes.
 */
test.describe('Screenshot Tests', () => {
  test('lux-button variants', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-button--primary');
    await page.waitForSelector('lux-button');
    
    const button = page.locator('lux-button').first();
    await expect(button).toHaveScreenshot('lux-button-primary.png');
  });

  test('lux-card variants', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-card--default');
    await page.waitForSelector('lux-card');
    
    const card = page.locator('lux-card').first();
    await expect(card).toHaveScreenshot('lux-card-default.png');
  });

  test('lux-tabs', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-tabs--default');
    await page.waitForSelector('lux-tabs');
    
    const tabs = page.locator('lux-tabs').first();
    await expect(tabs).toHaveScreenshot('lux-tabs-default.png');
  });

  test('lux-scope density variations', async ({ page }) => {
    await page.goto('/?path=/story/components-lux-scope--compact');
    await page.waitForSelector('lux-scope');
    
    const scope = page.locator('lux-scope').first();
    await expect(scope).toHaveScreenshot('lux-scope-compact.png');
  });
});
