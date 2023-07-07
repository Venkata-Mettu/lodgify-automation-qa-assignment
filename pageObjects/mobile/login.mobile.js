
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginMobilePage {
    /**
     * define selectors using getter methods
     */

    get continueWithMoreOptionsCTA () {
        return $('id=com.todoist:id/more_signin_options');
    }

    get loginWithEmail() {
        return $('id=com.todoist:id/email_login');
    }

    get inputEmail () {
        return $('//android.widget.EditText[@resource-id="email"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@resource-id="password"]');
    }

    get loginButton () {
        return $('//android.view.View[@resource-id="auth_button_tag"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.continueWithMoreOptionsCTA.click();
        await this.loginWithEmail.click();
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginMobilePage();
