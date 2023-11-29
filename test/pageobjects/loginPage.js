import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class LoginPage extends BasePage {

    // Selectors:
    get usernameField () {
        return $('#user-name');
    }

    get passwordField () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }

    get loginLogo () {
        return $('.login_logo');
    }

    get loginError () {
        return $('[data-test="error"]');
    }

    // Functions:
    async login (username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    open () {
        return super.baseUrl('');
    }
}

export default new LoginPage();
