class ComplaintsPage {
  visit() {
    cy.visit('/complaints');
  }

  heading() {
    return cy.get('h1');
  }

  content() {
    return cy.get('main');
  }
}

export default new ComplaintsPage();
