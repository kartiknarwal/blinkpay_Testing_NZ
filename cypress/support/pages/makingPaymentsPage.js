class MakingPaymentsPage {

  visit() {
    cy.visit('/making-payments')
  }

  pageHeading() {
    return cy.contains('h1', 'Make Payments')
  }

  introText() {
    return cy.contains('Send instant payments')
  }

  howItWorksSection() {
    return cy.contains('How BlinkPay Works')
  }

  selectPaymentStep() {
    return cy.contains('Select BlinkPay at Checkout')
  }

  bankLoginStep() {
    return cy.contains('Bank Login')
  }

  reviewDetailsStep() {
    return cy.contains('Review Details')
  }

  consumerFlowHeading() {
    return cy.contains(
      'How Do You Know If Your Payment Was Successful'
    )
  }

  bankConfirmationCard() {
    return cy.contains('Bank Confirmation')
  }

  merchantNotificationCard() {
    return cy.contains('Merchant Notification')
  }

  finalConfirmationCard() {
    return cy.contains('Final Confirmation')
  }

  getStartedButton() {
    return cy.contains('Get Started with BlinkPay')
  }

  getSupportButton() {
    return cy.contains('Get Support')
  }

  howItWorksAnchor() {
    return cy.get('a[href*="how-it-works"]').first()
  }
}

export default new MakingPaymentsPage()
