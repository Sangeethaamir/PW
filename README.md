[![Playwright Tests](https://github.com/Sangeethaamir/PW/actions/workflows/playwright.yml/badge.svg)](https://github.com/Sangeethaamir/PW/actions/workflows/playwright.yml)
# Playwright + GitHub Actions Demo

A login/logout test on the OrangeHRM demo site, wired to run automatically via GitHub Actions.

## 1. Local setup (PowerShell)

```powershell
cd D:\GenAI\playwright-github-actions-demo
npm init -y
npm install -D @playwright/test
npx playwright install
npx playwright test          # run it locally first to confirm it passes
```

## 2. Push to GitHub

```powershell
git init
git add .
git commit -m "Add Playwright login/logout test with GitHub Actions CI"
git branch -M main
git remote add origin https://github.com/Sangeethaamir/playwright-github-actions-demo.git
git push -u origin main
```

(Create the empty repo on GitHub first if it doesn't exist yet — no need to add a README/.gitignore there, you already have them.)

## 3. Watch it run

Go to your repo on GitHub → **Actions** tab. You'll see "Playwright Tests" running automatically because of the `on: push` trigger in the workflow file. Click into the run to see live logs for each step.

If a test fails, the "playwright-report" artifact will be attached to that run — download it and open `index.html` to see screenshots/traces.
