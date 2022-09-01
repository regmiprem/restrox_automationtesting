Feature: Department Handling

  As an admin
  I want to manage my department sections
  So that - - - - - 

  Scenario: Add a new department
    Given the user has logged in as 'Prem Regmi'
    When the user selects the menu 'Department'
    Then the 'Department' section should appear
