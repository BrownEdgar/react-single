import React, { useState } from 'react' 
import Login from './Pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Developers from './Pages/Developers/Developers'
import Lessons from "./Pages/Home/Home"
import Work from "./Pages/Home/Home"
import Contact from "./Pages/Home/Home"
import Register from './Pages/Register/Register'
import MainLayoutes from "./MainLayoutes"
import PrivateLayoutes from "./PrivateLayoutes"

export default function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainLayoutes/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route element={<PrivateLayoutes/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/developers' element={<Developers/>}/>
            <Route path='/lessons' element={<Lessons/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Route>
      </Routes>      
    </div>
  )
}
