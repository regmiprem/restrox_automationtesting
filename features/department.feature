Feature: Department Handling

  As an admin
  I want to manage my department sections
  So that - - - - - 

  Background:
    Given the user has logged in as 'Prem Regmi'


  Scenario: Preview department page
    When the user selects the menu 'Department'
    Then the 'Department' section should appear


  Scenario: Add a department
    When the user selects the menu 'Department'
    And the user creates a new department with name '<department-name>' and description '<department-description>'
    Then the department should be successfully created
    Examples:
        | department-name | department-description |
        | Testing 1       | Testing Description 1  |
        | Testing 2       | Testing Description 2  |
        | Testing 3       | Testing Description 3  |