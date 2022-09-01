Feature: Dish order Feature

As a waiter
I want to order a Dish
So that I can serve it to a customer

Scenario: Order placement of a single Dish
Given the user is a registered waiter
And the user is logged in
When the user selects customer 'customer a'
And the user selects the following dishes:
|dish|quantity|remarks|
|dish a|1|Good|
|dish b|2|Bad |
|dish c|3|Average|
|dish d|4|Good   |

And the user confirms the order 
Then the user should see following data in the order history
|dish|quantity|remarks|
|dish a|1|Good|
|dish b|2|Bad|
|dish c|3|Average|
|dish d|4|Good|


#orders, add order,customer tab,customre choosing,search dish,
#add and minus dish quantity,delete selected dish,write remarks,confirm order