import Heroes from "./Heroes"
import { BrowserRouter } from "react-router-dom"

describe("Heroes", () => {

    it("should display hero list on render", () => {

        cy.mount(
            <BrowserRouter>
              <Heroes />
            </BrowserRouter>
        )

        cy.getByCy("hero-list").should("be.visible")

        cy.getByCy("add-button").click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes/add-hero")

        cy.getByCy("refresh-button").click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes")

        cy.getByCy("add-button").click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes/add-hero")
    })

    const invokeHeroDelete = () => {
        cy.getByCy("delete-button").first().click()
        cy.getByCy("modal-yes-no").should("be.visible")
    }

    it("should go through the modal flow", () => {

        cy.window()
          .its("console")
          .then((console) => cy.spy(console, "log").as("log"))

        cy.mount(
            <BrowserRouter>
              <Heroes />
            </BrowserRouter>
        )

        cy.getByCy("modal-yes-no").should("not.exist")

        cy.log("do not delete flow")
        invokeHeroDelete()
        cy.getByCy("button-no").click()
        cy.getByCy("modal-yes-no").should("not.exist")

        cy.log("delete flow")
        invokeHeroDelete()

        cy.getByCy("button-yes").first().click()
        cy.getByCy("modal-yes-no").should("not.exist")

        cy.get("@log").should("have.been.calledWith", "handleDeleteFromModal")
    })
})