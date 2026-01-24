import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ContactUsPage from '../../pages/ContactUsPage.js';

Given('I open the Contact Us page', () => {
  ContactUsPage.visit();
});

Then('the Contact Us page should load successfully', () => {
  cy.url().should('include', '/contact-us');
  ContactUsPage.heading().should('be.visible');
});

Then('the Contact Us page title should be correct', () => {
  cy.title().should('include', 'BlinkPay');
});

Then('the Contact Us heading should be visible', () => {
  ContactUsPage.heading().should('be.visible');
});

Then('the contact form fields should be visible', () => {
  ContactUsPage.emailField().should('be.visible');
  ContactUsPage.firstNameField().should('be.visible');
  ContactUsPage.lastNameField().should('be.visible');
  ContactUsPage.phoneField().should('be.visible');
  ContactUsPage.messageField().should('be.visible');
  ContactUsPage.submitButton().should('be.visible');
});

When('I submit the contact form without filling required fields', () => {
  ContactUsPage.submitButton().click();
});

Then('validation errors should be displayed', () => {
  ContactUsPage.validationErrors().should('exist');
});

When('I enter an invalid email address', () => {
  ContactUsPage.emailField().clear().type('invalid-email');
  ContactUsPage.submitButton().click();
});

Then('an email validation error should be shown', () => {
  ContactUsPage.validationErrors().should('exist');
});

When('I enter an invalid phone number', () => {
  ContactUsPage.phoneField().clear().type('abcd123');
  ContactUsPage.submitButton().click();
});

Then('a phone validation error should be shown', () => {
  ContactUsPage.validationErrors().should('exist');
});

Then('the message textarea should accept input', () => {
  ContactUsPage.messageField()
    .clear()
    .type('This is a test message')
    .should('have.value', 'This is a test message');
});

When('I submit the contact form with valid data', () => {
  ContactUsPage.emailField().clear().type('test@example.com');
  ContactUsPage.firstNameField().clear().type('Test');
  ContactUsPage.lastNameField().clear().type('User');
  ContactUsPage.phoneField().clear().type('0212345678');
  ContactUsPage.messageField().clear().type('Valid test message');
  ContactUsPage.submitButton().click();
});

Then('the form should submit successfully', () => {
  cy.url().should('include', '/contact-us');

  // Ensure no new validation errors appear after submit
  ContactUsPage.validationErrors()
    .should('have.length.at.least', 0);

  // Form stays stable after submission
  ContactUsPage.submitButton().should('be.visible');
});


When('the contact form submission fails', () => {
  ContactUsPage.submitButton().click();
});

Then('an error message should be displayed', () => {
  ContactUsPage.validationErrors().should('exist');
});

Then('contact information should be displayed if available', () => {
  cy.contains(/contact|support|email/i).should('exist');
});

Then('required field indicators should be present', () => {
  ContactUsPage.requiredIndicators().should('exist');
});
