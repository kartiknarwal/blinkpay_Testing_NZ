class PrivacyPage {
  visit() {
    cy.visit('/privacy');
  }

  heading() {
    return cy.get('h1');
  }

  content() {
    return cy.get('main');
  }
}

export default new PrivacyPage();
