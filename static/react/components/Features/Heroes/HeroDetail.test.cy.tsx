import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import HeroDetail from "./HeroDetail";
import { Hero } from "../../../domain/models/Hero/Hero";
import { log } from "console";

describe("HeroDetail", () => {
  it("should handle Save", () => {
    const hero: Hero = { id: "", name: "", description: "" };

    cy.mount(
      <BrowserRouter>
        <HeroDetail hero={hero} />
      </BrowserRouter>
    );
    cy.window()
      .its("console")
      .then((console) => cy.spy(console, "log").as("log"));

    cy.getByCy("save-button").click();
    cy.get("@log").should("have.been.calledWith", "handleSave");
  });

  it("should handle Cancel", () => {
    const hero: Hero = { id: "", name: "", description: "" };

    cy.mount(
      <BrowserRouter>
        <HeroDetail hero={hero} />
      </BrowserRouter>
    );
    cy.window()
      .its("console")
      .then((console) => cy.spy(console, "log").as("log"));

    cy.getByCy("cancel-button").click();
    cy.get("@log").should("have.been.calledWith", "handleCancel");
  });

  it("should handle name change", () => {
    const hero: Hero = { id: "", name: "", description: "" };
    cy.mount(
      <BrowserRouter>
        <HeroDetail hero={hero} />
      </BrowserRouter>
    );

    const newHeroName = "abc";
    cy.getByCy("input-detail-name").type(newHeroName);
    cy.findByDisplayValue(newHeroName).should("be.visible");
  });

  it("should handle description change", () => {
    const hero: Hero = { id: "", name: "", description: "" };
    cy.mount(
      <BrowserRouter>
        <HeroDetail hero={hero} />
      </BrowserRouter>
    );

    const newHeroDescription = "123";
    cy.getByCy("input-detail-description").type(newHeroDescription);
    cy.findByDisplayValue(newHeroDescription).should("be.visible");
  });

  context("state: should verify the layout of the component", () => {
    it("id: false, name: false - should verify the minimal state of the component", () => {
      const hero: Hero = { id: "", name: "", description: "" };
      cy.mount(
        <BrowserRouter>
          <HeroDetail hero={hero} />
        </BrowserRouter>
      );

      cy.get("p").then(($el) => cy.wrap($el.text()).should("equal", ""));
      cy.getByCyLike("input-detail").should("have.length", 2);
      cy.getByCy("input-detail-id").should("not.exist");

      cy.findByPlaceholderText("e.g. Colleen").should("be.visible");
      cy.findByPlaceholderText("e.g. dance fight!").should("be.visible");

      cy.getByCy("save-button").should("be.visible");
      cy.getByCy("cancel-button").should("be.visible");
    });
  });
});
