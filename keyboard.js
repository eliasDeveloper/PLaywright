const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({args:['--start-maximized'], headless: false, slowMo:300});  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    await page.click('input')
    await page.keyboard.type('one does not simply exit vim')
    await page.keyboard.down('Shift')
    for(let i = 0; i <'exist vim'.length; i++){
        await page.keyboard.press('ArrowLeft')
    }
    // await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('Backspace');
    await page.keyboard.up('Shift')
    await page.keyboard.type(' walk into mordor')
    await browser.close();
  })();