import { Then } from '@badeball/cypress-cucumber-preprocessor'

/**
 * Helper: validate external link href contains expected domain
 */
const validateExternalLink = (selector, expectedDomain) => {
  cy.get(selector)
    .should('have.attr', 'href')
    .and('include', expectedDomain)
}

/* ---------------- BANK & PLATFORM LINKS ---------------- */

Then(
  'the ANZ bank link should point to the correct external page',
  () => {
    validateExternalLink('a[href*="anz"]', 'anz')
  }
)

Then(
  'the ASB bank link should point to the correct external page',
  () => {
    validateExternalLink('a[href*="asb"]', 'asb')
  }
)

Then(
  'the BNZ bank link should point to the correct external page',
  () => {
    validateExternalLink('a[href*="bnz"]', 'bnz')
  }
)

Then(
  'the Westpac bank link should point to the correct external page',
  () => {
    validateExternalLink('a[href*="westpac"]', 'westpac')
  }
)

Then(
  'the Status Page link should point to the correct external page',
  () => {
    validateExternalLink('a[href*="statuspage.io"]', 'statuspage.io')
  }
)

Then(
  'the Careers link should point to the correct external page',
  () => {
    validateExternalLink('a[href*="breezy.hr"]', 'breezy.hr')
  }
)

Then(
  'the GitHub link should point to the correct external page',
  () => {
    validateExternalLink('a[href*="github.com"]', 'github.com')
  }
)

Then(
  'the BSI certification link should point to the correct external page',
  () => {
    validateExternalLink('a[href*="bsi"]', 'bsi')
  }
)

/* ---------------- EXT_009 ---------------- */

/**
 * EXT_009 – External links open in new tab
 * Only validates footer / reference links, not CTA buttons
 */
Then(
  'all external links should open in a new tab',
  () => {
    cy.get('footer a[href^="http"]').each($link => {
      cy.wrap($link)
        .should('have.attr', 'target')
        .and('eq', '_blank')
    })
  }
)

/* ---------------- EXT_010 ---------------- */

/**
 * EXT_010 – No broken external links
 * Soft validation to avoid third-party flakiness
 */
/**
 * EXT_010 – No broken external links
 * Banking domains intentionally excluded from HTTP checks
 * to avoid false failures due to bot protection.
 */
Then(
  'all external links should return successful responses',
  () => {
    const excludedDomains = [
      'asb.co.nz',
      'anz.co.nz',
      'bnz.co.nz',
      'westpac.co.nz',
    ]

    cy.get('a[href^="http"]').each($link => {
      const url = $link.attr('href')
      if (!url) return

      // Basic integrity checks (always enforced)
      expect(url).to.match(/^https?:\/\//)

      const isExcluded = excludedDomains.some(domain =>
        url.includes(domain)
      )

      if (isExcluded) {
        cy.log(`Skipping HTTP check for protected domain: ${url}`)
        return
      }

      cy.request({
        url,
        failOnStatusCode: false,
        timeout: 10000,
      }).then(response => {
        expect(
          response.status,
          `External link returned ${response.status}: ${url}`
        ).to.be.lessThan(400)
      })
    })
  }
)
