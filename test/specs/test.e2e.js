import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import SecurePage from '../pageobjects/securePage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.appLogo).toBeExisting()
        await expect(SecurePage.appLogo).toHaveTextContaining(
            'Swag Labs')
    })
})

