import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function MainLayoutes() {
  const [isLogin, setIsLogin] = useState(window.localStorage.getItem('login'))
  return (
    <>

      <Navbar isLogin={isLogin} />

      <Outlet context={{ isLogin }} />

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit similique, soluta excepturi quibusdam laudantium nemo voluptatem reiciendis sequi adipisci.</p>
      </footer>
    </>
  )
}
