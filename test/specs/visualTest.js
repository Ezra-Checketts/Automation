import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js'

describe('The website', () => {
    it('should login properly with weird visuals', async () => {
        await LoginPage.open();
        await LoginPage.login('visual_user', 'secret_sauce');
        await expect(InventoryPage.appLogo).toBeExisting();
        await expect(InventoryPage.itemBroken).toBeExisting();
    })
})