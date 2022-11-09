const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo:300});  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    for(let i=0; i<1; i++){
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(13) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(13) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(15) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(13) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(18) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(17) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(13) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(15) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(13) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(20) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(18) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(13) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(22) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(20) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(18) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(17) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(15) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(23) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(23) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(22) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(18) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(20) > button')
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(18) > button')
    }
    // await delay(500)
    await browser.close();
  })();