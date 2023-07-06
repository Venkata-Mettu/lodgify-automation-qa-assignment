**TODOIST
**

This project contains WebDriverIO tests using Cucumber, Appium, and Allure reporting.

Installation

To install the project dependencies, run the following command:


npm install
This will install all the necessary dependencies specified in the package.json file.

Running Tests

To execute the tests, use the following command:


npm run wdio
This command runs the tests using WebDriverIO with the specified configuration in wdio.conf.js.

Dependencies

The project has the following dependencies:

@wdio/allure-reporter: ^8.11.0
@wdio/appium-service: ^8.11.2
@wdio/cli: ^8.11.2
@wdio/cucumber-framework: ^8.11.0
@wdio/local-runner: ^8.11.2
@wdio/spec-reporter: ^8.11.2
appium: ^2.0.0-rc.5
appium-uiautomator2-driver: ^2.29.2
chai: ^4.3.7
chromedriver: ^114.0.2
mocha: ^10.2.0
supertest: ^6.3.3
ts-node: ^10.9.1
typescript: ^4.9.5
wdio-chromedriver-service: ^8.1.1
wdio-wait-for: ^3.0.5
Reporting

This project uses Allure for reporting. The necessary dependencies are already installed.

To generate and view the test reports, follow these steps:

After running the tests, execute the following command:

allure generate

This command generates the Allure report based on the test results.
To open the generated report in your default browser, run the following command:

allure open

The Allure report will open in your browser, providing detailed information about the test execution, including passed and failed scenarios, screenshots, and logs.
Scripts

The package.json file defines the following script:

wdio: Runs the tests using WebDriverIO.
Contributing

Contributions are welcome! If you find any issues or want to add new features, please submit a pull request.

License

MIT License

Feel free to customize this README file based on your project's specific requirements and add any additional sections or information as needed.
