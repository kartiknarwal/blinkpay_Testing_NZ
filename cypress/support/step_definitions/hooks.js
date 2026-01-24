import { AfterStep } from "@badeball/cypress-cucumber-preprocessor";
import { Given } from "@badeball/cypress-cucumber-preprocessor";

AfterStep(function ({ pickleStep }) {
  const stepName = pickleStep.text.replace(/[^a-zA-Z0-9 ]/g, "");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  cy.screenshot(`${stepName}-${timestamp}`);
});
Given("the user visits the BlinkPay homepage", () => {
  cy.visit("/");
});