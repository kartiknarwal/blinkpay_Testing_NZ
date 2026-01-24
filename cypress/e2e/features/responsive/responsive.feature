Feature: Responsive and cross-browser validation

  Background:
    Given I open the BlinkPay homepage

  Scenario: RES_001 Verify mobile viewport (375px)
    When I set viewport to mobile
    Then the site should display correctly

  Scenario: RES_002 Verify tablet viewport (768px)
    When I set viewport to tablet
    Then the site should display correctly

  Scenario: RES_003 Verify desktop viewport (1024px)
    When I set viewport to desktop
    Then the site should display correctly

  Scenario: RES_004 Verify large desktop viewport (1440px)
    When I set viewport to large desktop
    Then the site should display correctly

  Scenario: RES_005 Verify mobile navigation
    When I set viewport to mobile
    Then the mobile navigation should work correctly

  Scenario: RES_006 Verify images are responsive
    Then images should scale correctly

  Scenario: RES_007 Verify text readability
    Then text should be readable on the page

  Scenario: RES_008 Verify touch targets
    When I set viewport to mobile
    Then buttons and links should be tap friendly

  Scenario: RES_009 Verify no horizontal scroll
    Then the page should not have horizontal scroll

  Scenario: RES_010 Verify Chromium browser support
    Then the site should run correctly in a Chromium browser

  Scenario: RES_011 Verify WebKit compatibility
    Then the site should run correctly in a WebKit compatible browser
