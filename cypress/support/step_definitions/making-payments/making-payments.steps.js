import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import MakingPaymentsPage from '../../pages/makingPaymentsPage.js'

/**
 * Navigation
 */
Given(
  'I open the Making Payments page',
  () => {
    MakingPaymentsPage.visit()
  }
)

/**
 * MP_001 – Page load
 */
Then(
  'the Making Payments page should load correctly',
  () => {
    cy.url().should('include', '/making-payments')
    cy.get('body').should('be.visible')
  }
)

/**
 * MP_002 – Title & heading
 */
Then(
  'the page should display the correct title and main heading',
  () => {
    cy.title().should('not.be.empty')
    MakingPaymentsPage.pageHeading().should('be.visible')
  }
)

/**
 * MP_003 – Intro content
 */
Then(
  'the making payments information should be displayed',
  () => {
    MakingPaymentsPage.introText().should('be.visible')
  }
)

/**
 * MP_004 – How It Works (responsive-safe)
 */
Then(
  'the How It Works section should explain the payment steps',
  () => {
    cy.viewport(1440, 900)

    MakingPaymentsPage.howItWorksSection()
      .should('exist')

    MakingPaymentsPage.selectPaymentStep()
      .should('exist')

    MakingPaymentsPage.bankLoginStep()
      .should('exist')

    MakingPaymentsPage.reviewDetailsStep()
      .should('exist')
  }
)

/**
 * MP_005 – Consumer payment flow (animation-safe)
 */
Then(
  'the consumer payment flow content should be visible',
  () => {
    cy.scrollTo('center')

    MakingPaymentsPage.consumerFlowHeading()
      .should('be.visible')

    MakingPaymentsPage.bankConfirmationCard()
      .should('exist')

    MakingPaymentsPage.merchantNotificationCard()
      .should('exist')

    MakingPaymentsPage.finalConfirmationCard()
      .should('exist')
  }
)

/**
 * MP_006 – CTA buttons (desktop-only)
 */
Then(
  'all primary call to action buttons should be functional',
  () => {
    cy.viewport(1440, 900)

    MakingPaymentsPage.getStartedButton()
      .should('exist')
      .and('not.be.disabled')

    MakingPaymentsPage.getSupportButton()
      .should('exist')
  }
)

/**
 * MP_007 – Anchor link
 */
Then(
  'the How It Works anchor link should navigate correctly',
  () => {
    MakingPaymentsPage.howItWorksAnchor()
      .click({ force: true })

    cy.url().should('include', 'how-it-works')
  }
)
