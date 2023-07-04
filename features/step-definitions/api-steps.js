const { Given, When, Then } = require('@wdio/cucumber-framework');
const request = require('supertest');

const { expect } = require('chai');

const req = request('https://api.todoist.com/rest/v2');
const token = '06e0185ea583db9a7718a5361a5e0c03562ec6c9';

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