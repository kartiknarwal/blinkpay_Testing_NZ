Feature: Support page

  Background:
    Given I open the Support page

  Scenario: SUP_001 Verify page loads successfully
    Then the Support page should load successfully

  Scenario: SUP_002 Verify page title and heading
    Then the Support page title should be correct
    And the Support heading should be visible

  Scenario: SUP_003 Verify FAQ section if present
    Then the FAQ section should be displayed if available

  Scenario: SUP_004 Verify support contact info
    Then support contact information should be displayed if available

  Scenario: SUP_005 Verify help resources
    Then help resources should be available
