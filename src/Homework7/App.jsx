import React, { useState } from 'react' 
import Login from './Pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from '../Homework7/Navbar/Navbar'
import Developers from './Pages/Developers/Developers'
import Register from './Pages/Register/Register'
import {nanoid} from "nanoid"

export default function App() {
  const [users, setUsers] = useState([])
  
  const handleSubmit = (values,formik)=>{
    const user = {
      ...values,
      id: nanoid(7)
    }
    setUsers([...users, user])
    formik.resetForm()
  }


  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login users={users}/>}/>
        <Route path='/register' element={<Register handleSubmit={handleSubmit}/>}/>
        <Route path='/developers' element={<Developers/>}/>
      </Routes>      
    </div>
  )
}
