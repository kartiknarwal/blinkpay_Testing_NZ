class TermsPage {
  visitTerms() {
    cy.visit('/terms');
  }

  visitProductTerms() {
    cy.visit('/product-terms');
  }

  heading() {
    return cy.get('h1');
  }

  content() {
    return cy.get('main');
  }
}

export default new TermsPage();
