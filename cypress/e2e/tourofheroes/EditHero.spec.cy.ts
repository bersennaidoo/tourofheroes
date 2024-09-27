describe("Edit hero", () => {

    beforeEach(() => cy.visit("/tourofheroes"))

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