@ext
Feature: External links validation

  External link checks to ensure BlinkPay redirects users
  safely and correctly to third-party platforms.

  Background:
    Given I open the BlinkPay homepage

  @medium
  Scenario: EXT_001 Verify ANZ bank link
    Then the ANZ bank link should point to the correct external page

  @medium
  Scenario: EXT_002 Verify ASB bank link
    Then the ASB bank link should point to the correct external page

  @medium
  Scenario: EXT_003 Verify BNZ bank link
    Then the BNZ bank link should point to the correct external page

  @medium
  Scenario: EXT_004 Verify Westpac bank link
    Then the Westpac bank link should point to the correct external page

  @medium
  Scenario: EXT_005 Verify Status Page link
    Then the Status Page link should point to the correct external page

  @low
  Scenario: EXT_006 Verify Careers link
    Then the Careers link should point to the correct external page

  @medium
  Scenario: EXT_007 Verify GitHub link
    Then the GitHub link should point to the correct external page

  @medium
  Scenario: EXT_008 Verify BSI certification link
    Then the BSI certification link should point to the correct external page

  @medium
  Scenario: EXT_009 Verify external links open in new tab
    Then all external links should open in a new tab

 @critical 
Scenario: EXT_010 Verify no broken external links
  Then all external links should return successful responses


