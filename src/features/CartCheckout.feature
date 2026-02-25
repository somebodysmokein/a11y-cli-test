Feature: Shopping Cart and Checkout
  As a user
  I want to manage my shopping cart and complete checkout
  So that I can purchase products

@TCID_TC-7912
  Scenario: Viewing items in the cart
    Given I have added products to the cart
    When I go to the cart page
    Then I should see all the items I added

@TCID_TC-7913
  Scenario: Updating item quantity in the cart
    Given I have a product in the cart
    When I update the quantity to "2"
    Then the cart should reflect the updated quantity

@TCID_TC-7913
  Scenario: Removing an item from the cart
    Given I have a product in the cart
    When I remove the product
    Then the product should no longer be visible in the cart

  Scenario: Proceeding to checkout
    Given I have items in the cart
    When I click on "Checkout"
    Then I should be asked to enter my name, address, and payment method

  Scenario: Completing the checkout process
    Given I am on the checkout page
    When I fill in valid details and submit
    Then the order should be placed successfully
