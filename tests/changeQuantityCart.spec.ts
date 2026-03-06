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

// test.describe('Cart - Update quantity', () => {

//   test('user can update product quantity', async ({ page }) => {

//     await page.goto('/cart');

//     const quantityInput = page.locator('[data-testid="quantity-input"]').first();

//     await quantityInput.fill('3');

//     await expect(quantityInput).toHaveValue('3');

//   });

// });