Feature: Footer validation

  Background:
    Given the user visits the BlinkPay homepage
    And the user scrolls to the footer

  Scenario: FTR_001 Verify footer is displayed
    Then the footer should be visible

  Scenario: FTR_002 Verify footer logo
    Then the footer logo should be visible

  Scenario: FTR_003 Verify Solutions links
    Then all Solutions footer links should be present

  Scenario: FTR_004 Verify Resources links
    Then all Resources footer links should be present

  Scenario: FTR_005 Verify Company links
    Then all Company footer links should be present

  Scenario: FTR_006 Verify ISO certification badge
    Then the ISO certification badge should be visible

  Scenario: FTR_007 Verify copyright text
    Then the footer copyright text should be correct

  Scenario: FTR_008 Verify Terms link
    When the user clicks the Terms footer link
    Then the Terms page should load

  Scenario: FTR_009 Verify Privacy link
    When the user clicks the Privacy footer link
    Then the Privacy page should load

  Scenario: FTR_010 Verify Complaints link
    When the user clicks the Complaints footer link
    Then the Complaints page should load

  Scenario: FTR_011 Verify Acceptable Use Policy link
    When the user clicks the Acceptable Use Policy footer link
    Then the Acceptable Use Policy page should load

  Scenario: FTR_012 Verify Service Status link
    Then the Service Status link should open externally

  Scenario: FTR_013 Verify Careers link
    Then the Careers link should open externally

  Scenario: FTR_014 Verify GitHub SDK link
    Then the GitHub SDK link should open externally
