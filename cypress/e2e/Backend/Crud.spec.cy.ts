describe("Backend e2e", () => {
  const apiUrl = "http://localhost:8888/api";

  type Hero = { id: string; name: string; description: string };
  type Villain = { id: string; name: string; description: string };

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

  const postRoute = (route: string, body: Hero | Villain | object) => {
    return cy.request({
      method: "POST",
      url: `${apiUrl}/${route}`,
      body,
    });
  };

  const editRoute = (route: string, body: Hero | Villain | object) => {
    return cy.request({
      method: "POST",
      url: `${apiUrl}/${route}`,
      body,
    });
  };

  const deleteRoute = (route: string) => {
    return cy.request({
      method: "DELETE",
      url: `${apiUrl}/${route}`,
    });
  };

  const resetHData = () => {
    return cy.request({
      method: "DELETE",
      url: `${apiUrl}/h/reset`,
    });
  };

  const seedHData = () => {
    const heroes: Hero[] = [
      {
        id: "HeroAslaug",
        name: "Aslaug",
        description: "warrior queen",
      },
      {
        id: "HeroBjorn",
        name: "Bjorn Ironside",
        description: "king of 9th century Sweden",
      },
      {
        id: "HeroIvar",
        name: "Ivar the Boneless",
        description: "commander of the Great Heathen Army",
      },
      {
        id: "HeroLagertha",
        name: "Lagertha the Shieldmaiden",
        description: "aka Hlaðgerðr",
      },
      {
        id: "HeroRagnar",
        name: "Ragnar Lothbrok",
        description: "aka Ragnar Sigurdsson",
      },
      {
        id: "HeroThora",
        name: "Thora Town-hart",
        description: "daughter of Earl Herrauðr of Götaland",
      },
    ];
    heroes.forEach((element) => {
      cy.request({
        method: "POST",
        url: `${apiUrl}/heroes`,
        body: element,
      });
    });
  };

  const resetVData = () => {
    return cy.request({
      method: "DELETE",
      url: `${apiUrl}/v/reset`,
    });
  };

  const seedVData = () => {
    const villains: Villain[] = [
      {
        id: "VillainMadelyn",
        name: "Madelyn",
        description: "the cat whisperer",
      },
      {
        id: "VillainHaley",
        name: "Haley",
        description: "pen wielder",
      },
      {
        id: "VillainElla",
        name: "Ella",
        description: "fashionista",
      },
      {
        id: "VillainLandon",
        name: "Landon",
        description: "Mandalorian mauler",
      },
    ];
    villains.forEach((element) => {
      cy.request({
        method: "POST",
        url: `${apiUrl}/villains`,
        body: element,
      });
    });
  };

  beforeEach(resetHData);
  beforeEach(seedHData);
  beforeEach(resetVData);
  beforeEach(seedVData);

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

  it("should create a new hero entity", () => {
    const newHero = { id: "Ragnarok", name: "Ragnar", description: "Lothbrok" };

    postRoute("heroes", newHero);
  });
});
