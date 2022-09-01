Feature: Department Handling

  As an admin
  I want to manage my department sections
  So that - - - - - 

  Scenario: Add a new department
    Given the user has logged in
    When the user creates a department 'finance'
    Then a new department called 'finance' should be created
