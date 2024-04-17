import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayoutes() {
  const [isLogin, setIsLogin] = useState(window.localStorage.getItem("login"))
  return (
    <>
      <Navbar isLogin={isLogin}/>
      <Outlet context={isLogin}/>
    </>
  )
}
