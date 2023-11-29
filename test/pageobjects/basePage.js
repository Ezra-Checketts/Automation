import { browser } from '@wdio/globals';

export default class BasePage {

    baseUrl (path) {
        return browser.url(`https://saucedemo.com/${path}`);
    }
}
