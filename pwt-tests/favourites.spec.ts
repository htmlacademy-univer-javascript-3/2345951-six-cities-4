import { test, expect } from '@playwright/test';

test('Перенаправление на авторизацию', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.goto('http://localhost:5173/favourites');
  await page.waitForURL('http://localhost:5173/login');
});

test('Избранное', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.waitForSelector('.cities__card');
  await page.getByText('Sign in').click();

  await page.fill('input[name="email"]', 'alex.pushkin@mail.ru');
  await page.fill('input[name="password"]', 'CopperRider1703');
  await page.click('button[type="submit"]');

  //Проверка наличия счетчика избранных предложений
  const favoriteCountText = await page.locator('.header__favorite-count').textContent();
  const favoriteCount = parseInt(favoriteCountText || '0', 10);

  expect(favoriteCount).toBeGreaterThanOrEqual(0);

  await page.locator('.header__favorite-count').click();

  await page.waitForURL('**/favourites');

  const favoritePageText = await page.locator('.favorites__title').textContent();
  if (favoriteCount === 0) {
    expect(favoritePageText).toBe('There will be your favourites');
  } else {
    expect(favoritePageText).toBe('Saved listing');
  }

  //Добавление в избранные предложения и проверка изменения счетчика
  await page.goto('http://localhost:5173');
  await page.waitForSelector('.cities__card');

  await page.locator('.place-card__bookmark-icon').first().click();

  const favoriteCountTextAfter = await page.locator('.header__favorite-count').textContent();

  const favoriteCountAfter = parseInt(favoriteCountTextAfter || '0', 10);

  expect(favoriteCountAfter).toBeGreaterThan(favoriteCount);

  await page.locator('.header__favorite-count').click();

  const favoritePageTextAfter = await page.locator('.favorites__title').textContent();
  expect(favoritePageTextAfter).toBe('Saved listing');

  //Удаление из избранных предложения и проверка счетчика
  await page.locator('.place-card__bookmark-icon').first().click();

  await page.waitForLoadState('networkidle');
  const favoriteCountTextFav = await page.locator('.header__favorite-count').textContent();
  const favoriteCountFav = parseInt(favoriteCountTextFav || '0', 10);

  expect(favoriteCountAfter).toBeGreaterThan(favoriteCountFav);
});

