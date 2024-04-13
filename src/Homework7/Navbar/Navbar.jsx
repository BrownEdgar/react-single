import React from 'react'
import "./Navbar.scss"
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='Navbar'>
      <div className='logo'>
        <Link href="/">
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  )
}
