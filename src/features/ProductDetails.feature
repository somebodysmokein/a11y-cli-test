Feature: Product Details Page
  As a user
  I want to view product details
  So that I can decide whether to purchase a product

  Scenario: Viewing product details
    Given I am on the product details page of "iPhone 15"
    Then I should see the product description, ratings, and reviews

  Scenario: Adding a product to the cart
    Given I am on the product details page of "iPhone 15"
    When I click on "Add to Cart"
    Then the product should be added to the cart
