class AcceptingPaymentsPage {
  visit() {
    cy.visit("/accepting-payments");
  }

  pageContainer() {
    return cy.get("main");
  }

  // HERO
  heroHeading() {
    return cy.contains("Get Paid with BlinkPay");
  }

  // PAYMENT CHALLENGES
  paymentChallengesSection() {
    return cy.contains("What's Holding Your Payments Back?")
      .closest("section");
  }

  paymentChallengeItems() {
    return this.paymentChallengesSection()
      .find("h3");
  }

  // HOW IT WORKS
  howItWorksSection() {
    return cy.contains("Seamless Payments")
      .closest("section");
  }

  howItWorksItems() {
    return this.howItWorksSection()
      .find("h3");
  }

  // AUTOPAY
  autoPaySection() {
    return cy.contains("Blink AutoPay")
      .closest("section");
  }

  autoPayComparison() {
    return cy.contains("AutoPay vs Direct Debit")
      .closest("section");
  }

  autoPayComparisonRows() {
    return this.autoPayComparison()
      .find("div")
      .filter(":contains('Setup')");
  }

  // COMPETITION
  competitionSection() {
    return cy.contains("BlinkPay vs Competition")
      .closest("section");
  }

  competitionRows() {
    return this.competitionSection()
      .find("div")
      .filter(":contains('Settlement')");
  }

  // CTAs
  allCTAs() {
    return cy.get("a, button")
      .filter(":contains('Get')");
  }

  readyToSwitchSection() {
    return cy.contains("Ready to switch?")
      .closest("section");
  }

  // XERO
 xeroSection() {
  return cy.contains("Xero Integration")
    .closest("section");
}


  xeroSetupSteps() {
    return this.xeroSection()
      .find("h3");
  }

  xeroBenefits() {
    return this.xeroSection()
      .find("h3");
  }

  // TESTIMONIALS
  testimonialsSection() {
    return cy.contains("Trusted by Leading Kiwi Businesses")
      .closest("section");
  }

  testimonialItems() {
    return this.testimonialsSection()
      .find("p")
      .filter(":contains('BlinkPay')");
  }

  // FAQ
  faqSection() {
    return cy.contains("Frequently Asked Questions")
      .closest("section");
  }

  faqQuestions() {
    return this.faqSection()
      .find("button");
  }
}

export default new AcceptingPaymentsPage();
