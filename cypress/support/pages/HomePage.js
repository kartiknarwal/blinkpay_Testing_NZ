class HomePage {

  visit() {
    cy.visit('/', { failOnStatusCode: false })
    cy.get('body').should('be.visible')
  }

  /* ---------- HERO ---------- */

  heroHeading() {
    return cy.contains('h1', 'Accept Online Payments')
  }

  heroSubHeading() {
    return cy.contains('Fast, Secure')
  }

  /* ---------- CTA ---------- */

  getStartedBtn() {
    return cy.contains('Get Started')
  }

  talkToTeamBtn() {
    return cy.contains('Talk to our team')
  }

  /* ---------- SECTIONS ---------- */

  whyChooseSection() {
    return cy.contains('Why Choose BlinkPay')
  }

  pricingValue() {
    return cy.contains('0.95%')
  }

  developerSection() {
    return cy.contains('Developer')
  }

  /* ---------- BANK LOGOS ---------- */

  bankLogos() {
    return cy.get('img[alt*="bank"], img[src*="bank"]')
  }

  /* ---------- TESTIMONIALS ---------- */

  testimonialsSection() {
    return cy.get('section').contains('Sharesies')
  }

  /* ---------- MEDIA ---------- */

  images() {
    return cy.get('img')
  }

  /* ---------- META ---------- */

  verifyMetaTags() {
    cy.get('meta[name="description"]').should('exist')
    cy.get('meta[property="og:title"]').should('exist')
    cy.get('meta[property="og:description"]').should('exist')
  }
}

export default new HomePage()
