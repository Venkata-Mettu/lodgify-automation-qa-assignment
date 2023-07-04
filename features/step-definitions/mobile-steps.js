const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginMobilePage = require('../pageobjects/login.mobile');
// const SecurePage = require('../pageobjects/home.page');

const pages = {
    login: LoginMobilePage
}

const username = 'venkatamettu@gmail.com';
const password = 'Testing@123';
Given(/^I launch mobile application$/, async () => {
    await LoginMobilePage.login(username, password);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

