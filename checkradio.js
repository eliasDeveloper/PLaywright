const {chromium} = require('playwright');
const { test, expect } = require('@playwright/test');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo:500});  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    const checks = await page.$$('#main div:nth-child(1) input[type="checkbox"]')
    await checks[0].uncheck();
    await checks[1].check();
    const radios = await page.$$('#main div:nth-child(1) input[type="radio"]')
    await radios[1].check();
    await browser.close();
  })();