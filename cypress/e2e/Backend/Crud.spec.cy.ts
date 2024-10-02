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
  };

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

  const postRoute = (route: string, body: Hero) =>
    cy.request({
      method: "POST",
      url: `${apiUrl}/${route}`,
      body,
    });

  it("should create a new hero entity", () => {
    const newHero = { id: "Ragnarok", name: "Ragnar", description: "Lothbrok" };

    postRoute("heroes", newHero);

    getRoute("heroes")
      .its("body")
      .then((body: Hero[]) => {
        expect(body.at(-1)).to.deep.eq(newHero);
      });

      const editRoute = (route: string, body: Hero | object) => {
        return cy.request({
          method: "PUT",
          url: `${apiUrl}/${route}`,
          body
        })
      }

      const editedHero = { ...newHero, name: "Murat" }
      editRoute(`heroes/${editedHero.id}`, editedHero)
  });
});
