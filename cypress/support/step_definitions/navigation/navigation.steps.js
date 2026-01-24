import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavigationPage from "../../pages/NavigationPage";

/* ---------- COMMON ---------- */

Given("the user is on a desktop device", () => {
  cy.viewport(1440, 900);
  cy.visit("/");
});

Given("the user is on the homepage", () => {
  cy.visit("/");
});

Then("the header navigation should be visible", () => {
  NavigationPage.header().should("be.visible");
});

When("the user clicks the {string} nav link", (linkText) => {
  NavigationPage.navLink(linkText)
    .should("be.visible")
    .click({ force: true });
});

Then("the URL should include {string}", (path) => {
  cy.url().should("include", path);
});

/* ---------- RESOURCES ---------- */

When("the user opens the Resources dropdown", () => {
  NavigationPage.resourcesToggle()
    .should("be.visible")
    .click({ force: true });
});

Then("the Resources dropdown items should be visible", () => {
  NavigationPage.resourcesItems()
    .should("have.length.greaterThan", 1);
});

/* ---------- AUTH & CTA ---------- */

Then("the Sign in button should be visible and clickable", () => {
  NavigationPage.signInButton()
    .should("be.visible")
    .and("not.be.disabled");
});

When("the user clicks the Get Started CTA", () => {
  NavigationPage.getStartedCTA()
    .should("be.visible")
    .click({ force: true });
});

Then("the Get Started CTA should be visible and clickable", () => {
  NavigationPage.getStartedCTA()
    .should("be.visible")
    .and("not.be.disabled");
});


/* ---------- LOGO ---------- */

When("the user navigates to a different page", () => {
  cy.visit("/security");
});

When("the user clicks the site logo", () => {
  NavigationPage.logo()
    .should("be.visible")
    .click({ force: true });
});

Then("the user should be on the homepage", () => {
  cy.url().should("eq", Cypress.config("baseUrl") + "/");
});

/* ---------- MOBILE ---------- */

Given("the user is on a mobile device", () => {
  cy.viewport("iphone-x");
  cy.visit("/");
});

Then("the hamburger menu should be visible", () => {
  NavigationPage.hamburgerMenu().should("be.visible");
});

When("the user opens the mobile menu", () => {
  NavigationPage.hamburgerMenu()
    .should("be.visible")
    .click({ force: true });
});

Then("the mobile navigation should be visible", () => {
  NavigationPage.mobileMenuContainer().should("be.visible");
});

When("the user clicks the {string} mobile nav link", (linkText) => {
  NavigationPage.mobileMenuContainer()
    .contains("a", linkText, { matchCase: false })
    .should("be.visible")
    .click();
});

/* ---------- SCROLL ---------- */

When("the user scrolls down the page", () => {
  cy.scrollTo("bottom");
});

Then("the header should remain visible", () => {
  NavigationPage.header().should("be.visible");
});
