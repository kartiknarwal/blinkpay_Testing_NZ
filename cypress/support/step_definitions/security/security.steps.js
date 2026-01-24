import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import SecurityPage from '../../pages/SecurityPage'

Given('the user navigates to the Security page', () => {
  SecurityPage.visit()
})

Then('the Security page should load successfully', () => {
  cy.url().should('include', '/security')
})

Then('the page title should contain BlinkPay branding', () => {
  cy.title()
    .should('include', 'BlinkPay')
    .and('include', 'ISO')
})


Then('the main security heading should be visible', () => {
  SecurityPage.mainHeading().should('be.visible')
})

Then('ISO 27001 certification details should be displayed', () => {
  SecurityPage.isoCertification().should('be.visible')
})

Then('all key security features should be listed', () => {
  SecurityPage.securityFeaturesSection().should('be.visible')
})

Then('the No Screen Scraping explanation should be visible', () => {
  SecurityPage.noScreenScraping().should('be.visible')
})

Then('bank approval and partnership information should be visible', () => {
  SecurityPage.bankPartnerships().should('be.visible')
})

Then('penetration testing and audit information should be present', () => {
  cy.contains('Independent Annual Audits and Penetration Tests')
    .should('exist')
})

Then('the BSI certification link should be visible and clickable', () => {
  SecurityPage.bsiLink()
    .should('be.visible')
    .and('have.attr', 'href')
})
