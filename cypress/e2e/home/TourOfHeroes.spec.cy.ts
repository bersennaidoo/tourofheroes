// User acceptance tests for Heroes feature
// Create, View, Delete, Update

describe("Heroes", () => {

    // A user wants to see the home page
    it("should show the home page", () => {

        // user visits home page
        cy.visit("http://localhost:1313")

        // it contains a link to tour of heroes page
        cy.get("nav").contains("Tourofheroes")
    })

    // A user creates a hero
    it("should create a hero", () => {

        // user visit /tourofheroes/heroes
        cy.visit("http://localhost:1313/tourofheroes/heroes")

        // A form should be visible
        cy.get("form").should("be.visible")

        // user fills in form
        // user submits form

        // user should receive 'hero created" and redirected to hero detail 
        // page
    })

    it("should delete a hero", () => {

        // user deletes hero
    })

    it("should edit a hero", () => {

        // user edits a hero
    })
})

// User acceptance tests for Heroes feature
// Create, View, Delete, Update

describe("Boy", () => {

    // A user wants to see the home page
    it("should show the home page", () => {

        // user visits home page
        cy.visit("http://localhost:1313")

        // it contains a link to tour of heroes page
        cy.get("nav").contains("Tourofheroes")
    })

    // A user creates a boy
    it("should create a boy", () => {

        // user visit /tourofheroes/boy
        cy.visit("http://localhost:1313/tourofheroes/boy")

        // A form should be visible
        cy.get("form").should("be.visible")

        // user fills in form
        // user submits form

        // user should receive 'boy created" and redirected to boy detail 
        // page
    })

    it("should delete a boy", () => {

        // user deletes boy
    })

    it("should edit a boy", () => {

        // user edits a boy
    })
})

// User acceptance tests for Villain feature
// Create, View, Delete, Update

describe("Villain", () => {

    // A user wants to see the home page
    it("should show the home page", () => {

        // user visits home page
        cy.visit("http://localhost:1313")

        // it contains a link to tour of heroes page
        cy.get("nav").contains("Tourofheroes")
    })

    // A user creates a villain
    it("should create a villain", () => {

        // user visit /tourofheroes/villain
        cy.visit("http://localhost:1313/tourofheroes/villain")

        // A form should be visible
        cy.get("form").should("be.visible")

        // user fills in form
        // user submits form

        // user should receive 'villain created" and redirected to villain detail 
        // page
    })

    it("should delete a villain", () => {

        // user deletes villain
    })

    it("should edit a villain", () => {

        // user edits a villain
    })
})
