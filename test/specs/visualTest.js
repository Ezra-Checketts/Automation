import LoginPage from '../pageobjects/loginPage.js'

describe('The website', () => {
    it('should login properly with weird visuals', async () => {
        await LoginPage.visualLogin();
    })
})