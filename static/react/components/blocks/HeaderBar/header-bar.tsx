import React, { FC } from "react";
import HeaderBarBrand from "../../blocks/HeaderBarBrand/header-bar-brand";

export default function HeaderBar() {
  return (
    <header data-cy="header-bar">
      <nav
        data-cy="nav-bar"
        className="navbar has-background-dark is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <HeaderBarBrand />
      </nav>
    </header>
  )
}
