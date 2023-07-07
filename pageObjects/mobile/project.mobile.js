

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProjectMobilePage {
    /**
     * define selectors using getter methods
     */
/**
    * @author Venkata Mettu
    *
    * page objects in project page for mobile app
    */
    get menuButton() {
        return $('//android.widget.ImageButton[@content-desc="Menu"]');
    }

    
    taskCheckbox (taskName) {
        return $(`//android.widget.TextView[@resource-id="com.todoist:id/text" and @text="${taskName}"]/preceding-sibling::android.widget.CheckBox`);
    }
    
    get undoTask () {
        return $('//android.widget.Button"]');
    }
    

    project(projectName) {
        return $(`//android.widget.TextView[@text="${projectName}"]`);

    }
    
    get projectName() {
        return $('//android.view.ViewGroup[@resource-id="com.todoist:id/toolbar"]/android.widget.TextView');
    }
 
    task(taskName) {
        return $(`//android.widget.TextView[@resource-id="com.todoist:id/text" and @text="${taskName}"]`);
    }

    get snackbar () {
        return $('id=com.todoist:id/compose_snackbar');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async completeTask (taskName) {
        await this.taskCheckbox(taskName).waitForDisplayed();
        await this.taskCheckbox(taskName).click();
        await browser.pause(500);
    }

    async verifyProject(projectName) {
        await this.projectName.waitForDisplayed();
        await expect(this.projectName).toHaveText(projectName);
    }

    async verifyTask(taskName) {
        await this.task(taskName).waitForDisplayed();
        await expect(this.task(taskName)).toBeDisplayed();
    }

}

module.exports = new ProjectMobilePage();


