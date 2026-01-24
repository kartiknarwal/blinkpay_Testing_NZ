Feature: Resources - Open Banking page

  Background:
    Given I open the Resources Open Banking page

  @critical
  Scenario: OB_001 Verify page loads successfully
    Then the Resources Open Banking page should load successfully

  @high
  Scenario: OB_002 Verify page title and heading
    Then the Resources Open Banking page title should be correct
    And the Open Banking main heading should be visible

  @high
  Scenario: OB_003 Verify open banking explanation
    Then the open banking explanation section should be visible

  @medium
  Scenario: OB_004 Verify NZ bank information
    Then the New Zealand banking context should be displayed

  @medium
  Scenario: OB_005 Verify benefits section
    Then the open banking benefits section should be visible

  @medium
  Scenario: OB_006 Verify regulation information
    Then the regulatory information section should be visible
