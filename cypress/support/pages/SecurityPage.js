class SecurityPage {
  visit() {
    cy.visit('/security')
  }

  mainHeading() {
    return cy.contains('Bank-Grade Security for Open Banking Payments')
  }

  isoCertification() {
    return cy.contains('ISO/IEC 27001:2022')
  }

  securityFeaturesSection() {
    return cy.contains('Key Features of Our Security Approach')
  }

  noScreenScraping() {
    return cy.contains('Why Open Banking is Safer Than Screen Scraping')
  }

  bankPartnerships() {
    return cy.contains('Direct Bank Partnerships')
  }

  penetrationTesting() {
    return cy.contains('Independent Annual Audits and Penetration Tests')
  }

  bsiLink() {
    return cy.contains('View Certificate')
  }
}

export default new SecurityPage()
