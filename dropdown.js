const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo:300});  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown')
    //value
    await dropdown.selectOption({value: '1'})
    //label
    await dropdown.selectOption({label:'Option 2'})
    //index
    await dropdown.selectOption({index: 1})
    //values inside
    const availableOptions = await page.$$('#dropdown > option')
    for(let i = 0; i < availableOptions.length; i++){
        console.log(await availableOptions[i].innerText())
    }
    const availableOptions_2 = await dropdown.$$('option')
    for(let i = 0; i < availableOptions_2.length; i++){
        console.log(await availableOptions_2[i].innerText())
    }
    await browser.close();

  })();