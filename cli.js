const { test, expect } = require('playwright/test');

test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="username"]').press('Tab');

  await page.locator('[data-test="password"]').fill('standard_password');

  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="password"]').dblclick();

  await page.locator('[data-test="password"]').press('Control+a');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="password"]').press('Enter');

  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});