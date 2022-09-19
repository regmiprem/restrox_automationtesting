Feature: Department Handling

  As an admin
  I want to manage my department sections
  So that - - - - - 

  Background:
    Given the user has logged in as 'Prem Regmi'


  Scenario: Preview department page
    When the user selects the menu 'Department'
    Then the 'Department' section should appear

  Scenario: Try to create department without filling up the form
    When the user selects the menu 'Department'
    And the user clicks Create Department button without filling the form
    Then the system throws the alert message


  Scenario: Add a department
    When the user selects the menu 'Department'
    And the user creates a new department with name '<department-name>' and description '<department-description>'
    Then the department should be successfully created
    Examples:
        | department-name | department-description |
        | Testing 2       | Testing Description 2  |
        | Testing 1       | Testing Description 1  |

  Scenario: Cancel adding department
   When the user selects the menu 'Department'
   And the user fills the department details with name '<department-name>' and description '<department-description>' 
   Then the user clicks Cancel button and the department should not be created
   Examples:
       | department-name | department-description |
       | Testing 1       | Testing Description 1  |
       | Testing 2       | Testing Description 2  |
 
 Scenario: Close adding department
   When the user selects the menu 'Department'
   And the user fills the department details with name '<department-name>' and description '<department-description>'
   Then the user clicks Close button and the department should not be created
   Examples:
       | department-name | department-description |
       | Testing 1       | Testing Description 1  |
       | Testing 2       | Testing Description 2  |

  # Scenario: Search any department
  #   When the user selects the menu 'Department'
  #   And the user searches for department '<search-department>'
  #   Then the department should be found in the list
  #   Examples:
  #       | search-department |
  #       | Te                |
  #       | Tes               | 

  # Scenario: Searched department not found
  #   When the user selects the menu 'Department'
  #   And the user searches for department '<search-department>'
  #   Then the department should not be found in the list
  #   Examples:
  #       | search-department |
  #       | xy                |
  #       | xx                |

  Scenario: Edit department name
    When the user selects the menu 'Department'
    And the user clicks the 3dot icon of the department '<department-name>'
    And the user clicks Edit button
    And the user clears the department with name '<department-name>' and inputs '<edit-name>'
    Then the department should be successfully edited
    Examples:
        | department-name | edit-name | 
        | Testing 1       | Test 1    | 

  Scenario: Edit department description
    When the user selects the menu 'Department'
    And the user clicks the 3dot icon of the department '<department-name>'
    And the user clicks Edit button
    And the user clears the department with description '<department-description>' and inputs '<edit-description>'
    Then the department should be successfully edited
    Examples:
        | department-name | department-description | edit-description | 
        | Test 1          | Testing Description 1  | Test Garden      | 
       
  Scenario: Edit department 
    When the user selects the menu 'Department'
    And the user clicks the 3dot icon of the department '<department-name>'
    And the user clicks Edit button
    And the user clears the department with name '<department-name>' and description '<department-description>'
    And the user fills the department with name '<edit-name>' and description '<edit-description>'
    Then the department should be successfully edited
    Examples:
        | department-name | department-description | edit-name | edit-description | 
        | Test 1          | Test Garden            | Tessss 1  | Test Gar 1       | 

  Scenario: Cancel editing department
    When the user selects the menu 'Department'
    And the user clicks the 3dot icon of the department '<department-name>'
    And the user clicks Edit button
    And the user clears the department with name '<department-name>' and description '<department-description>'
    And the user fills the department with name '<edit-name>' and description '<edit-description>'
    Then the user clicks Cancel button and the department should not be edited
    Examples:
        | department-name | department-description| edit-name | edit-description | 
        | Tessss 1        | Test Gar 1            | Gar 1     | Test Gar Gar 1   | 

  Scenario: Close editing department
    When the user selects the menu 'Department'
    And the user clicks the 3dot icon of the department '<department-name>'
    And the user clicks Edit button
    And the user clears the department with name '<department-name>' and description '<department-description>'
    And the user fills the department with name '<edit-name>' and description '<edit-description>'
    Then the user clicks Close button and the department should not be edited
    Examples:
        | department-name | department-description| edit-name | edit-description | 
        | Tessss 1        | Test Gar 1            | Gar 1     | Test Gar Gar 1   | 

  Scenario: delete the existing department
    When the user selects the menu 'Department'
    And the user clicks the 3dot icon of the department '<department-name>'
    And the user clicks Delete button
    Then the user confirms the deletion and the department should be successfully deleted
    Examples:
        | department-name |
        | Tessss 1        |

  Scenario: Cancel deleting department
    When the user selects the menu 'Department'
    And the user clicks the 3dot icon of the department '<department-name>'
    And the user clicks Delete button
    Then the user cancels the deletion and the department should not be deleted
    Examples:
        | department-name |
        | Tessss 1        |
  
  Scenario: Try to update without modifying the department
    When the user selects the menu 'Department'
    And the user clicks the 3dot icon of the department '<department-name>'
    And the user clicks Edit button
    Then the user clicks Update button and the department should not be edited
