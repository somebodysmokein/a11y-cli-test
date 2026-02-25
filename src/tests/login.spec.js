import {test,expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60_000);        // 60s for all actions
    page.setDefaultNavigationTimeout(60_000); // 60s for navigations
  });
  

test('login and verify dashboard', async ({ page }) => {
  // Maximize window (Playwright doesn't have direct maximize, so set viewport to null for full screen)
  //await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate to app
  await page.goto('http://localhost:5173/');

  // Wait for and fill username
  await page.locator('#username').waitFor();
  await page.fill('#username', 'bstackdemo');

  // Wait for and fill password
  await page.locator('#password').waitFor();
  await page.fill('#password', 'bstackdemo');

  // Wait for and click login button
  const loginBtn = await page.locator("//button[text()='Login']");
  await loginBtn.waitFor();  
  await loginBtn.click();
  //await page.getByText('Login').click();


  // Wait for Dashboard heading
  const dashboardPage = page.locator("//h1[text()='Dashboard']");
  await expect(dashboardPage).toBeVisible();

  // Assert Dashboard text
  await expect(dashboardPage).toHaveText('Dashboard');
});
