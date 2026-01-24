class ResourcesOpenBankingPage {
  visit() {
    cy.visit('/resources-openbanking');
  }

  mainHeading() {
    return cy.contains(
      'Open Banking in New Zealand',
      { matchCase: false }
    );
  }

  openBankingExplanation() {
    return cy.contains(
      /open banking is transforming|what it means for your business/i
    );
  }

  nzBankingContext() {
    return cy.contains(
      /new zealand|nz|nz banks/i
    );
  }

  benefitsSection() {
    return cy.contains(
      /why nz businesses are switching to open banking/i
    );
  }

  regulationInfo() {
    return cy.contains(
      /regulatory|customer and product data act|cpd/i
    );
  }
}

export default new ResourcesOpenBankingPage();
