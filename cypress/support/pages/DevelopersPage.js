class ResourcesDevelopersPage {
  visit() {
    cy.visit('/resources-developers');
  }

  // ✅ Page title (browser tab) – for DEV_002
  pageTitle() {
    return cy.title();
  }

  // ✅ Main visible heading (H1) – UI validation
  mainHeading() {
    return cy.contains('h1', 'Developer Resources');
  }

  // ✅ API docs CTA (button or link)
  apiDocsLink() {
    return cy.contains(/API docs|View API docs/i);
  }

  // ✅ SDK section heading
  sdkSection() {
    return cy.contains(/SDK Libraries|SDK/i, { matchCase: false });
  }

  // ✅ Example API request code block
  exampleApiBlock() {
    return cy.contains('Example API Request')
      .parentsUntil('section')
      .find('pre, code');
  }

  // ✅ Sandbox / testing environment info
  sandboxInfo() {
    return cy.contains(/sandbox/i);
  }

  // ✅ Webhook documentation section
  webhookInfo() {
    return cy.contains(/webhook/i);
  }

  // ✅ Entry points to API docs
  apiDocsEntryPoint() {
    return cy.contains(/API docs|Getting Started|View API docs/i);
  }

  // ✅ External developer links (GitHub, docs, etc.)
  externalDevLinks() {
    return cy.get('a[href*="github"], a[target="_blank"]');
  }
}

export default new ResourcesDevelopersPage();
