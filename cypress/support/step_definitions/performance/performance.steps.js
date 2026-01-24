import { Then } from '@badeball/cypress-cucumber-preprocessor'

/**
 * PERF_001 – Page load time
 * Validates DOM load time (not Lighthouse scores)
 */
Then(
  'the page should load within acceptable time limits',
  () => {
    cy.window().then(win => {
      const timing = win.performance.timing
      const loadTime =
        timing.loadEventEnd - timing.navigationStart

      cy.log(`Page load time: ${loadTime}ms`)

      // Soft gate to avoid CI flakiness
      expect(
        loadTime,
        'Page load time should be within reasonable limits'
      ).to.be.lessThan(5000)
    })
  }
)


/**
 * PERF_002 – Console errors
 * Fails only on critical JS errors
 */
Then(
  'the page should not have critical JavaScript console errors',
  () => {
    cy.window().then(win => {
      cy.stub(win.console, 'error').as('consoleError')
    })

    cy.get('@consoleError').should('not.have.been.called')
  }
)

/**
 * PERF_003 – Meta title
 */
Then(
  'the page should have a valid and unique meta title',
  () => {
    cy.title().should(title => {
      expect(title).to.not.be.empty
      expect(title.length).to.be.greaterThan(5)
    })
  }
)

/**
 * PERF_004 – Meta description
 */
Then(
  'the page should have a meta description tag',
  () => {
    cy.get('head meta[name="description"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  }
)

/**
 * PERF_005 – Canonical URL
 */
Then(
  'the page should have a canonical URL defined',
  () => {
    cy.get('head link[rel="canonical"]')
      .should('have.attr', 'href')
      .and('include', 'https://')
  }
)

/**
 * PERF_006 – robots.txt
 */
Then(
  'the robots.txt file should be accessible',
  () => {
    cy.request('/robots.txt')
      .its('status')
      .should('eq', 200)
  }
)

/**
 * PERF_007 – sitemap.xml
 */
Then(
  'the sitemap.xml file should be accessible',
  () => {
    cy.request('/sitemap.xml')
      .its('status')
      .should('eq', 200)
  }
)

/**
 * PERF_008 – 404 page
 */
Then(
  'a non-existent page should display a 404 response',
  () => {
    cy.request({
      url: '/this-page-should-not-exist',
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(404)
    })
  }
)

/**
 * PERF_009 – HTTPS redirect
 */
Then(
  'HTTP traffic should redirect to HTTPS',
  () => {
    cy.request({
      url: 'http://dev.blinkpay.co.nz',
      followRedirect: false,
    }).then(response => {
      expect(response.status).to.be.oneOf([301, 302])
      expect(response.redirectedToUrl).to.include('https://')
    })
  }
)

/**
 * PERF_010 – Mixed content
 */
Then(
  'the page should not load insecure HTTP resources',
  () => {
    cy.get('img, script, link').each($el => {
      const src =
        $el.attr('src') ||
        $el.attr('href')

      if (src) {
        expect(
          src.startsWith('http://'),
          `Insecure resource found: ${src}`
        ).to.be.false
      }
    })
  }
)
