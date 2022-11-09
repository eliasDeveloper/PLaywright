const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo:100});  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('http://google.com');
    // other actions...
    await browser.close();
  })();