import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import ResourcesOpenBankingPage from '../../pages/OpenBankingPage.js';

Given('I open the Resources Open Banking page', () => {
  ResourcesOpenBankingPage.visit();
});

Then('the Resources Open Banking page should load successfully', () => {
  cy.url().should('include', '/resources-openbanking');
  ResourcesOpenBankingPage.mainHeading().should('be.visible');
});

Then('the Resources Open Banking page title should be correct', () => {
  cy.title().should('include', 'BlinkPay');
  cy.title().should('match', /Open Banking|API/i);
});

Then('the Open Banking main heading should be visible', () => {
  ResourcesOpenBankingPage.mainHeading().should('be.visible');
});

Then('the open banking explanation section should be visible', () => {
  ResourcesOpenBankingPage.openBankingExplanation()
    .should('exist');
});

Then('the New Zealand banking context should be displayed', () => {
  ResourcesOpenBankingPage.nzBankingContext()
    .should('exist');
});

Then('the open banking benefits section should be visible', () => {
  ResourcesOpenBankingPage.benefitsSection()
    .should('be.visible');
});

Then('the regulatory information section should be visible', () => {
  ResourcesOpenBankingPage.regulationInfo()
    .should('exist');
});
