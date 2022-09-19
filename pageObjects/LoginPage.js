const util = require("util");

class LoginPage {
    constructor() {
        this.brandLogoSelector = ".brand-logo";
        this.rememberMeSelector = "#remember-me";
        this.baseUrl = "https://app.restrox.co/login";
        this.demoUserLinkSelector = ".auth-footer-btn > a";
        this.signinBtnSelector = "button[type='submit']";
        this.emailFieldSelector = ".form-control[name='loginEmail']";
        this.passwordFieldSelector = ".form-control[name='password']";

        // x-path selector to select the user with username Prem Regmi
        this.demoAccountUsernameSelector = "//h5[text()='%s']";
    }

    // preview the login page
    async viewPage() {
        await page.goto(this.baseUrl);
    }

    /**
     * Function to login
     * @param {string} email - email address
     * @param {string} password - password
     * Usage: Use only when you are in the login page
     */
    async login(email, password) {
        await page.waitForSelector(this.emailFieldSelector);
        await page.fill(this.emailFieldSelector, email);
        await page.fill(this.passwordFieldSelector, password);
        await page.click(this.signinBtnSelector);
    }

    // click on remember me checkbox
    async selectRememberMe() {
        const rememberMeLocator = await page.locator(this.rememberMeSelector);
        await rememberMeLocator.click();
    }

    /**
     * Function to login with demo user
     * @param {string} username - username of the demo user (eg: `Prem Regmi`)
     */
    async loginWithDemoUser(userName) {
        await page.locator(this.demoUserLinkSelector).click();
        const demoAccountSelector = util.format(
            this.demoAccountUsernameSelector,
            userName
        );
        await page.waitForSelector(demoAccountSelector);
        await page.locator(demoAccountSelector).click();
    }
}

module.exports = LoginPage;
