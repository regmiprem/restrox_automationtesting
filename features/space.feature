Feature: Space Handling

    As an admin
    I want to manage my space sections
    so that I can organize my space

    Background:
    Given the user has logged in as 'Prem Regmi' Demo
    And the user selects the 'Table & Space'

    Scenario: Preview space page
        When the user clicks on 'Space' sub-menu
        Then the user should be able to see the 'Space' page

    Scenario: Create new space
        When the user clicks on 'Space' sub-menu
        And the user clicks and fills form for new space with name '<space-name>' and '<space-description>'
        And the user clicks on Save Space button
        Then the space has to be created successfully
        Examples:
        | space-name | space-description |
        | Space 1    | This is space 1   |
        | Space 2    | This is space 2   |

    Scenario: Try to create space without filling the form properly
        When the user clicks on 'Space' sub-menu
        And the user clicks on Save Space button without filling the form 
        Then the system throws alert message and space doesnot have to be created

    Scenario: Cancel creating space
        When the user clicks on 'Space' sub-menu
        And the user clicks and fills form for new space with name '<space-name>' and '<space-description>'
        Then the user clicks on Cancel button and the space doesnot have to be created
        Examples:
        | space-name | space-description |
        | Space 1    | This is space 1   |
        | Space 2    | This is space 2   |
    
    Scenario: Closes creating space
        When the user clicks on 'Space' sub-menu
        And the user clicks and fills form for new space with name '<space-name>' and '<space-description>'
        Then the user clicks on Close button and the space doesnot have to be created
        Examples:
        | space-name  | space-description |
        | Space--1    | This is space 1   |
        | Space--2    | This is space 2   |

    Scenario: Cancel editing space
        When the user clicks on 'Space' sub-menu
        And the user clicks 3dot icon of the space with name '<space-name>'
        And the user clicks on Edit button
        And the user clears the space name and space description
        And the user fills the form with new name '<edit-name>' and '<edit-description>'
        Then the user clicks Cancel button and the space doesnot get changed
        Examples:
        | space-name  | edit-name  | edit-description |
        | Space--2    | Space--1   | This is space 2  |

    Scenario: Close editing space
        When the user clicks on 'Space' sub-menu  
        And the user clicks 3dot icon of the space with name '<space-name>'
        And the user clicks on Edit button
        And the user clears the space name and space description
        And the user fills the form with new name '<edit-name>' and '<edit-description>'
        Then the user clicks Close button and the space doesnot get changed
        Examples:
        | space-name  | edit-name  | edit-description |
        | Space--2    | Space--1   | This is space 2  |
        
    Scenario: Update without any change
        When the user clicks on 'Space' sub-menu
        And the user clicks 3dot icon of the space with name '<space-name>'
        And the user clicks on Edit button
        And the user clicks on Update button
        Then the system throws Error message
        Examples:
        | space-name  |
        | Space--2    |

    Scenario: Edit space name
        When the user clicks on 'Space' sub-menu
        And the user clicks 3dot icon of the space with name '<space-name>'
        And the user clicks on Edit button
        And the user clears the space name
        And the user fills the form with new name '<edit-name>'
        And the user clicks on Update button
        Then the space should be updated successfully
        Examples:
        | space-name  | edit-name  |
        | Space--2    | Space--3   |
    
    Scenario: Edit space description
        When the user clicks on 'Space' sub-menu
        And the user clicks 3dot icon of the space with name '<space-name>'
        And the user clicks on Edit button
        And the user clears the space description
        And the user fills the form with new description '<edit-description>'
        And the user clicks on Update button
        Then the space should be updated successfully
        Examples:
        | space-name  | edit-description |
        | Space--3    | This is space 3  |
    
    Scenario: Edit space name and description
        When the user clicks on 'Space' sub-menu
        And the user clicks 3dot icon of the space with name '<space-name>'
        And the user clicks on Edit button
        And the user clears the space name and space description
        And the user fills the form with new name '<edit-name>' and '<edit-description>'
        And the user clicks on Update button
        Then the space should be updated successfully
        Examples:
        | space-name  | edit-name  | edit-description |
        | Space--3    | Space--4   | This is space 4  |
    
    Scenario: Cancel deleting space
        When the user clicks on 'Space' sub-menu
        And the user clicks 3dot icon of the space with name '<space-name>'
        And the user clicks on Delete button
        Then the user cancels to delete the space and the space shouldnot be deleted
        Examples:
        | space-name  |
        | Space--4    |

    Scenario: Delete space
        When the user clicks on 'Space' sub-menu
        And the user clicks 3dot icon of the space with name '<space-name>'
        And the user clicks on Delete button
        Then the user confirms to delete the space and the space should be deleted
        Examples:
        | space-name  |
        | Space--4    |