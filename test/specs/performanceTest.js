import LoginPage from '../pageobjects/loginPage.js'

describe('The website', () => {
    it('should login properly and have performance issues', async () => {
        await LoginPage.performanceLogin();
    })
})