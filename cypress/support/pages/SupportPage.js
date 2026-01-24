class SupportPage {
  visit() {
    cy.visit('/support');
  }

  heading() {
    return cy.get('h1');
  }

  contactLinks() {
    return cy.get(
      'a[href*="contact"], a[href*="mailto"], a[href*="support"]',
      { timeout: 3000 }
    );
  }

  helpResources() {
    return cy.get('a', { timeout: 3000 });
  }
}

export default new SupportPage();
