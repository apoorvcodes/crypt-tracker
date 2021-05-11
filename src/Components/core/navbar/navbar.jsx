import React from 'react'
import { NavLink } from "react-router-dom"
import { FaBeer, FaBitcoin } from 'react-icons/fa';
import "./navbar.css";
function NavBar() {

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Crypto
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-items">
              <NavLink exact to="/" className="nav-links">
                Home
         </NavLink>
            </li>
            <li className="nav-items">
              <NavLink exact to="/crypto" className="nav-links">
                Crypto Data
         </NavLink>
            </li>
            <li className="nav-items">
              <NavLink exact to="/api" className="nav-links">
                Api Docs
         </NavLink>
            </li>
            <li className="nav-items">
              <NavLink exact to="/git" className="nav-links">
                Github Stats
            </NavLink>
            </li>
            <li className="nav-items">
              <NavLink exact to="/contact" className="nav-links">
                Contact
                    </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default NavBar;
