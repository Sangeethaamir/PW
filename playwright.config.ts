import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 2,
  reporter: 'html',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    navigationTimeout: 60000
  },
 // Each "project" below is a separate browser engine. The GitHub Actions
  // matrix (see playwright.yml) picks one project per parallel job using
  // `--project=<name>`. You can also run all three locally at once with
  // a plain `npx playwright test` (no --project flag).
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
