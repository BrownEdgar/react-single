import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import News from "./Pages/News/News";
import Contacts from "./Pages/Contacts/Contacts";
import { Route,Routes } from 'react-router-dom'

export default function App() {
  return(
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>
  )
}