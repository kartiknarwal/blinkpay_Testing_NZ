Feature: Header navigation

  As a user
  I want to use the header navigation
  So that I can navigate across the BlinkPay site

  # NAV_001
  Scenario: Header navigation is visible
    Given the user is on a desktop device
    Then the header navigation should be visible

  # NAV_002
  Scenario: Accepting Payments navigation works
    Given the user is on a desktop device
    When the user clicks the "Accepting Payments" nav link
    Then the URL should include "/accepting-payments"

  # NAV_003
  Scenario: Making Payments navigation works
    Given the user is on a desktop device
    When the user clicks the "Making Payments" nav link
    Then the URL should include "/making-payments"

  # NAV_004 + NAV_005
  Scenario: Resources dropdown opens and items are visible
    Given the user is on a desktop device
    When the user opens the Resources dropdown
    Then the Resources dropdown items should be visible

  # NAV_006
  Scenario: Security navigation works
    Given the user is on a desktop device
    When the user clicks the "Security" nav link
    Then the URL should include "/security"

  # NAV_007
  Scenario: Sign in button is visible and clickable
    Given the user is on a desktop device
    Then the Sign in button should be visible and clickable

  # NAV_008
Scenario: Get Started CTA works
  Given the user is on a desktop device
  Then the Get Started CTA should be visible and clickable


  # NAV_009
  Scenario: Logo click returns user to homepage
    Given the user is on a desktop device
    When the user navigates to a different page
    And the user clicks the site logo
    Then the user should be on the homepage

  # NAV_010
  Scenario: Mobile hamburger menu is visible
    Given the user is on a mobile device
    Then the hamburger menu should be visible

  # NAV_011
  Scenario: Mobile navigation opens
    Given the user is on a mobile device
    When the user opens the mobile menu
    Then the mobile navigation should be visible

  # NAV_012
  Scenario: Mobile navigation links work
    Given the user is on a mobile device
    When the user opens the mobile menu
    And the user clicks the "Security" mobile nav link
    Then the URL should include "/security"

  # NAV_013
  Scenario: Header remains visible on scroll
    Given the user is on a desktop device
    When the user scrolls down the page
    Then the header should remain visible
