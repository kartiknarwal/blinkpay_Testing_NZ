@a11y
Feature: Accessibility (A11Y) validation

  Accessibility checks to ensure the BlinkPay website is usable
  for keyboard users, screen readers, and assistive technologies.

  Background:
    Given I open the BlinkPay homepage

  @critical
  Scenario: A11Y_001 Verify keyboard navigation
    Then all interactive elements should be accessible using keyboard navigation

  @critical
  Scenario: A11Y_002 Verify focus indicators
    Then focused elements should have visible focus indicators

  @critical
  Scenario: A11Y_003 Verify alt text on images
    Then all visible images should have alt text

  @medium
  Scenario: A11Y_004 Verify heading hierarchy
    Then the page should follow a proper heading hierarchy

  @critical @known-limitation
  Scenario: A11Y_005 Verify color contrast
    Then text color contrast should follow design standards

  @critical
  Scenario: A11Y_006 Verify form labels
    Then all form inputs should have associated labels

  @medium
  Scenario: A11Y_007 Verify ARIA labels
    Then interactive elements should have accessible ARIA labels

  @low
  Scenario: A11Y_008 Verify skip links
    Then a skip to content link should be available

  @medium @known-limitation
  Scenario: A11Y_009 Verify screen reader compatibility
    Then the page should use semantic HTML for screen readers
