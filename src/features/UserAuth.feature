Feature: User Authentication
  As a user
  I want to log in and log out
  So that I can access my account securely

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials "testuser" and "password123"
    And I click on "Login"
    Then I should be logged in successfully

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter invalid credentials "wronguser" and "wrongpass"
    And I click on "Login"
    Then I should see an error message "Invalid username or password"

  Scenario: Logging out
    Given I am logged in as "testuser"
    When I click on "Logout"
    Then I should be logged out and returned to the home page
