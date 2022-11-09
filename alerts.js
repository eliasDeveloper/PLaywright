const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo:1000});  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    page.once('dialog', async (dialog) => {
        console.log(await dialog.message())
        await dialog.accept()
    })
    //page.on is Emitted when a JavaScript dialog appears, such as alert, prompt, confirm or beforeunload
    //playwright automatically dismisses dialogs
    await page.click('#confirmButton')
    page.once('dialog', async (dialog) => {
        console.log(await dialog.message())
        await dialog.accept('this is simply my message');
    })
    await page.click('#promtButton')
    await browser.close();
  })();