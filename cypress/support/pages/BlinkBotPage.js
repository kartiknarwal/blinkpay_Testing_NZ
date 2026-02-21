class BlinkBotPage {

  visit() {
    cy.visit('/contact-us');
  }

  // Bot launcher icon
  botIcon() {
    return cy.get('button').contains('B').first();
  }

  // Get iframe body
  getIframeBody() {
    return cy
      .get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  }

  greetingMessage() {
    return this.getIframeBody().contains('Hi there!');
  }

  inputBox() {
    return this.getIframeBody().get('textarea');
  }

  sendButton() {
    return this.getIframeBody().get('button[type="submit"]');
  }

  userMessage(msg) {
    return this.getIframeBody().contains(msg);
  }

  errorMessage() {
    return this.getIframeBody().contains(/error|failed/i);
  }

  closeButton() {
    return this.getIframeBody().get('button').contains('×');
  }

}

export default new BlinkBotPage();