@mp
Feature: Making Payments page validation

  Validation of content, navigation, and CTAs
  on the Making Payments page.

  Background:
    Given I open the Making Payments page

  @critical
  Scenario: MP_001 Verify page loads successfully
    Then the Making Payments page should load correctly

  @high
  Scenario: MP_002 Verify page title and heading
    Then the page should display the correct title and main heading

  @high
  Scenario: MP_003 Verify payment process content
    Then the making payments information should be displayed

  @high
  Scenario: MP_004 Verify How It Works section
    Then the How It Works section should explain the payment steps

  @medium
  Scenario: MP_005 Verify consumer payment flow
    Then the consumer payment flow content should be visible

  @high
  Scenario: MP_006 Verify CTA buttons
    Then all primary call to action buttons should be functional

  @medium
  Scenario: MP_007 Verify anchor link navigation
    Then the How It Works anchor link should navigate correctly
