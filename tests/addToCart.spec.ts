import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000',
  },

  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});

// test.describe('Cart - Add product', () => {

//   test('user can add a product to cart', async ({ page }) => {
//     await page.goto('/products/1');

//     await page.click('[data-testid="add-to-cart"]');

//     await page.goto('/cart');

//     await expect(page.locator('[data-testid="cart-item"]')).toHaveCount(1);
//   });

// });