import { Given, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import AcceptingPaymentsPage from "../../pages/AcceptingPaymentsPage.js";

Before({ tags: "@acceptingPayments" }, () => {
  AcceptingPaymentsPage.visit();
});

Given("the user navigates to the Accepting Payments page", () => {});

Then("the Accepting Payments page should load successfully", () => {
  AcceptingPaymentsPage.pageContainer().should("be.visible");
});

Then("the hero heading and description should be visible", () => {
  AcceptingPaymentsPage.heroHeading().should("be.visible");
});

Then("the payment challenge cards should be displayed", () => {
  AcceptingPaymentsPage.paymentChallengeItems()
    .should("have.length.at.least", 3);
});

Then("the Xero Integration section should be displayed correctly", () => {
  AcceptingPaymentsPage.xeroSection()
    .scrollIntoView()
    .should("be.visible");

  AcceptingPaymentsPage.xeroSetupSteps()
    .should("have.length.at.least", 4);

  AcceptingPaymentsPage.xeroBenefits()
    .should("have.length.at.least", 3);
});

Then("the AutoPay section should be visible", () => {
  AcceptingPaymentsPage.autoPaySection()
    .scrollIntoView()
    .should("be.visible");

  AcceptingPaymentsPage.autoPayComparison()
    .should("be.visible");
});

Then("all primary CTA buttons should be visible", () => {
  AcceptingPaymentsPage.allCTAs()
    .should("have.length.at.least", 2);
});

Then("the comparison tables should be displayed", () => {
  AcceptingPaymentsPage.autoPayComparison()
    .should("be.visible");

  AcceptingPaymentsPage.competitionSection()
    .should("be.visible");
});

Then("the how it works steps should be visible", () => {
  AcceptingPaymentsPage.howItWorksItems()
    .should("have.length.at.least", 3);
});

Then("testimonials should be displayed", () => {
  AcceptingPaymentsPage.testimonialItems()
    .should("have.length.at.least", 1);
});

Then("the FAQ section should be available", () => {
  AcceptingPaymentsPage.faqQuestions()
    .should("have.length.at.least", 3);
});

Then("the user can scroll through key sections", () => {
  AcceptingPaymentsPage.howItWorksSection()
    .scrollIntoView()
    .should("be.visible");

  AcceptingPaymentsPage.autoPaySection()
    .scrollIntoView()
    .should("be.visible");

  AcceptingPaymentsPage.xeroSection()
    .scrollIntoView()
    .should("be.visible");
});


