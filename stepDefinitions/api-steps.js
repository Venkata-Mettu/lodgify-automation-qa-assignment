const { Given, When, Then } = require('@wdio/cucumber-framework');
const request = require('supertest');

const { expect } = require('chai');
const TestData = require('../config/testData.js')

const req = request(TestData.apiURI);
const token = TestData.token;
let taskID;
let projectID;
/**
    * @author Venkata Mettu
    *
    * api steps
    */

Given(/^I create (\w+) project via api$/, async (projectName) => {
    const res = await req
        .post('/projects')
        .set('Accept', 'application/json')
        .set({ Authorization: `Bearer ${token}` })
        .send({ name: `${projectName}` })
        .expect(200);
    console.log(`*********************************** ` + JSON.stringify(res));
    expect(res.body.name).eq(projectName);
});

Then(/^I should see (\w+) created correctly via api$/, async (taskName) => {
    const res = await req
        .get('/tasks')
        .set('Accept', 'application/json')
        .set({ Authorization: `Bearer ${token}` })
        .expect(200);
    expect(res.body[0].content).eqls(taskName)
    console.log('******************** ' + JSON.stringify(res));
});

When(/^I create (\w+) task via api$/, async (taskName) => {
    const res = await req
        .post('/tasks')
        .set('Content-Type', 'application/json')
        .set({ Authorization: `Bearer ${token}` })
        .set('X-Request-Id', 'abcd123')
        .send(`{"content": "${taskName}", "due_string": "tomorrow at 12:00", "due_lang": "en", "priority": 4}`)
        .expect(200);
    console.log(`*********************************** ` + JSON.stringify(res));
    expect(res.body.content).eq(taskName);
});

When(/^I get (\w+) task ID via api$/, async (taskName) => {
    const res = await req
        .get('/tasks')
        .set('Content-Type', 'application/json')
        .set({ Authorization: `Bearer ${token}` })
        .expect(200);
    console.log(`*********************************** `+ res.body+ '**************' + JSON.stringify(res.body));
    taskID = res.body.find(x => x.content == taskName).id
    console.log(taskID)
});

When(/^I reopen (\w+) task via api$/, async (taskName) => {
    const res = await req
        .post(`/tasks/${taskID}/reopen`)
        .set('Content-Type', 'application/json')
        .set({ Authorization: `Bearer ${token}` })
        .expect(204);
        await browser.pause(2000)
        console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% % `+ JSON.stringify(res.body));
});


Then(/^I delete (\w+) project via api$/, async (projectName) => {
    console.log(`*********************************** inside delete project`)
    const res = await req
        .get('/projects')
        .set('Content-Type', 'application/json')
        .set({ Authorization: `Bearer ${token}` })
        .expect(200);
    console.log(`*********************************** `+'**************' + JSON.stringify(res.body));

    projectID = res.body.find(x => x.name == projectName).id
    console.log(projectID)

    const delRes = await req
    .delete(`/projects/${projectID}`)
    .set('Content-Type', 'application/json')
    .set({ Authorization: `Bearer ${token}` })
    .expect(204);
    await browser.pause(2000)
    console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% % `+ JSON.stringify(delRes.body));
});