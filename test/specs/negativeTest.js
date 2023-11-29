import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'

describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.open();
        await LoginPage.login('standard', 'secret_sauce');
        await expect(LoginPage.loginLogo).toBeExisting();
    })
})