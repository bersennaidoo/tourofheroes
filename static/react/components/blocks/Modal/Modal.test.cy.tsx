import Modal from "./modal"

describe("ModalYesNo", () => {

    it("should", () => {

        cy.mount(<Modal />)

        cy.get("#modal-root").should("exist")
    })
})