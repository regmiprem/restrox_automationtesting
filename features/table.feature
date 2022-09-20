Feature: Table Handling

    As an admin
    I want to manage my table sections
    So that - - - - - 

    Background:
        Given the user has logged in as Demo 'Prem Regmi'


    Scenario: Preview table page
        When the user selects the 'Table & Space' menu
        Then the section 'Table & Space' should appear

    Scenario: Add new table
        When the user selects the 'Table & Space' menu
        And the user fills a form for new table with name '<table-name>', '<table-space>', '<table-capacity>', and '<table-status>'
        And the user clicks Save Table button
        Then the table should be created successfully
        Examples:
            | table-name | table-space | table-capacity | table-status         |
            | table--1   | g-          | 4              | Open                 |
            | table--2   | bar         | 8              | Out of Service       |

    Scenario: Try to create table without filling the form properly
        When the user selects the 'Table & Space' menu 
        And the user clicks Create Table button without filling the form
        Then the system throws alert message and the table should not be created
        

    Scenario: Cancel adding table
        When the user selects the 'Table & Space' menu 
        And the user fills a form for new table with name '<table-name>', '<table-space>', '<table-capacity>', and '<table-status>'
        Then the user cancels the table creation and the table should not be created
        Examples:
            | table-name | table-space | table-capacity | table-status         |
            | table--1   | g-          | 4              | Open                 |
            | table--2   | bar         | 8              | Out of Service       |

    Scenario: Close adding table
        When the user selects the 'Table & Space' menu 
        And the user fills a form for new table with name '<table-name>', '<table-space>', '<table-capacity>', and '<table-status>'
        Then the user closes the table creation and the table should not be created
        Examples:
            | table-name | table-space | table-capacity | table-status         |
            | table--1   | g-          | 4              | Open                 |
            | table--2   | bar         | 8              | Out of Service       |
        
    Scenario: Delete table
        When the user selects the 'Table & Space' menu 
        And the user clicks 3dot icon of the table with name '<table-name>'
        And the user clicks the Delete button
        Then the user confirms the deletion and the table should be successfully deleted
        Examples:
            | table-name |
            | table--2   |

    Scenario: Cancel Deleting table
        When the user selects the 'Table & Space' menu 
        And the user clicks 3dot icon of the table with name '<table-name>'
        And the user clicks the Delete button
        Then the user cancels the deletion and the table should not be deleted
        Examples:
            | table-name |
            | table--1   |