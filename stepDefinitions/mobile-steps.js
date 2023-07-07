const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginMobilePage = require('../pageObjects/mobile/login.mobile');
const HomeMobilePage = require('../pageObjects/mobile/home.mobile');
const ProjectMobilePage = require('../pageObjects/mobile/project.mobile');
const TestData = require('../config/testData.js')


Given(/^I login to todoist mobile application$/, async () => {
    console.log(TestData)
    await LoginMobilePage.login(TestData.username, TestData.password);
});

When(/^I open (\w+) project$/, async (projectName) => {
    await HomeMobilePage.openProject(projectName);
    await ProjectMobilePage.verifyProject(projectName);
});

When(/^I mark the existing (\w+) as completed$/, async (taskName) => {
    await ProjectMobilePage.completeTask(taskName);
    await expect(ProjectMobilePage.snackbar).toBeDisplayed();
});

Then(/^I should see (\w+) appears in (.*) project after reopening$/, async (taskName, projectName) => {
    await HomeMobilePage.openProject(projectName);
    await ProjectMobilePage.verifyProject(projectName);
    await ProjectMobilePage.verifyTask(taskName);
});

Then(/^I logout$/, async() => {
    await HomeMobilePage.logout();
    await LoginMobilePage.continueWithMoreOptionsCTA.waitForDisplayed({timeout: 60000});
    await expect(LoginMobilePage.continueWithMoreOptionsCTA).toBeDisplayed();
})

