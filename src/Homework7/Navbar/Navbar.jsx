import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ROUTES from "../routes"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <header className='Navbar'>
      <div className='home'>
        <Link to={ROUTES.HOME}>
          <img src="https://img.freepik.com/free-vector/gradient-programming-company-logo-template_23-2148807613.jpg?size=100&ext=jpg&ga=GA1.1.1700460183.1712448000&semt=ais" alt="" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.DEVELOPERS}>Developers</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.LESSONS}>Lessons</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.WORK}>Work</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT}>Contact Us</NavLink>
          </li>
          <li className="login log">
            <NavLink to={ROUTES.LOGIN}>Login</NavLink>
          </li>
          <li className='logout log'>
            <NavLink to={ROUTES.HOME}>Logout</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.REGISTER}>Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

