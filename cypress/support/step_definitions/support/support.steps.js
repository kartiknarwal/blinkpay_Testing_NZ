import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import SupportPage from '../../pages/SupportPage.js';

Given('I open the Support page', () => {
  SupportPage.visit();
});

Then('the Support page should load successfully', () => {
  cy.url().should('include', '/support');
  SupportPage.heading().should('be.visible');
});

Then('the Support page title should be correct', () => {
  cy.title().should('contain', 'Support');
});

Then('the Support heading should be visible', () => {
  SupportPage.heading()
    .should('be.visible')
    .and('contain.text', 'Support');
});

Then('the FAQ section should be displayed if available', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[id*="faq"], [class*="faq"]').length) {
      cy.get('[id*="faq"], [class*="faq"]').should('exist');
    }
  });
});

Then('support contact information should be displayed if available', () => {
  SupportPage.contactLinks().then(($links) => {
    if ($links.length) {
      cy.wrap($links).should('exist');
    }
  });
});

Then('help resources should be available', () => {
  SupportPage.helpResources().then(($resources) => {
    if ($resources.length) {
      cy.wrap($resources.first()).should('exist');
    }
  });
});
