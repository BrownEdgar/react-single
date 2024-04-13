import React from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'

const activeClassName = ({ isActive }) => isActive ? "active__link" : '';

const menuList = ['News', 'Posts', 'Blogs', 'Store', "Animals", "add_blog"]

export default function Navbar({ isLogin }) {
  const login = () => {
    localStorage.setItem('login', true)
    window.location.href = '/'
  }
  const logOut = () => {
    localStorage.removeItem('login')
    window.location.href = '/'
  }


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
          <li>
            {
              isLogin
                ? <button onClick={logOut}>Log Out</button>
                : <button onClick={login}>Log in</button>
            }

          </li>
        </ul>
      </nav>
    </header>
  )
}
