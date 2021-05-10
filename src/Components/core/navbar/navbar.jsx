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
       </div>
       </nav> 
     
    </>
  )
}

export default navbar
