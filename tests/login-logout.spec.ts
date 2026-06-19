import { test, expect } from '@playwright/test';

  test('OrangeHRM - Login and Logout', async ({ page }) => {
    // Step 1: Go to the OrangeHRM demo login page
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
  waitUntil: 'domcontentloaded',
  timeout: 60000,
});
  
    // Step 2: Fill in credentials and submit
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]'); 
   
  });
