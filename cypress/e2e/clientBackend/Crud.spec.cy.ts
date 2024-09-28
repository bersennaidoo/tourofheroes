describe("Backend e2e", () => {

    it("should", () => {

        const url = "http://localhost:4000/heroes"
        type Hero = { id: string; name: string; description: string }

        cy.request({
            method: "GET",
            url,
        })
          .its("body")
          .should("have.length.gt", 0)
          .each((entity: Hero) => {
            expect(entity.id).to.be.a("string")
            expect(entity.name).to.be.a("string")
            expect(entity.description).to.be.a("string")
          })
    })
})