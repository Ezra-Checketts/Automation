import { $ } from '@wdio/globals';
import BasePage from './basePage.js';
import InventoryPage from './inventoryPage.js';

class LoginPage extends BasePage {
    // Selectors:
    get usernameField() {return $('#user-name');}
    get passwordField() {return $('#password');}
    get loginButton() {return $('#login-button');}
    get loginLogo() {return $('.login_logo');}
    get loginError() {return $('[data-test="error"]');}

    // Functions:
    // Logs into Swag Labs
    async loginToSwagLabs(username, password) {
        try {
            const usernameFieldElement = this.usernameField;
            const passwordFieldElement = this.passwordField;
            const loginButtonElement = this.loginButton;
            await super.openSwagLabs();
            await usernameFieldElement.setValue(username);
            await passwordFieldElement.setValue(password);
            await loginButtonElement.click();
        } catch (error) {
            await super.handleError('loginToSwagLabs', error);
        }
    }

    // Logs in with the error_user login
    async errorLogin() {
        try {
            const appLogoElement = InventoryPage.appLogo;
            await this.loginToSwagLabs('error_user', 'secret_sauce');
            await appLogoElement.waitForExist();
        } catch (error) {
            await super.handleError('errorLogin', error);
        }
    }

    // Attempts a log in with the locked_out_user login
    async lockedOutLogin() {
        try {
            const loginLogoElement = this.loginLogo;
            const loginErrorElement = this.loginError;
            await this.loginToSwagLabs('locked_out_user', 'secret_sauce');
            await loginLogoElement.waitForExist();
            await loginErrorElement.waitForExist();
        } catch (error) {
            await super.handleError('lockedOutLogin', error);
        }
    }

    // Logs in with the performance_glitch_user login
    async performanceLogin() {
        try {
            const appLogoElement = InventoryPage.appLogo
            await this.loginToSwagLabs('performance_glitch_user', 'secret_sauce');
            await appLogoElement.waitForExist();
        } catch (error) {
            await super.handleError('performanceLogin', error);
        }
    }

    // Logs in with the problem_user login
    async problemLogin() {
        try {
            const appLogoElement = InventoryPage.appLogo
            const itemBrokenElement = InventoryPage.itemBroken
            await this.loginToSwagLabs('problem_user', 'secret_sauce');
            await appLogoElement.waitForExist();
            await itemBrokenElement.waitForExist();
        } catch (error) {
            await super.handleError('problemLogin', error);
        }
    }

    // Logs in with the visual_user login
    async visualLogin() {
        try {
            const appLogoElement = InventoryPage.appLogo
            const itemBrokenElement = InventoryPage.itemBroken
            await this.loginToSwagLabs('visual_user', 'secret_sauce');
            await appLogoElement.waitForExist();
            await itemBrokenElement.waitForExist();
        } catch (error) {
            await super.handleError('visualLogin', error);
        }
    }

    // Logs in with the standard_user login
    async standardLogin() {
        try {
            const appLogoElement = InventoryPage.appLogo;
            await this.loginToSwagLabs('standard_user', 'secret_sauce');
            await appLogoElement.waitForExist();
        } catch (error) {
            await super.handleError('standardLogin', error);
        }
    }

    async incorrectLogin(incorrectUsername, incorrectPassword) {
        try {
            const loginLogoElement = this.loginLogo
            await this.loginToSwagLabs(incorrectUsername, incorrectPassword);
            await loginLogoElement.waitForExist();
        } catch (error) {
            await super.handleError('incorrectLogin', error);
        }
    }
}

export default new LoginPage();