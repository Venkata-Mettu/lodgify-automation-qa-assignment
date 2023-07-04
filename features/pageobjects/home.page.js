const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
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
}

module.exports = new HomePage();


// id = com.todoist:id/btn_welcome_email
// id = com.todoist:id/textinput_placeholder
// id = com.todoist:id/btn_continue_with_email