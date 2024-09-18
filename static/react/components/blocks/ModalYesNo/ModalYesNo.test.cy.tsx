import ModalYesNo from "./modal-yes-no"

describe("ModalYesNo", () => {

    it("should render the modal and call onClick handlers", () => {

        const message = "Are you sure?"

        cy.mount(<ModalYesNo message={message} onYes={cy.stub().as("onYes")} onNo={cy.stub().as("onNo")}/>)
        cy.get("#modal-root").should("exist")

        // get list of elements identified with the div tag
        // get last div 
        // within the last div get the header, section, footer, button and assert
        // your expectations
        cy.get("div")
          .last()
          .within(() => {
            cy.get("header").contains("Confirm")
            cy.get("section").contains(message)
            cy.get("footer")
            cy.getByCy("button-yes").contains("Yes")
            cy.getByCy("button-no").contains("No")
          })

          cy.getByCy("button-yes").click()
          cy.get("@onYes").should("be.called") 

          cy.getByCy("button-no").click()
          cy.get("@onNo").should("be.called")
    })

    it("should not render the modal with if conditional render is false", () => {

        function ParentComponent(): JSX.Element | boolean {
            return (
                false && (
                    <ModalYesNo 
                       message={"yo"}
                       onYes={cy.stub().as("onYes")}
                       onNo={cy.stub().as("onNo")}
                    />
                )
            )
        }

        cy.mount(<ParentComponent />)
        cy.getByCy("modal-yes-no").should("not.exist")
    })
})