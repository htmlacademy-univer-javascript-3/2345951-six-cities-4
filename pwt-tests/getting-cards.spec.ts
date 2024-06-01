import { test, expect } from '@playwright/test';

test('Загрузка карточек с сервера', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await page.waitForResponse((resp) => resp.url().includes('/six-cities/offers') && resp.status() === 200);

  await page.locator('.cities__card').first().waitFor();

  const cardElements = await page.locator('.cities__card').all();

  expect(cardElements.length).toBeGreaterThan(0);
});
