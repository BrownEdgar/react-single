import React from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'

const activeClassName = ({ isActive }) => isActive ? "active__link" : '';

const menuList = ['News', 'Posts', 'Work', 'Store', "Animals"]

export default function Navbar() {
  return (
    <header className='Navbar'>
      <div className="logo">
        <Link to={ROUTES.HOME}>
          KANT.
        </Link>
      </div>
      <nav>
        <ul>
          {menuList.map(elem => {
            const path = (elem === 'News')
              ? ROUTES.NEWS
              : `${ROUTES[elem.toUpperCase()]}`
            return <li key={elem}>
              <NavLink to={path} className={activeClassName}>{elem}</NavLink>
            </li>
          })}

        </ul>
      </nav>
    </header>
  )
}
