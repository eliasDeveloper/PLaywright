const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo:100});  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    // other actions...
    const email = await page.$('#email')
    await email.type('elias@gmail.com', {delay: 50})
    await browser.close();
  })();