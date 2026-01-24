Feature: Resources - Developers page

  Background:
    Given I open the Resources Developers page

  @critical
  Scenario: DEV_001 Verify page loads successfully
    Then the Resources Developers page should load successfully

  @high
  Scenario: DEV_002 Verify page title and heading
  Then the Resources Developers page title should be correct

    And the main heading should be visible

  @high
  Scenario: DEV_003 Verify API documentation link
    Then the API documentation link should be visible and clickable

  @high
  Scenario: DEV_004 Verify SDK information
    Then the SDK information section should be present


  @medium
  Scenario: DEV_005 Verify code examples
    Then the example API request code block should be visible

  @high
  Scenario: DEV_006 Verify GitHub links
    Then the GitHub or external developer links should be visible

  @high
  Scenario: DEV_007 Verify sandbox info
    Then the sandbox or testing environment information should be visible

  @medium
  Scenario: DEV_008 Verify webhook documentation
    Then the webhook information section should be visible

  @medium
  Scenario: DEV_009 Verify OpenAPI specification link
    Then the OpenAPI or API specification link should be visible

