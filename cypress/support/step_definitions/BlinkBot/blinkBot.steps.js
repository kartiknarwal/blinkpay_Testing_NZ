import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BlinkBotPage from "../../pages/BlinkBotPage";

Given("I open the homepage", () => {
  cy.visit("/");
});

Then("the chat bot icon should be visible", () => {
  BlinkBotPage.botIcon().should("be.visible");
});

When("I click the chat bot icon", () => {
  BlinkBotPage.botIcon().click();
});

Then("the chat window should open", () => {
  BlinkBotPage.getIframeBody().should("be.visible");
});

When("I open the chat window", () => {
  BlinkBotPage.botIcon().click();
  BlinkBotPage.getIframeBody().should("be.visible");
});

Then("the greeting message should be visible", () => {
  BlinkBotPage.greetingMessage().should("be.visible");
});

When("I send a message {string}", (msg) => {
  BlinkBotPage.inputBox().type(msg);
  BlinkBotPage.sendButton().click();
});

Then("my message {string} should appear", (msg) => {
  BlinkBotPage.userMessage(msg).should("be.visible");
});

Then("the bot should respond", () => {
  BlinkBotPage.getIframeBody()
    .contains(/BlinkBot|Agent|Bot/i, { timeout: 10000 })
    .should("be.visible");
});

When("I try to send an empty message", () => {
  BlinkBotPage.sendButton().click();
});

Then("no new message should be added", () => {
  BlinkBotPage.getIframeBody()
    .find(".message")
    .should("have.length.lessThan", 2);
});

When("I close the chat window", () => {
  BlinkBotPage.closeButton().click();
});

Then("the chat window should not be visible", () => {
  cy.get("iframe").should("not.be.visible");
});

When("I simulate bot API failure", () => {
  cy.intercept("POST", "**/chat**", {
    statusCode: 500,
    body: { error: "Internal Server Error" }
  }).as("chatFail");

  BlinkBotPage.botIcon().click();
});

Then("an error message should be displayed", () => {
  BlinkBotPage.errorMessage().should("be.visible");
});