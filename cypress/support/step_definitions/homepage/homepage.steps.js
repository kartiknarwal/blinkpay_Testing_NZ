import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../pages/HomePage'

/* ---------- NAVIGATION ---------- */

Given('the user is on the BlinkPay homepage', () => {
  HomePage.visit()
})

/* ---------- BASIC ---------- */

Then('the homepage should load successfully', () => {
  HomePage.heroHeading().should('be.visible')
})

Then('the page title should contain {string}', title => {
  cy.title().should('contain', title)
})

Then('the BlinkPay logo should exist', () => {
  cy.get('img[alt*="BlinkPay"]').should('exist')
})

/* ---------- HERO ---------- */

Then('the hero heading should be visible', () => {
  HomePage.heroHeading().should('be.visible')
})

Then('the hero description should exist', () => {
  HomePage.heroSubHeading().should('exist')
})

/* ---------- CTA ---------- */

Then('the Get Started Today button should exist and be enabled', () => {
  cy.viewport(1440, 900)

  HomePage.getStartedBtn()
    .should('exist')
    .and('not.be.disabled')
})

Then('the Talk to our team button should be visible', () => {
  HomePage.talkToTeamBtn().should('be.visible')
})

When('the user clicks on Talk to our team', () => {
  HomePage.talkToTeamBtn().click()
})

Then('the user should be redirected to the contact page', () => {
  cy.url().should('include', 'contact')
})

/* ---------- BANKS ---------- */

Then('bank partner logos should be present', () => {
  HomePage.bankLogos().should('have.length.greaterThan', 0)
})

Then('bank partner logos should have external links', () => {
  HomePage.bankLogos()
    .parents('a')
    .should('have.attr', 'href')
})

/* ---------- SHARESIES ---------- */

Then('the Sharesies testimonial section should exist', () => {
  cy.contains('Sharesies').should('exist')
})

Then('the Sharesies statistics should exist', () => {
  cy.scrollTo('center')
  cy.get('section').contains('%').should('exist')
})

When('the user clicks on View Sharesies Case Study', () => {
  cy.contains('View Sharesies').click({ force: true })
})

Then('the case study page should open', () => {
  cy.url().should('not.equal', Cypress.config().baseUrl)
})

/* ---------- CONTENT ---------- */

Then('the Why Choose BlinkPay section should be visible', () => {
  HomePage.whyChooseSection().should('be.visible')
})

Then('benefit cards should exist', () => {
  cy.contains('Faster').should('exist')
})

Then('the homepage statistics section should exist', () => {
  cy.get('section').contains('%').should('exist')
})

Then('the pricing details should be displayed correctly', () => {
  HomePage.pricingValue().should('be.visible')
})

/* ---------- TESTIMONIALS ---------- */

Then('the testimonials carousel should exist', () => {
  cy.contains('Sharesies').should('exist')
})

Then('the testimonials carousel should be interactive', () => {
  cy.get('button').should('exist')
})

/* ---------- DEV & SECURITY ---------- */

Then('the developer API section should be visible', () => {
  HomePage.developerSection().should('be.visible')
})

When('the user clicks on Explore Our Developer Tools', () => {
  cy.contains('Explore Our Developer Tools').click({ force: true })
})

Then('the developer tools page should open', () => {
  cy.url().should('include', 'developer')
})

Then('the security section should exist', () => {
  cy.contains('Security').should('exist')
})

Then('the podcast section should exist', () => {
  cy.contains('Podcast').should('exist')
})

/* ---------- PERFORMANCE ---------- */

Then('the homepage should load within acceptable time', () => {
  cy.window().then(win => {
    const time =
      win.performance.timing.loadEventEnd -
      win.performance.timing.navigationStart
    expect(time).to.be.lessThan(5000)
  })
})

Then('no broken images should be present on the homepage', () => {
  HomePage.images().each(img => {
    expect(img[0].naturalWidth).to.be.greaterThan(0)
  })
})

Then('the homepage meta tags should be present', () => {
  HomePage.verifyMetaTags()
})
