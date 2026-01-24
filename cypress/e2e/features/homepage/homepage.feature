@homepage @smoke @regression
Feature: BlinkPay Homepage

  As a visitor
  I want to view the BlinkPay homepage
  So that I can understand the product and navigate further

  Background:
    Given the user is on the BlinkPay homepage

  @critical
  Scenario: HP_001 - Verify homepage loads successfully
    Then the homepage should load successfully
    And the page title should contain "BlinkPay"

  @smoke
  Scenario: HP_002 - Verify BlinkPay logo is visible
    Then the BlinkPay logo should exist

  Scenario: HP_003 - Verify hero section content
    Then the hero heading should be visible
    And the hero description should exist

  @critical
  Scenario: HP_004 - Verify Get Started Today button
    Then the Get Started Today button should exist and be enabled

  Scenario: HP_005 - Verify Talk to our team button
    Then the Talk to our team button should be visible
    When the user clicks on Talk to our team
    Then the user should be redirected to the contact page

  Scenario: HP_006 - Verify bank partner logos are displayed
    Then bank partner logos should be present

  Scenario: HP_007 - Verify bank partner logo links
    Then bank partner logos should have external links

  Scenario: HP_008 - Verify Sharesies testimonial section
    Then the Sharesies testimonial section should exist

  Scenario: HP_009 - Verify Sharesies impact statistics
    Then the Sharesies statistics should exist

  Scenario: HP_010 - Verify View Sharesies Case Study link
    When the user clicks on View Sharesies Case Study
    Then the case study page should open

  Scenario: HP_011 - Verify Why Choose BlinkPay section
    Then the Why Choose BlinkPay section should be visible

  Scenario: HP_012 - Verify benefit cards content
    Then benefit cards should exist

  Scenario: HP_013 - Verify statistics section
    Then the homepage statistics section should exist

  Scenario: HP_014 - Verify pricing section
    Then the pricing details should be displayed correctly

  Scenario: HP_015 - Verify customer testimonials carousel
    Then the testimonials carousel should exist

  Scenario: HP_016 - Verify testimonial carousel navigation
    Then the testimonials carousel should be interactive

  Scenario: HP_017 - Verify developer API section
    Then the developer API section should be visible

  Scenario: HP_018 - Verify Explore Our Developer Tools link
    When the user clicks on Explore Our Developer Tools
    Then the developer tools page should open

  Scenario: HP_019 - Verify security section content
    Then the security section should exist

  Scenario: HP_020 - Verify podcast section
    Then the podcast section should exist

  Scenario: HP_021 - Verify page load performance
    Then the homepage should load within acceptable time

  Scenario: HP_022 - Verify all images load correctly
    Then no broken images should be present on the homepage

  Scenario: HP_023 - Verify meta tags are present
    Then the homepage meta tags should be present
