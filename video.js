const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo:100});  // Or 'firefox' or 'webkit'.
    const context = await browser.newContext({
        recordVideo:{
            dir: "./recordings"
        }
    })
    const page = await context.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await page.click('button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading', {state: 'hidden'})
    await page.waitForTimeout(100)
    //waitForTimeout can cause flaky tests, use for debugging only
    await browser.close();
  })();

  //playwright works on 3 main concepts: 
  //Browser, Context and Page
  //Browser is the first thing we need to run the UI tests on (chromium, firefox or webkit)
  //Page: a new tab or pop-up window within a context. Actions like page.click, page.type etc. happen here.
  //Context: "incognito-alike" session within a browser instance
  //We have to use a browser context to record videos. Playwright records videos for all pages in a browser context
