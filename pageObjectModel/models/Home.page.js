const BasePage = require('./Base.page')
class HomePage extends BasePage{
    constructor(page){
        super(page)
        //locators in the home page
        this.loggedUser = '.logged-user-name';
        this.balances = '.balance-value';
    }
    async getUserName(){
        let user = await this.page.$(this.loggedUser)
        return await user.innerText();
    }
    async getBalance(balanceType){
        let balanceArray = await this.page.$$(this.balances);
        if(balanceType == 'total'){
            return (await balanceArray[0].$('span')).innerText()
        }
        else if(balanceType == 'credit'){
            return (await balanceArray[1].$('span')).innerText()
        }
        else{
            return (await balanceArray[2].$('span')).innerText()
        }
    }
    async navigate(){
        await super.navigate('app.html');
    }
    
}
module.exports = HomePage;