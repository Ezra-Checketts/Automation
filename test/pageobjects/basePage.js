import { browser } from '@wdio/globals';

export default class BasePage {
    // Opens a specified url by combining a site and path
    openUrl(site, path) {
        const url = `${site}${path}`;
        try {
            return browser.url(url);
        } catch (error) {
            console.error(`Failed to open URL: ${url}`, error);
            throw error;
        }
    }

    // Opens the Swag Labs website
    openSwagLabs() {
        return this.openUrl('https://saucedemo.com/', '');
    }

    // Handles errors by logging the error and rethrowing it
    async handleError(action, error) {
        console.error(`Error during ${action}:`, error);
        throw error;
    }
}