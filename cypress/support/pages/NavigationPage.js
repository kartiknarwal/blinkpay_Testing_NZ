class NavigationPage {
  header() {
    return cy.get("header");
  }

  navLink(text) {
    return cy.contains("header a", text, { matchCase: false });
  }

  /* ---------- RESOURCES ---------- */

  resourcesToggle() {
    return cy.contains("header a, header button", "Resources", {
      matchCase: false
    });
  }

  resourcesItems() {
    return cy
      .get("header")
      .find("a")
      .filter(":visible")
      .filter((_, el) => el.textContent.trim().length > 0);
  }

  /* ---------- AUTH & CTA ---------- */

  signInButton() {
  return cy.contains("header button, header a", "Sign in", {
    matchCase: false,
  });
}


  getStartedCTA() {
    return cy.contains("header a, header button", "Get Started", {
      matchCase: false
    });
  }

  /* ---------- LOGO ---------- */

  logo() {
    return cy.get("header").find("a[href='/']").first();
  }

  /* ---------- MOBILE ---------- */

  hamburgerMenu() {
    return cy
      .get("header")
      .find("button")
      .filter(":visible")
      .first();
  }

  mobileMenuContainer() {
  return cy.get("div[role='dialog'], div.fixed, div.absolute").filter(":visible");
}

  mobileNavLinks() {
    return cy
      .get("header")
      .find("a")
      .filter(":visible");
  }
}

export default new NavigationPage();
