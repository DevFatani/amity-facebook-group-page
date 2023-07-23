exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = "//input[@id='email']";
        this.passwordInput = "//input[@id='pass']";
        this.loginButton = "//button[@id='u_0_5_30']"
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.facebook.com/');
    }

    async login(email, password) {
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }


}