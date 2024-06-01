import { test, expect } from '@playwright/test';

test('Фильтрация с городами', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.waitForSelector('.cities__card');

  const cityLinks = await page.locator('.locations__item-link').all();

  for (const cityLink of cityLinks) {
    await cityLink.click();
    const currentCity = await cityLink.textContent();

    await page.waitForSelector('.cities__card');

    const selectedCity = (await page.locator('.places__found').textContent())?.split(' ').pop();

    expect(currentCity).toBe(selectedCity);
  }
});
