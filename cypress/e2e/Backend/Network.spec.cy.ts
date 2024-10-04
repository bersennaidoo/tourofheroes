describe("Network requests", () => {
  it("should", () => {
    cy.intercept("GET", "http://localhost:8888/api/heroes").as("listHeroes");
    cy.visit("http://localhost:8888/tourofheroes");
    cy.wait("@listHeroes");
    cy.getByCy("heroes").should("be.visible");
    cy.getByCyLike("hero-list-item").should("have.length.gt", 0);
  });
});
