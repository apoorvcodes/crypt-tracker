import React from 'react'
import {NavLink} from "react-router-dom"
function navbar() {
  return (
    <>
     <nav className="navbar">
       <div className="nav-container">
         <NavLink exact to="/" className="nav-logo">
           Crypto 👛
         </NavLink>
         <ul>
           <li>
           <NavLink exact to="/" className="nav-links">
           Crypto 👛
         </NavLink>
           </li>
           <li>
           <NavLink exact to="/" className="nav-links">
           Crypto 👛
         </NavLink>
           </li>
           <li>
           <NavLink exact to="/" className="nav-links">
           Crypto 👛
         </NavLink>
           </li>
           <li>
           <NavLink exact to="/" className="nav-links">
           Crypto 👛
         </NavLink>
           </li>
         </ul>
       </div>
       </nav> 
     
    </>
  )
}

export default navbar
