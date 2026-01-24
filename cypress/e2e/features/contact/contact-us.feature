Feature: Contact Us page

  Background:
    Given I open the Contact Us page

  @critical
  Scenario: CU_001 Verify page loads successfully
    Then the Contact Us page should load successfully

  @high
  Scenario: CU_002 Verify page title and heading
    Then the Contact Us page title should be correct
    And the Contact Us heading should be visible

  @critical
  Scenario: CU_003 Verify contact form displayed
    Then the contact form fields should be visible

  @high
  Scenario: CU_004 Verify form validation on empty submit
    When I submit the contact form without filling required fields
    Then validation errors should be displayed

  @high
  Scenario: CU_005 Verify email validation
    When I enter an invalid email address
    Then an email validation error should be shown

  @medium
  Scenario: CU_006 Verify phone number validation
    When I enter an invalid phone number
    Then a phone validation error should be shown

  @high
  Scenario: CU_007 Verify message field functionality
    Then the message textarea should accept input

  @critical
  Scenario: CU_008 Verify form submission success
    When I submit the contact form with valid data
    Then the form should submit successfully

  @high
  Scenario: CU_009 Verify form submission error handling
    When the contact form submission fails
    Then an error message should be displayed

  @medium
  Scenario: CU_010 Verify contact information display
    Then contact information should be displayed if available

  @medium
  Scenario: CU_011 Verify required field indicators
    Then required field indicators should be present
