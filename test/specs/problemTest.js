import LoginPage from '../pageobjects/loginPage.js'


describe('The website', () => {
    it('should login and show glitched pictures of items', async () => {
        await LoginPage.problemLogin();
    })
})