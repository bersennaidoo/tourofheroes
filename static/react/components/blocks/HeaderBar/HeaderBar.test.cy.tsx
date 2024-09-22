import React from "react"
import { BrowserRouter } from "react-router-dom"
import { mount } from "@cypress/react18"
import HeaderBar from "./header-bar"

describe('HeaderBar', () => {
    it('should render', () => {
      cy.mount(
        <BrowserRouter>
          <HeaderBar />
        </BrowserRouter>,
      )
      cy.getByCy('header-bar-brand')
    })
  })
  