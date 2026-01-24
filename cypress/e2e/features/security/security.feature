Feature: Security Page

  Background:
    Given the user navigates to the Security page

  @critical
  Scenario: Verify Security page loads successfully
    Then the Security page should load successfully

  @high
  Scenario: Verify Security page title and main heading
   Then the page title should contain BlinkPay branding

    And the main security heading should be visible

  @high
  Scenario: Verify ISO certification information
    Then ISO 27001 certification details should be displayed

  @high
  Scenario: Verify security features list
    Then all key security features should be listed

  @high
  Scenario: Verify No Screen Scraping content
    Then the No Screen Scraping explanation should be visible

  @medium
  Scenario: Verify bank approval and partnerships information
    Then bank approval and partnership information should be visible

  @medium
  Scenario: Verify penetration testing and audits information
    Then penetration testing and audit information should be present


  @medium
  Scenario: Verify BSI certification link
    Then the BSI certification link should be visible and clickable
