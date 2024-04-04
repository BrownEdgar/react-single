import React, { useState } from 'react' 
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import { Route, Routes } from 'react-router-dom'
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
      <Routes>
        <Route path='/' element={<Home users={users}/>}/>
        <Route path='/register' element={<Register  handleSubmit={handleSubmit}/>}/>
      </Routes>      
    </div>
  )
}
