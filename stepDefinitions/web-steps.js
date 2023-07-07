const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageObjects/web/login.page');
const HomePage = require('../pageObjects/web/home.page');

const username = 'venkatamettu@gmail.com';
const password = 'Testing@123';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I (\w+) into web application$/, async (page) => {
    await pages[page].open();
    await LoginPage.login(username, password);
});

Then(/^I should see (\w+) project is created$/, async (projectName) => {
    await HomePage.header.waitForDisplayed({ timeout: 30000 });
    await expect(HomePage.header).toHaveTextContaining('Today');
    await expect(HomePage.lastItemInListOfProjects).toHaveText(projectName);
});


When(/^I create (\w+) task via web application in (.*) project$/, async (taskName, projectName) => {
    await HomePage.addTask(taskName);
});

Then(/^I should see (\w+) created correctly on web$/, async(taskName) => {
    await HomePage.inbox.click();
    await expect(HomePage.taskCreated).toHaveText(taskName);
});

Then(/^I complete the (\w+) task$/, async(taskName) => {
    await HomePage.completeTask(taskName);
});