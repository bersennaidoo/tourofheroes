import HeroList from "./HeroList";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "../../../models/Hero/Hero";
import heroes from "../../../../../cypress/fixtures/heroes.json";

describe("HeroList", () => {
  /*const heroes: Hero[] = [
        new Hero("HeroAslaug", "Aslaug", "warrior queen"),
        new Hero("HeroBjorn",  "Bjorn Ironside", "king of 9th century Sweden")
    ]*/

  it("should render the item layout", () => {
    cy.mount(
      <BrowserRouter>
        <HeroList
          heroes={heroes}
          handleDeleteHero={cy.stub().as("handleDeleteHero")}
        />
      </BrowserRouter>
    );

    cy.getByCyLike("hero-list-item").should("have.length", heroes.length);
    cy.getByCy("hero-list-item-2");

    cy.getByCy("card-content");

    cy.contains(heroes[0].name);
    cy.contains(heroes[0].description);

    cy.get("footer")
      .first()
      .within(() => {
        cy.getByCy("delete-button");
        cy.getByCy("edit-button");
      });
  });

  context("handleDeleteHero, handleSelectHero", () => {
    beforeEach(() => {
      cy.window()
        .its("console")
        .then((console) => cy.spy(console, "log").as("log"));

      cy.mount(
        <BrowserRouter>
          <HeroList
            heroes={heroes}
            handleDeleteHero={cy.stub().as("handleDeleteHero")}
          />
        </BrowserRouter>
      );
    });

    it("should handle delete", () => {
      cy.getByCy("delete-button").first().click();
      cy.get("@handleDeleteHero").should("have.been.called");
    });

    it("should handle edit", () => {
      cy.getByCy("edit-button").click({ multiple: true });
      cy.get("@log").should("have.been.calledWith", "handleSelectHero");
    });
  });
});
