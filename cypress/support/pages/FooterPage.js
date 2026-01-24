class FooterPage {
  footer() {
    return cy.get("footer");
  }

  logo() {
    return cy.get("footer img[alt*='BlinkPay']");
  }

  isoBadge() {
    return cy.get("footer img[alt*='ISO']");
  }

  solutionsLinks() {
  return cy
    .get("footer")
    .contains("h4, h3, p", "Solutions")
    .closest("div")
    .find("a");
}

resourcesLinks() {
  return cy
    .get("footer")
    .contains("h4, h3, p", "Resources")
    .closest("div")
    .find("a");
}

companyLinks() {
  return cy
    .get("footer")
    .contains("h4, h3, p", "Company")
    .closest("div")
    .find("a");
}


  linkByText(text) {
    return cy.contains("footer a", text);
  }
}

export default new FooterPage();
