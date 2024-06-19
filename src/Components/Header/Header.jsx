import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <div >
      <ul className="header">
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/'><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/about'><li> About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/contact'><li> Contact</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}}to='/myprojects'><li>My Project</li></NavLink>
      </ul>
      </div>
  )
}

export default Header