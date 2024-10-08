// User acceptance tests for Heroes feature
// Create, View, Delete, Update

describe("Heroes", () => {

    beforeEach(() =>  
        cy.visit("http://localhost:8888"))

    // A user wants to see the home page
    it("should show the home page", () => {

        // user visits home page

        // it contains a link to tour of heroes page
        cy.get("header").contains(/TOUR/)
    })

    // A user creates a hero
    it("should create a hero", () => {

        // user visit /tourofheroes/heroes
        cy.getByCy("navLink").click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes")

        cy.getByCy("add-button").click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes/add-hero")
        cy.getByCy("hero-detail").should("be.visible")

        cy.getByCy("refresh-button").click()
        cy.location("pathname").should("eq", "/tourofheroes/heroes")
        cy.getByCy("hero-list").should("be.visible")
    })

    it("should delete a hero", () => {

        // user deletes hero
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
        cy.get("header").contains(/TOUR/)
    })

    // A user creates a boy
    it("should create a boy", () => {

        // user visit /tourofheroes/boy
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

        // it contains a link to tour of heroes page
    })

    // A user creates a villain
    it("should create a villain", () => {

        // user visit /tourofheroes/villain

        // A form should be visible

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
