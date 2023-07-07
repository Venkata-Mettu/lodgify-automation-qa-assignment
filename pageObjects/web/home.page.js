const Page = require('../common/page');


class HomePage extends Page {

    get header() {
        return $('.simple_content');
    }

    get lastItemInListOfProjects() {
        return $('[data-type="project_list_item"]:last-child');
    }

    get addTaskCTA() {
        return $('.plus_add_button');
    }

    get taskNameField() {
        return $('.ProseMirror[aria-label="Task name"]');
    }

    get dueDate() {
        return $('[aria-label="Set due date"][role="button"]');
    }

    get tomorrowDueDate() {
        return $('[data-action-hint="scheduler-suggestion-tomorrow"]');
    }

    get addTaskButton() {
        return $('[data-testid="task-editor-submit-button"]');
    }

    get inbox() {
        return $('#filter_inbox')
    }

    get taskCreated() {
        return $('.task_content')
    }

    taskCheckbox(taskName) {
        return $(`//div[@class="task_content" and text()="${taskName}"]//ancestor::div[@class="task_list_item__content"]/preceding-sibling::button`)
    }

    get taskCompleted() {
        return $('//div[contains(text(), "completed")]')
    }

    async addTask(taskName) {
        await this.lastItemInListOfProjects.click();
        await this.addTaskCTA.waitForDisplayed({ timeout: 3000 });
        await this.addTaskCTA.click();
        await this.taskNameField.setValue(taskName);
        await this.dueDate.click();
        await this.tomorrowDueDate.click();
        await this.addTaskButton.click();
        await browser.pause(2000);
    }

    async completeTask(taskName) {
        await this.taskCheckbox(taskName).waitForDisplayed();
        await this.taskCheckbox(taskName).click();
        await this.taskCompleted.waitForDisplayed();
        await expect(this.taskCompleted).toBeDisplayed();
    }
}

module.exports = new HomePage();

