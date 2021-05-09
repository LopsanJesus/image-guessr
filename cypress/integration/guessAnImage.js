describe("guessAnImage", () => {
  const cityName = "Córdoba";

  it("user can click an image and type a word", () => {
    cy.visit("/play/level/1");

    cy.get("#close-modal-button").click();

    cy.get(".image").first().click();

    cy.get("input").type(cityName);

    cy.get("button#check-modal-button").click();

    cy.contains("1 / 12");

    cy.contains(cityName);
  });
});
