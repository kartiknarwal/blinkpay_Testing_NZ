Feature: BlinkBot Chat Widget

  Background:
    Given I open the Homepage

  @critical
  Scenario: BB_001 Verify bot icon visible
    Then the chat bot icon should be visible

  @critical
  Scenario: BB_002 Verify chat window opens
    When I click the chat bot icon
    Then the chat window should open

  @high
  Scenario: BB_003 Verify greeting message
    When I open the chat window
    Then the greeting message should be visible

  @high
  Scenario: BB_004 Verify sending a message
    When I open the chat window
    And I send a message "Hello Bot"
    Then my message "Hello Bot" should appear
    And the bot should respond

  @medium
  Scenario: BB_005 Verify empty message not sent
    When I open the chat window
    And I try to send an empty message
    Then no new message should be added

  @medium
  Scenario: BB_006 Verify close button works
    When I open the chat window
    And I close the chat window
    Then the chat window should not be visible

  @high
  Scenario: BB_007 Verify API failure handling
    When I simulate bot API failure
    And I send a message "Test Failure"
    Then an error message should be displayed