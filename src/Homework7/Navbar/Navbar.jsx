import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ROUTES from "../routes"
import "./Navbar.scss"

const activeClassName = ({isActive}) => isActive ? "active__link" : "";
const menuList = ["Home","Developers","Lessons","Work","Contact","Register"]

export default function Navbar({ isLogin }) {
  const login = () =>{
    localStorage.setItem("login", true)
    window.location.href = "/"
  }

  const logout = () =>{
    localStorage.removeItem("login")
    window.location.href = "/"
  }

  return (
    <header className='Navbar'>
      <div className='home'>
        <Link to={ROUTES.HOME}>
          <img src="https://img.freepik.com/free-vector/gradient-programming-company-logo-template_23-2148807613.jpg?size=100&ext=jpg&ga=GA1.1.1700460183.1712448000&semt=ais" alt="" />
        </Link>
      </div>
      <nav>
        <ul>
          {
            menuList.map(elem=>{
              const path = (elem === "home")
                ? ROUTES.HOME
                : `${ROUTES[elem.toUpperCase()]}`
              return(
                <li key={elem}>
                  <NavLink to={path} className={activeClassName}>{elem}</NavLink>
                </li>
              )
            })
          }
          <li className="login log">
            <NavLink to={ROUTES.LOGIN}>Login</NavLink>
          </li>
          {
            isLogin
              ? <button onClick={logout}>Log Out</button>
              : <button onClick={login}>Log In</button>
          }
        </ul>
      </nav>
    </header>
  )
}

