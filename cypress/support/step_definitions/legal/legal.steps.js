import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import TermsPage from '../../pages/TermsPage';
import PrivacyPage from '../../pages/PrivacyPage';
import ComplaintsPage from '../../pages/ComplaintsPage';

Given('I open the BlinkPay website', () => {
  cy.visit('/');
});

/* TERMS */
When('I open the Terms page', () => {
  TermsPage.visitTerms();
});

Then('the Terms page should load successfully', () => {
  cy.url().should('include', '/terms');
  TermsPage.heading().should('exist');
});

Then('the Terms content should be visible', () => {
  TermsPage.content().should('exist');
});

/* PRODUCT TERMS */
When('I open the Product Terms page', () => {
  TermsPage.visitProductTerms();
});

Then('the Product Terms page should load successfully', () => {
  cy.url().should('include', '/product-terms');
  TermsPage.heading().should('exist');
});

Then('the Product Terms content should be visible', () => {
  TermsPage.content().should('exist');
});

/* PRIVACY */
When('I open the Privacy page', () => {
  PrivacyPage.visit();
});

Then('the Privacy page should load successfully', () => {
  cy.url().should('include', '/privacy');
  PrivacyPage.heading().should('exist');
});

Then('the Privacy content should be visible', () => {
  PrivacyPage.content().should('exist');
});

/* COMPLAINTS */
When('I open the Complaints page', () => {
  ComplaintsPage.visit();
});

Then('the Complaints page should load successfully', () => {
  cy.url().should('include', '/complaints');
  ComplaintsPage.heading().should('exist');
});

Then('the Complaints content should be visible', () => {
  ComplaintsPage.content().should('exist');
});

/* ACCEPTABLE USE */
When('I open the Acceptable Use page', () => {
  cy.visit('/acceptable-use-policy');
});

Then('the Acceptable Use page should load successfully', () => {
  cy.url().should('include', '/acceptable-use-policy');
  cy.get('h1').should('exist');
});

Then('the Acceptable Use content should be visible', () => {
  cy.get('main').should('exist');
});

/* XERO FAQ */
When('I open the Xero FAQ page', () => {
  cy.visit('/xero-faq');
});

Then('the Xero FAQ page should load successfully', () => {
  cy.url().should('include', '/xero-faq');
  cy.get('h1').should('exist');
});

Then('the Xero FAQ content should be visible', () => {
  cy.get('main').should('exist');
});
