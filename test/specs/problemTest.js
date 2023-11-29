import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js'

describe('The website', () => {
    it('should login and show glitched pictures of items', async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user', 'secret_sauce');
        await expect(InventoryPage.appLogo).toBeExisting();
        await expect(InventoryPage.itemBroken).toBeExisting();
    })
})