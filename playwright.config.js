import { defineConfig, devices } from '@playwright/test';

let testMatch = 'src/tests/**/login.spec.js';
if (process.env.UI_TEST) {
  testMatch = process.env.UI_TEST;
}

export default defineConfig({
  testDir: './src/tests',
  testMatch: testMatch,
  timeout: 30 * 60 * 1000, // 30 minutes
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['list', { printSteps: true }],
  ['html',{ open: 'never' }]],
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 30_000, // 10 seconds
  },
  use: {
    actionTimeout: 60_000, // 30 seconds
    navigationTimeout: 60_000, // 60 seconds
  },
  /* tests in parallel */
  workers: 1,
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
