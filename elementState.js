const {chromium} = require('playwright');
//playwright auto-waits for all the relevant checks to pass and only then performs the requested actions.
//relevant checks: Is Element -> attached to the DOM? visible? Stable (not animated)? Not being obscured by other elements? Enabled? Editable? 
(async () => {
    try{
      const browser = await chromium.launch(); // Or 'firefox' or 'webkit'.
      // creating a page inside browser
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
      //navigating to site
      await page.goto("https://demoqa.com/automation-practice-form");

      //print the element state
      const firstName = await page.$("#firstName");
      const sportsCheckbox = await page.$("#hobbies-checkbox-1");
      const submitBtn = await page.$("#submit");

      console.log(await firstName.isDisabled());
      console.log(await firstName.isEnabled());
      console.log(await firstName.isVisible());
      console.log(await firstName.isHidden());
      console.log(await sportsCheckbox.isChecked());
      console.log(await sportsCheckbox.isEnabled());
      console.log(await submitBtn.isVisible());
      console.log(await submitBtn.isHidden());
      await browser.close();
    }catch(e){
        console.log('error' + e.message);
    }
  })();