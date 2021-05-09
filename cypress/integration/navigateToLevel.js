describe("navigateToLevel", () => {
  it("User can navigate to a level", () => {
    cy.visit("/");

    cy.get(".cta-play-button").click();

    cy.url().should("eq", "http://localhost:3000/play");

    cy.get("#level-1").click();

    cy.get("#close-modal-button").click();

    cy.contains("Nivel 1");
  });
});
