# Web and Mobile Test Automation for TODOIST application

This framework designed using WebDriverIO, Cucumber, Appium, SuperTest, and Allure reporting.



## Prerequisites


### Web Automation Prerequisites:

* Node.js
* npm
* chrome browser


### Mobile Automation Prerequisites:

* Android Studio: Install Android Studio to set up the Android development environment and access the necessary tools for mobile automation. You can download it from the official * Android Studio website: https://developer.android.com/studio

* Java Development Kit (JDK): Install the JDK and configure the environment variables. You can download it from the Oracle website or use OpenJDK.
* Appium: Install Appium globally by running the following command:
```sh
  npm install appium -g
  ```
* Appium Inspector: Appium Inspector is bundled with Appium Desktop, which provides a graphical interface to inspect and interact with mobile applications. Download and install Appium Desktop from the official Appium website: http://appium.io

* Android app apk file 



## Installation

Follow these steps to set up the project:

* Clone this repository to your local machine:

* git clone https://github.com/Venkata-Mettu/lodgify-automation-qa-assignment.git

* Install the project dependencies using npm:
```sh
  npm install
  ```


## Writing tests

1. Using Cucumber BDD syntax , write the tests for the features in .feature file format under features folder.
Use Cucumber extension if required in VSCode.
2. This frameworks used Page Object Model so page elements and page specific functionalty can be found under pageObjects folder.
3. Then write Step Definitions required under stepDefinitions with right naming convention.

## Running Tests

To execute the tests for web , use following command:
```sh
npm run test:web
```
To execute the tests for mobile , use following command:
```sh
npm run test:mobile
```
Make sure emulator has been created and running, update the emulator capabilities in wdio.mobile.conf.js if required. And also make sure Appium is running before executing mobile scripts.

<br />
<br />

To execute the tests for both web and mobile, use the following command:
```sh
npm run test
```

## Reporting

This project uses Allure for reporting. The necessary dependencies are added to package.json.

To generate and view the test reports, follow these steps:

After running the tests, it automatically generate the reports using allure generate command. (Screenshot capturing is enabled for web)

The reports can be open by running the following command defined in the script:
```sh
npm run openreports
```