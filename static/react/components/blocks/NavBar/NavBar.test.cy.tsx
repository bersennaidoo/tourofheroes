import NavBar from "./NavBar";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

// In order to have navigation accross the website
// As a developer
// I want a navigation bar with links to various pages
const routes = ['/tourofheroes/heroes', '/tourofheroes/villains', '/tourofheroes/boys']

describe('NavBar', () => {
  it('should navigate to the correct routes', () => {
    cy.mount(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    )

    cy.contains('p', 'Menu')
    cy.getByCy('menu-list').should("be.visible")

    routes.forEach((route: string) => {
      cy.get(`[href="${route}"]`)
        .click()
        .should('have.class', 'active-link')
        .siblings()
        .should('not.have.class', 'active-link')

      cy.url().should('contain', route)
    })
  })
})
