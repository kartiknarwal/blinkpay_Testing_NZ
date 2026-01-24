import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FooterPage from "../../pages/FooterPage.js";


Given("the user scrolls to the footer", () => {
  cy.scrollTo("bottom");
});

/* FTR_001 */
Then("the footer should be visible", () => {
  FooterPage.footer().should("be.visible");
});

/* FTR_002 */
Then("the footer logo should be visible", () => {
  FooterPage.logo().should("be.visible");
});

/* FTR_003 */
Then("all Solutions footer links should be present", () => {
  FooterPage.solutionsLinks().each(link => {
    cy.wrap(link).should("be.visible").and("have.attr", "href");
  });
});

/* FTR_004 */
Then("all Resources footer links should be present", () => {
  FooterPage.resourcesLinks().each(link => {
    cy.wrap(link).should("be.visible").and("have.attr", "href");
  });
});

/* FTR_005 */
Then("all Company footer links should be present", () => {
  FooterPage.companyLinks().each(link => {
    cy.wrap(link).should("be.visible").and("have.attr", "href");
  });
});

/* FTR_006 */
Then("the ISO certification badge should be visible", () => {
  FooterPage.isoBadge()
  .should("exist")
  .and("have.attr", "src");
});

/* FTR_007 */
Then("the footer copyright text should be correct", () => {
  FooterPage.footer()
    .should("contain.text", "Blink Pay Global Group Limited")
    .and("contain.text", "©");
});

/* FTR_008 */
When("the user clicks the Terms footer link", () => {
  FooterPage.linkByText("Terms").click();
});

Then("the Terms page should load", () => {
  cy.url().should("include", "terms");
});

/* FTR_009 */
When("the user clicks the Privacy footer link", () => {
  FooterPage.linkByText("Privacy").click();
});

Then("the Privacy page should load", () => {
  cy.url().should("include", "privacy");
});

/* FTR_010 */
When("the user clicks the Complaints footer link", () => {
  FooterPage.linkByText("Complaints").click();
});

Then("the Complaints page should load", () => {
  cy.url().should("include", "complaints");
});

/* FTR_011 */
When("the user clicks the Acceptable Use Policy footer link", () => {
  FooterPage.linkByText("Acceptable Use Policy").click();
});

Then("the Acceptable Use Policy page should load", () => {
  cy.url().should("include", "acceptable");
});

/* FTR_012 */
Then("the Service Status link should open externally", () => {
  FooterPage.linkByText("Service Status")
    .should("have.attr", "href")
    .and("include", "status");
});

/* FTR_013 */
Then("the Careers link should open externally", () => {
  FooterPage.linkByText("Careers")
    .should("have.attr", "href")
    .and("include", "breezy.hr");

});

/* FTR_014 */
Then("the GitHub SDK link should open externally", () => {
  FooterPage.linkByText("BlinkPay SDK")
    .should("have.attr", "href")
    .and("include", "github");
});
