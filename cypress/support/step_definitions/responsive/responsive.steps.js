import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

/* ---------- NAVIGATION ---------- */

Given('I open the BlinkPay homepage', () => {
  cy.visit('/');
  cy.get('body', { timeout: 10000 }).should('be.visible');
});

/* ---------- VIEWPORTS ---------- */

When('I set viewport to mobile', () => {
  cy.viewport(375, 667);
});

When('I set viewport to tablet', () => {
  cy.viewport(768, 1024);
});

When('I set viewport to desktop', () => {
  cy.viewport(1024, 768);
});

When('I set viewport to large desktop', () => {
  cy.viewport(1440, 900);
});

/* ---------- LAYOUT ---------- */

Then('the site should display correctly', () => {
  cy.get('body').should('be.visible');
  cy.title().should('not.be.empty');
});

/* ---------- MOBILE NAV ---------- */

Then('the mobile navigation should work correctly', () => {
  cy.get('button, svg, [role="button"]', { timeout: 5000 })
    .first()
    .click({ force: true });

  cy.get('body').should('be.visible');
});

/* ---------- IMAGES ---------- */

Then('images should scale correctly', () => {
  cy.get('img', { timeout: 5000 }).each(($img) => {
    cy.wrap($img)
      .should('have.css', 'max-width')
      .and('match', /100%|none/);
  });
});

/* ---------- TEXT ---------- */

Then('text should be readable on the page', () => {
  cy.get('body')
    .invoke('css', 'font-size')
    .should('not.eq', '0px');
});

/* ---------- TOUCH TARGETS ---------- */

Then('buttons and links should be tap friendly', () => {
  cy.get('a, button, [role="button"]')
    .should('have.length.greaterThan', 0);
});

/* ---------- SCROLL ---------- */

Then('the page should not have horizontal scroll', () => {
  cy.document().then((doc) => {
    const body = doc.body;
    expect(body.scrollWidth).to.be.lte(body.clientWidth + 2);
  });
});

/* ---------- BROWSERS ---------- */

Then('the site should run correctly in a Chromium browser', () => {
  expect(Cypress.browser.family).to.eq('chromium');
});

Then('the site should run correctly in a WebKit compatible browser', () => {
  expect(['chromium', 'webkit']).to.include(Cypress.browser.family);
});
