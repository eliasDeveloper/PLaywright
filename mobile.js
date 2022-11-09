const {chromium, devices} = require('playwright');
const iPhone = devices['iPhone 11'];
//devices = a dictionary of devices
(async () => {
    //mobile code
    const browser = await chromium.launch({headless: false, slowMo:300});  // Or 'firefox' or 'webkit'.
    const context =  await browser.newContext({
        ...iPhone,
        permissions: ['geolocation'],
        geolocation: {latitude:19.432608, longitude:-99.133209},
        locale: 'fr-FR'

    })
    const page = await context.newPage()
    await page.goto('https://www.google.com/maps')
    await page.waitForTimeout(5000)
    await browser.close();
  })();

  //playwright comes with a registry of device parameters for selected mobile devices
  //Can be used to simulate browser behaviors on mobile devices like Android or iPhone