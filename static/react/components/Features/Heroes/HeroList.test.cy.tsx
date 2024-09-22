import HeroList from "./HeroList"
import { Hero } from "../../../models/Hero/Hero"
import heroes from "../../../../../cypress/fixtures/heroes.json"

describe("HeroList", () => {

    /*const heroes: Hero[] = [
        new Hero("HeroAslaug", "Aslaug", "warrior queen"),
        new Hero("HeroBjorn",  "Bjorn Ironside", "king of 9th century Sweden")
    ]*/

    it("should render the item layout", () => {

        cy.mount(<HeroList heroes={heroes} handleDeleteHero={cy.stub().as("handleDeleteHero")}/>)

        cy.getByCyLike("hero-list-item").should("have.length", heroes.length)
        cy.getByCy("hero-list-item-2")

        cy.getByCy("card-content")

        cy.contains(heroes[0].name)
        cy.contains(heroes[0].description)

        cy.get("footer")
          .first()
          .within(() => {
            cy.getByCy("delete-button")
            cy.getByCy("edit-button")
          })
    })

    context("handleDeleteHero, handleSelectHero", () => {

        beforeEach(() => {
            cy.window()
              .its("console")
              .then((console) => cy.spy(console, "log").as("log"))

            cy.mount(<HeroList heroes={heroes} handleDeleteHero={cy.stub().as("handleDeleteHero")} />)
        })

        it("should handle delete", () => {

            cy.getByCy("delete-button").click({multiple: true})
            cy.get("@handleDeleteHero").should("have.been.called")
        })

        it("should handle edit", () => {

            cy.getByCy("edit-button").click({multiple: true})
            cy.get("@log").should("have.been.calledWith", "handleSelectHero")
        })
    })
})