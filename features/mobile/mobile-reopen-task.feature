#author: Venkata Mettu

Feature: Reopen Task in Mobile

  Scenario Outline: Scenario Outline name: As a user, I want to validate Reopen Task functionality in mobile

    Given I login to todoist mobile application
    When I open <project> project
    When I get <task> task ID via api
    And I mark the existing <task> as completed
    When I reopen <task> task via api
    Then I should see <task> appears in <project> project after reopening
    And I logout
    And I delete <project> project via api
    Examples:
      | project | task  |
      | TEST1   | TASK1 |
