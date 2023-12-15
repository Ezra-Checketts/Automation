import LoginPage from '../pageobjects/loginPage.js';

describe('The website', () => {
    it('should login properly and fail later actions', async () => {
        await LoginPage.errorLogin();
    })
})