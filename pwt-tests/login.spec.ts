import { test, expect } from '@playwright/test';

test('Валидная авторизация', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'alex.pushkin@mail.ru');
  await page.fill('input[name="password"]', 'CopperRider1703');

  await Promise.all([
    page.waitForURL('http://localhost:5173'),
    page.click('button[type="submit"]'),
  ]);
  await expect(page).toHaveURL('http://localhost:5173');
});

test('Невалидная авторизация', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'test@mail.com');
  await page.fill('input[name="password"]', 'invalid');

  await page.click('button[type="submit"]');

  const passwordErrorMessage = await page.isVisible('text=\'Password must contain at least one letter and one number.\'');
  expect(passwordErrorMessage).toBeTruthy();

  expect(page.url()).toBe('http://localhost:5173/login');
});
