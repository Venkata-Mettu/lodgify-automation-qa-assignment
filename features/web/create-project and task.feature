Feature: Create Project

  Scenario Outline: As a user, I want to validate create project functionality
    Given I create <project> project via api
    When I login into web application
    Then I should see <project> project is created
    Examples:
      | project |
      | TEST1   |

  Scenario Outline: As a user, I want to create task via web application
    When I create <task> task via web application in <project> project
    Then I should see <task> created correctly via api
    Examples:
      | project | task  |
      | TEST1   | TASK1 |
  Scenario Outline: As a user, I want to create task via api
    When I create <task> task via api
    Then I should see <task> created correctly on web
    And I complete the <task> task
    Examples:
      | task  |
      | TASK2 |