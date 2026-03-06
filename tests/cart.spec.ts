import { test, expect } from '@playwright/test';


test('panier avec produit', async ({ page, browser }) => {
await browser.newContext({
  storageState: {
    cookies: [],
    origins: [
      {
          localStorage: [
              {
                  name: 'cart',
                  value: JSON.stringify([
                      { id: 1, name: 'Produit test', price: 10, quantity: 1 }
                  ])
              }
          ],
          origin: 'http://localhost:3000'
      }
    ]
  }
});
 
  await page.goto('/');
   await page.pause();
  await page.goto('/cart');
  await page.pause();
    await expect(page.locator('[data-testid="cart-item"]')).toHaveCount(1);
    await page.pause();

  
});