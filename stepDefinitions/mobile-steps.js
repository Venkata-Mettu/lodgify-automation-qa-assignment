const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginMobilePage = require('../pageObjects/mobile/login.mobile');
const HomeMobilePage = require('../pageObjects/mobile/home.mobile');
const ProjectMobilePage = require('../pageObjects/mobile/project.mobile');
const pages = {
    login: LoginMobilePage
}

const username = 'venkatamettu@gmail.com';
const password = 'Testing@123';
Given(/^I login to todoist mobile application$/, async () => {
    await LoginMobilePage.login(username, password);
});

When(/^I open (\w+) project$/, async (projectName) => {
    await HomeMobilePage.openProject(projectName);
    await ProjectMobilePage.verifyProject(projectName);
});

When(/^I mark the existing (\w+) as completed$/, async (taskName) => {
    await ProjectMobilePage.completeTask(taskName);
    await expect(ProjectMobilePage.snackbar).toBeDisplayed();
    // await HomeMobilePage.logout();
});

Then(/^I should see (\w+) appears in (.*) project after reopening$/, async (taskName, projectName) => {
    await HomeMobilePage.openProject(projectName);
    await ProjectMobilePage.verifyProject(projectName);
    await ProjectMobilePage.verifyTask(taskName);
});

Then(/^I logout$/, async() => {
    await HomeMobilePage.logout();
    // const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Log out"))`
    // const bottomEl = $(`android=${bottomElementSelector}`)
    
})

