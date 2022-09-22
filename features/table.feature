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

    Scenario: Cancel editing the table
        When the user selects the 'Table & Space' menu
        And the user clicks 3dot icon of the table with name '<table-name>'
        And the user clicks the Edit button
        And the user clears and fills the form with the new data '<edit-name>', '<edit-space>', and '<edit-status>'
        Then the user clicks the Cancel button and the table should not be updated
        Examples:
            | table-name| edit-name | edit-space | edit-status    |
            | table--1  | table--3  | Lo         | Out of Service |
            | table--2  | table--4  | Hall       | Open           |

    Scenario: Close editing the table
        When the user selects the 'Table & Space' menu
        And the user clicks 3dot icon of the table with name '<table-name>'
        And the user clicks the Edit button
        And the user clears and fills the form with the new data '<edit-name>', '<edit-space>', and '<edit-status>'
        Then the user clicks the Close button and the table should not be updated
        Examples:
            | table-name| edit-name | edit-space | edit-status    |
            | table--1  | table--3  | Lo         | Out of Service |
            | table--2  | table--4  | Hall       | Open           |

    Scenario: Edit the table
        When the user selects the 'Table & Space' menu
        And the user clicks 3dot icon of the table with name '<table-name>'
        And the user clicks the Edit button
        And the user clears and fills the form with the new data '<edit-name>', '<edit-space>', and '<edit-status>'
        Then the user clicks the Update button and the table should be updated successfully
        Examples:
            | table-name| edit-name | edit-space | edit-status    |
            | table--1  | table--3  | Lo         | Out of Service |
            | table--2  | table--4  | Hall       | Open           |
        
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
            | table--3   |
    
    Scenario: Download the QR Code
        When the user selects the 'Table & Space' menu
        And the user clicks QR Icon of the table with name '<table-name>'
        And the user clicks the Download Icon and should be downloaded successfully
        Examples:
            | table-name |
            | table--3  |

    Scenario: Print the QR Code
        When the user selects the 'Table & Space' menu
        And the user clicks QR Icon of the table with name '<table-name>'
        And the user clicks the Print Icon and should be printed successfully
        Examples:
            | table-name |
            | table--3   |

    Scenario: Download all the QRs of the tables
        When the user selects the 'Table & Space' menu
        Then the user clicks the Download All QRs button and should be downloaded successfully 
    
    Scenario: Request QR Code for your restaurant
        When the user selects the 'Table & Space' menu
        And the user clicks the Request QR Code button
        And the user clicks Yes, Confirm button to Confirm
        Then the request should be successfully sent

    Scenario: Cancel Request QR Code for your restaurant
        When the user selects the 'Table & Space' menu
        And the user clicks the Request QR Code button
        Then the user clicks Cancel button to Cancel and the request shouldnot be sent

    # Scenario: Search any Table
    #     When the user selects the 'Table & Space' menu
    #     And the user fills the search form with '<search-keyword>'
    #     Then the table with name '<table-name>' should appear containing '<search-keyword>'
    #     Examples:
    #         | search-keyword | table-name    |
    #         | ab             | abb           |
    #         | new            | new test      |