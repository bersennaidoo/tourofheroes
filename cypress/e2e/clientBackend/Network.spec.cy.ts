describe("Network requests", () => {
  it("should", () => {
    cy.intercept("GET", "http://localhost:4000/heroes").as("listHeroes");
    cy.visit("/tourofheroes");
    cy.wait("@listHeroes");
    cy.getByCy("heroes").should("be.visible");
    cy.getByCyLike("hero-list-item").should("have.length.gt", 0);
  });
});
