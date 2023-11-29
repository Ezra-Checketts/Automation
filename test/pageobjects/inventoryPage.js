import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class InventoryPage extends BasePage {
    
    get appLogo () {
        return $('.app_logo');
    }

    get itemBroken () {
        return $('[src="/static/media/sl-404.168b1cce.jpg"]');
    }
}

export default new InventoryPage();
