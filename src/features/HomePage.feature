Feature: Home Page Product Listing and Filtering
  As a user
  I want to view and filter products
  So that I can find items of interest quickly

  Scenario: Displaying products on the home page
    Given I am on the home page
    Then I should see a list of products with images, titles, prices, and reviews

  Scenario: Filtering products by brand
    Given I am on the home page
    When I filter products by brand "Nike"
    Then I should see only products from brand "Nike"

  Scenario: Filtering products by price range
    Given I am on the home page
    When I filter products by price between "$50" and "$100"
    Then I should see only products within that price range

  Scenario: Filtering products by category
    Given I am on the home page
    When I filter products by category "Electronics"
    Then I should see only products in the "Electronics" category

  Scenario: Sorting products by price
    Given I am on the home page
    When I sort products by price "Low to High"
    Then the products should be displayed in ascending order of price

  Scenario: Sorting products by popularity
    Given I am on the home page
    When I sort products by popularity
    Then the products should be displayed in descending order of popularity
