import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';



test.describe('Cart - Remove product', () => {

  test('user can remove product from cart', async ({ page }) => {

    await page.goto('/cart');

    await page.click('[data-testid="remove-from-cart"]');

    await expect(page.locator('[data-testid="cart-item"]')).toHaveCount(0);

  });

});