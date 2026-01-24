class ContactUsPage {
  visit() {
    cy.visit('/contact-us');
  }

  heading() {
    return cy.contains('Contact Us');
  }

  emailField() {
    return cy.get('input[placeholder="Email"]');
  }

  firstNameField() {
    return cy.get('input[placeholder="First Name"]');
  }

  lastNameField() {
    return cy.get('input[placeholder="Last Name"]');
  }

  phoneField() {
    return cy.get('input[placeholder="Phone number"]');
  }

  organisationField() {
    return cy.get('input[placeholder="Organisation Name"]');
  }

  messageField() {
    return cy.get('textarea[placeholder="Message"]');
  }

  submitButton() {
    return cy.contains('Submit');
  }

  validationErrors() {
    return cy.get('[role="alert"], .error, .text-red-500');
  }

  requiredIndicators() {
    return cy.contains('*');
  }
}

export default new ContactUsPage();
