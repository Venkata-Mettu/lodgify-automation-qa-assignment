Feature: Create Project

  Scenario: As a user, I want to validate create project functionality
    Given I create TEST project via api
    When I login into web application
    Then I should see TEST project is created

  Scenario: As a user, I want to create task via web application
    When I create TASK1 task via web application in TEST project
    Then I should see TASK1 created correctly via api

  Scenario: As a user, I want to create task via api
    When I create TASK2 task via api
    Then I should see TASK2 created correctly on web