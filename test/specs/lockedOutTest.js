import LoginPage from '../pageobjects/loginPage.js'

describe('The website', () => {
    it('should give a locked out error message', async () => {
        await LoginPage.lockedOutLogin('locked_out_user', 'secret_sauce');
    })
})