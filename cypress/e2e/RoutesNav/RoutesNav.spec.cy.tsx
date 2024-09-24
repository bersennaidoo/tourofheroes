describe("e2e sanity check", () => {

    it("should render header bar and nav bar", () => {
        cy.visit("/tourofheroes")
        cy.getByCy("nav-bar").should("be.visible")
        cy.getByCy("heroes").should("be.visible")
    })
    
    it("should direct-navigate to abour", () => {
        cy.visit("/about")
        cy.getByCy("about").contains("Lorem")
    })
})