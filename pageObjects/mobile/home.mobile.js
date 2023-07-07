
class HomeMobilePage {
    
    get menuButton() {
        return $('//android.widget.ImageButton[@content-desc="Menu"]');
    }


    project(projectName) {
        return $(`//android.widget.TextView[@text="${projectName}"]/parent::android.view.View`);

    }
    
    get task() {
        return $('//android.widget.TextView[@resource-id="com.todoist:id/text"]');
    }

    get settings() {
        return $('id=com.todoist:id/profile_settings');
    }

    get notifications() {
        return $('//android.widget.TextView[@resource-id="android:id/title" and @text="Notifications"]/parent::android.widget.RelativeLayout/parent::android.widget.LinearLayout')
    }

    get logoutCTA() {
        return $('//android.widget.TextView[@resource-id="android:id/title" and @text="Log out"]/parent::android.widget.RelativeLayout/parent::android.widget.LinearLayout')
    }

    get logoutYes() {
        return $('//android.widget.Button[@text="YES"]')
    }
    
    
    async openProject (projectName) {
        await browser.pause(3000)
        await this.menuButton.waitForDisplayed();
        await this.menuButton.click();
        await browser.pause(3000)
        await this.project(projectName).waitForDisplayed();
        await this.project(projectName).click();
    }

    async logout () {
        await this.menuButton.waitForDisplayed();
        await this.menuButton.click();
        await this.settings.waitForDisplayed();
        await this.settings.click();
        await browser.pause(1000)
        await browser.touchPerform([
            { action: 'press', options: { x: 500, y: 1280 }},
            { action: 'wait', options: { ms: 1000}},
            { action: 'moveTo', options: { x: 500, y:  347}},
            { action: 'release' }
          ]);
          await browser.pause(1000)
        await this.logoutCTA.waitForDisplayed();
        await this.logoutCTA.click();
 
        await this.logoutYes.waitForDisplayed();
        await this.logoutYes.click();
    }


    
    open () {
        return super.open();
    }
}

module.exports = new HomeMobilePage();
