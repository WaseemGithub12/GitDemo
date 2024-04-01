Feature: End to End Ecommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to card
    And Validate the total prices
    Then Select the country, submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
        |name | gender |
        |bobz | Male   |
    Then Validate the forms behaviour
    And Select the Shop Page