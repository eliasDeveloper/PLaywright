const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo:100});  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://applitools.com/');
    await page.screenshot({path: 'screenshot.png'});
    const logo = await page.$('.logo')
    await logo.screenshot({path: 'logo.png'})
    await page.screenshot({path: 'fullPage.png', fullPage: true})
    await browser.close();
  })();