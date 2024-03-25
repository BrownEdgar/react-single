import React from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './pages/News/News'
import Work from './pages/Work/Work'
import Services from './pages/Services/Services'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Store from './pages/Store/Store'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/services' element={<Services />} />
        <Route path='/work' element={<Work />} />
        <Route path='/store' element={<Store />} />
        {/* <Route path='*' element={<ErrorPage />} /> */}
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit similique, soluta excepturi quibusdam laudantium nemo voluptatem reiciendis sequi adipisci.</p>
      </footer>

    </div>
  )
}
