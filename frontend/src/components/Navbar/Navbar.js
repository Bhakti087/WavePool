import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='https://icons8.com/icon/WBjVk3Xn9Kju/krishna' />
          <h1>Krsna</h1>
        </Link>

        <NavLink to='/About'>
          <h3>About</h3>
        </NavLink>

        <NavLink to='/Activities'>
          <h3>Activities</h3>
        </NavLink>

        <NavLink to='/Activities'>
          <h3>Activities</h3>
        </NavLink>

        <NavLink to='/Activities'>
          <h3>Activities</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
