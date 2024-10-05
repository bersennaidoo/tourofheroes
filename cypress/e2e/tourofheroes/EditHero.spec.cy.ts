describe("Edit hero", () => {

    beforeEach(() => {
        cy.intercept("GET", "/api/heroes").as("getHeroes")
        cy.visit("http://localhost:8888/tourofheroes")
        cy.wait("@getHeroes")
        cy.location("pathname").should("eq", "/tourofheroes/heroes")
    })

    it("should go through the cancel flow", () => {

        cy.location("pathname").should("eq", "/tourofheroes/heroes")

        cy.getByCy("edit-button").first().click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes/edit-hero/HeroAslaug")
    })
    it("should go through the cancel flow for another hero", () => {
        
        cy.location("pathname").should("eq", "/tourofheroes/heroes")

        cy.getByCy("edit-button").eq(1).click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes/edit-hero/HeroBjorn")
    })
})