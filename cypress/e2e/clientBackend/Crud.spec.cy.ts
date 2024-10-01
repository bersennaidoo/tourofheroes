describe("Backend e2e", () => {
  const apiUrl = "http://localhost:8888/api";

  type Hero = { id: string; name: string; description: string };

  const assertProperties = (entity: Hero) => {
    expect(entity.id).to.be.a("string");
    expect(entity.name).to.be.a("string");
    expect(entity.description).to.be.a("string");
  };

  const getRoute = (route: string) => {
    return cy.request({
      method: "GET",
      url: `${apiUrl}/${route}`,
    });
  }

  it("should GET heroes and villains ", () => {
    getRoute("heroes")
      .its("body")
      .should("have.length.gt", 0)
      .each(assertProperties);

    getRoute("villains")
      .its("body")
      .should("have.length.gt", 0)
      .each(assertProperties);
  });
});
