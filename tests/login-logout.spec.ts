import { test, expect } from '@playwright/test';

// Read credentials from environment variables instead of hardcoding them.
// Locally, these fall back to the public OrangeHRM demo defaults so you don't
// need any extra setup to run the test on your own machine.
// In CI, these come from encrypted GitHub Secrets (see workflow file + README).
// Add a change to check in VSTS and github
const USERNAME = process.env.OHRM_USERNAME || 'Admin';
const PASSWORD = process.env.OHRM_PASSWORD || 'admin123';

  test('OrangeHRM - Login and Logout', async ({ page }) => {
    // Step 1: Go to the OrangeHRM demo login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    // Step 2: Fill in credentials and submit
  await page.fill('input[name="username"]', USERNAME);
  await page.fill('input[name="password"]', PASSWORD);
  await page.click('button[type="submit"]');
   
  });
