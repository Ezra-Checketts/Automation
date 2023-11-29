import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'

// To do: Turn this into a loop using an array

// Username is incorrect
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.open();
        await LoginPage.login('standard', 'secret_sauce');
        await expect(LoginPage.loginLogo).toBeExisting();
    })
})

// Password is incorrect
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.open();
        await LoginPage.login('error_user', 'secrets_sauces');
        await expect(LoginPage.loginLogo).toBeExisting();
    })
})

// Username and password are incorrect
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_user', 'secret-sauce');
        await expect(LoginPage.loginLogo).toBeExisting();
    })
})

// No username input
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.open();
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.loginLogo).toBeExisting();
    })
})

// No password input
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user', '');
        await expect(LoginPage.loginLogo).toBeExisting();
    })
})

// No username or password input
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        await expect(LoginPage.loginLogo).toBeExisting();
    })
})