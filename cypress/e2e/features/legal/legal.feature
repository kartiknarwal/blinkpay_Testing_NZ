Feature: Legal pages

  Background:
    Given I open the BlinkPay website

  Scenario: LEG_001 Verify Terms page loads
    When I open the Terms page
    Then the Terms page should load successfully

  Scenario: LEG_002 Verify Terms content displayed
    Then the Terms content should be visible

  Scenario: LEG_003 Verify Product Terms page loads
    When I open the Product Terms page
    Then the Product Terms page should load successfully

  Scenario: LEG_004 Verify Product Terms content
    Then the Product Terms content should be visible

  Scenario: LEG_005 Verify Privacy page loads
    When I open the Privacy page
    Then the Privacy page should load successfully

  Scenario: LEG_006 Verify Privacy content displayed
    Then the Privacy content should be visible

  Scenario: LEG_007 Verify Complaints page loads
    When I open the Complaints page
    Then the Complaints page should load successfully

  Scenario: LEG_008 Verify Complaints content
    Then the Complaints content should be visible

  Scenario: LEG_009 Verify Acceptable Use page loads
    When I open the Acceptable Use page
    Then the Acceptable Use page should load successfully

  Scenario: LEG_010 Verify Acceptable Use content
    Then the Acceptable Use content should be visible

  Scenario: LEG_011 Verify Xero FAQ page loads
    When I open the Xero FAQ page
    Then the Xero FAQ page should load successfully

  Scenario: LEG_012 Verify Xero FAQ content
    Then the Xero FAQ content should be visible
