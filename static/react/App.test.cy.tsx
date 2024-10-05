import App from "./App";

describe("ct sanity", () => {
  it("should render the App", () => {
    cy.intercept("GET", "/api/heroes").as("getHeroes");

    cy.mount(<App />);

    cy.getByCy("not-found").should("be.visible");

    cy.contains("Heroes").click();
    cy.getByCy("heroes").should("be.visible");
  });
});
