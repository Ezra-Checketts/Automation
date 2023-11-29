import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'

describe('The website', () => {
    it('should give a locked out message', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.loginLogo).toBeExisting();
        await expect(LoginPage.loginError).toBeExisting();
    })
})