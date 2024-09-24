import React, { FC } from "react"
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  const linkIsActive = (link: {isActive: boolean}) =>
    link.isActive ? 'active-link' : ''

  return (
    <nav data-cy="nav-bar" className="column is-2 menu">
      <p className="menu-label">Menu</p>
      <ul data-cy="menu-list" className="menu-list">
        <NavLink to="/tourofheroes/heroes" className={linkIsActive}>
          Heroes
        </NavLink>
        <NavLink to="/tourofheroes/villains" className={linkIsActive}>
          Villains
        </NavLink>
        <NavLink to="/tourofheroes/boys" className={linkIsActive}>
          Boys
        </NavLink>
      </ul>
    </nav>
  )
}
