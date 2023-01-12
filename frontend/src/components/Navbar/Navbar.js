import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='./src/' />
          <h1>Krsna</h1>
        </Link>

        <NavLink to='/About'>
          <h3>About</h3>
        </NavLink>

        <NavLink to='/Activities'>
          <h3>Activities</h3>
        </NavLink>

        <NavLink to='/Activities'>
          <h3>Information</h3>
        </NavLink>

        <NavLink to='/Activities'>
          <h3>login</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
