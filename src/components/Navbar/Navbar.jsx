import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='Navbar'>
      <div className='logo'>
        <a href="/">
          <img src="https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1-580x387.jpg" alt="bakery" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/products">OUR PRODUCTS</Link>
          </li>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
          <li>
            <Link to="/contacts">CONTACT US</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}
