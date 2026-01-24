import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import ResourcesDevelopersPage from '../../pages/DevelopersPage.js';

Given('I open the Resources Developers page', () => {
  ResourcesDevelopersPage.visit();
});

Then('the Resources Developers page should load successfully', () => {
  cy.url().should('include', '/resources-developers');
  ResourcesDevelopersPage.mainHeading().should('be.visible');
});

Then('the Resources Developers page title should be correct', () => {
  cy.title().should('include', 'BlinkPay');
  cy.title().should('match', /API|Developer|Docs/i);
});



Then('the main heading should be visible', () => {
  ResourcesDevelopersPage.mainHeading().should('be.visible');
});

Then('the API documentation link should be visible and clickable', () => {
  ResourcesDevelopersPage.apiDocsLink()
    .should('be.visible')
    .and('not.be.disabled');
});

Then('the SDK information section should be present', () => {
  ResourcesDevelopersPage.sdkSection().should('exist');
});


Then('the example API request code block should be visible', () => {
  ResourcesDevelopersPage.exampleApiBlock()
    .should('exist')
    .and('be.visible');
});

Then('the GitHub or external developer links should be visible', () => {
  ResourcesDevelopersPage.externalDevLinks()
    .should('have.length.greaterThan', 0);
});

Then('the sandbox or testing environment information should be visible', () => {
  ResourcesDevelopersPage.sandboxInfo().should('be.visible');
});

Then('the webhook information section should be visible', () => {
  ResourcesDevelopersPage.webhookInfo().should('be.visible');
});

// Then('the OpenAPI or API specification link should be visible', () => {
//   ResourcesDevelopersPage.openApiSpecLink().should('be.visible');
// });
Then('the OpenAPI or API specification link should be visible', () => {
  ResourcesDevelopersPage.apiDocsEntryPoint()
    .should('be.visible')
    .and('not.be.disabled');
});

