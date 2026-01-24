@perf
Feature: Performance and SEO validation

  Performance and SEO checks to ensure BlinkPay pages
  load efficiently and follow SEO best practices.

  Background:
    Given I open the BlinkPay homepage

  @critical
  Scenario: PERF_001 Verify page load time
    Then the page should load within acceptable time limits

  @critical
  Scenario: PERF_002 Verify no console errors
    Then the page should not have critical JavaScript console errors

  @critical
  Scenario: PERF_003 Verify meta title tags
    Then the page should have a valid and unique meta title

  @medium
  Scenario: PERF_004 Verify meta descriptions
    Then the page should have a meta description tag

  @medium
  Scenario: PERF_005 Verify canonical URLs
    Then the page should have a canonical URL defined

  @low
  Scenario: PERF_006 Verify robots.txt accessible
    Then the robots.txt file should be accessible

  @low
  Scenario: PERF_007 Verify sitemap.xml accessible
    Then the sitemap.xml file should be accessible

  @medium
  Scenario: PERF_008 Verify 404 page
    Then a non-existent page should display a 404 response

  @critical
  Scenario: PERF_009 Verify HTTPS redirect
    Then HTTP traffic should redirect to HTTPS

  @critical
  Scenario: PERF_010 Verify no mixed content
    Then the page should not load insecure HTTP resources

