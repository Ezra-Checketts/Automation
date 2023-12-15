import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'

// To do: Turn this into a loop using an array

// Username is incorrect
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.incorrectLogin('standard', 'secret_sauce');
    })
})

// Password is incorrect
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.incorrectLogin('error_user', 'secrets_sauces');
    })
})

// Username and password are incorrect
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.incorrectLogin('locked_user', 'secret-sauce');
    })
})

// No username input
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.incorrectLogin('', 'secret_sauce');
    })
})

// No password input
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.incorrectLogin('problem_user', '');
    })
})

// No username or password input
describe('The website', () => {
    it('should give an error and not allow the login', async () => {
        await LoginPage.incorrectLogin('', '');
    })
})