import { test, expect } from '@playwright/test';

const USERNAME = process.env.OHRM_USERNAME || 'Admin';
const PASSWORD = process.env.OHRM_PASSWORD || 'admin123';

  test('OrangeHRM - Login and Logout', async ({ page }) => {
    // Step 1: Go to the OrangeHRM demo login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    // Step 2: Fill in credentials and submit
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]'); 
   
  });
