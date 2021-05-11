import React from 'react'
import {NavLink} from "react-router-dom"
import { FaBeer, FaBitcoin } from 'react-icons/fa';
function navbar() {

  return (
    <>
     <nav className="navbar">
       <div className="nav-container">
         <NavLink exact to="/" className="nav-logo">
           Crypto <FaBitcoin/>
         </NavLink>
         <ul>
           <li>
           <NavLink exact to="/" className="nav-links">
           Home
         </NavLink>
           </li>
           <li>
           <NavLink exact to="/" className="nav-links">
           Crypto Data
         </NavLink>
           </li>
           <li>
           <NavLink exact to="/" className="nav-links">
           Api Docs
         </NavLink>
           </li>
           <li>
           <NavLink exact to="/" className="nav-links">
           Contact
                    </NavLink>
           </li>
         </ul>
       </div>
       </nav> 
     
    </>
  )
}

export default navbar
