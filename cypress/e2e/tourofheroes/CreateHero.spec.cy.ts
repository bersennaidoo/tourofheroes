describe("Create hero", () => {

    it("should go throug the refresh flow", () => {

        cy.intercept("GET", "http://localhost:8888/api/heroes").as("getHeroes")
        cy.visit("http://localhost:8888/tourofheroes")
        cy.wait("@getHeroes")
        cy.location("pathname").should("eq", "/tourofheroes/heroes")

        cy.getByCy("add-button").click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes/add-hero")
        cy.getByCy("hero-detail").should("be.visible")
        cy.getByCy("input-detail-id").should("not.exist")

        cy.getByCy("refresh-button").click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes")
        cy.getByCy("hero-list").should("be.visible")
    })


})