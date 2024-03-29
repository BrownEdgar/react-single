import React from 'react' 
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>      
    </div>
  )
}
