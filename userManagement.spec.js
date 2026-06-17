const { test, expect } = require('@playwright/test');

test('User Management Flow', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Admin' }).click();

  await page.getByRole('button', { name: 'Add' }).click();

  await page.locator('input').nth(1).fill('testuser01');

  await page.locator('input[type="password"]').first().fill('Test@12345');
  await page.locator('input[type="password"]').nth(1).fill('Test@12345');

  await page.getByRole('button', { name: 'Save' }).click();

});