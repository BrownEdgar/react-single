import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='Navbar'>
      <div className="logo">
        <Link to="/">
          KANT.
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
