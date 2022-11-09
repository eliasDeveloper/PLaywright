const {chromium} = require('playwright')

describe('UI tests for bookstore using playwright',()=>{
    let browser = null
    let page = null
    let context = null
    let firstRowCells = null
    beforeAll(async()=>{
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demoqa.com/books');

    })
    afterAll(async()=>{
        await browser.close()

    })
    it('should load page', async() => {
        expect(page).not.toBeNull()
        expect(await page.title).not.toBeNull()
    })
    it('Should be able to search for eloquent javascript', async() => {
        await page.fill('#searchBox', 'eloquent')
        
    });
    it('Should check if book image is loaded', async() => {
        firstRowCells = await page.$$('.ReactTable .rt-tr-group:nth-child(1) .rt-td')
        let imageUrl = await firstRowCells[0].$('img')
        expect(await imageUrl.getAttribute('src')).not.toBeNull()
    });
    it('Should check if title is okay', async() => {
        expect(await firstRowCells[1].innerText()).not.toBeNull()
        expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition') 
    });
    it('Should check if the author is okay', async() => {
        expect(await firstRowCells[2].innerText()).toBe('Marijn Haverbeke')
        
    });

    
})