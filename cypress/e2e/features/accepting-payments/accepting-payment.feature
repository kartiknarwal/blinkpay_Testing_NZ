@acceptingPayments
Feature: Accepting Payments Page

  Background:
    Given the user navigates to the Accepting Payments page

  @smoke
  Scenario: AP_001 Verify page loads successfully
    Then the Accepting Payments page should load successfully

  Scenario: AP_002 Verify hero section content
    Then the hero heading and description should be visible

  Scenario: AP_003 Verify payment challenge cards
    Then the payment challenge cards should be displayed

  Scenario: AP_004 Verify Xero Integration section
    Then the Xero Integration section should be displayed correctly

  Scenario: AP_005 Verify AutoPay section
    Then the AutoPay section should be visible

  Scenario: AP_006 Verify CTA buttons
    Then all primary CTA buttons should be visible

  Scenario: AP_007 Verify comparison tables
    Then the comparison tables should be displayed

  Scenario: AP_008 Verify How it works steps
    Then the how it works steps should be visible

  Scenario: AP_009 Verify testimonials section
    Then testimonials should be displayed

  Scenario: AP_010 Verify FAQ section
    Then the FAQ section should be available

  Scenario: AP_011 Verify section scrolling
    Then the user can scroll through key sections
