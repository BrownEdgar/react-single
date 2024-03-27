import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { News, Post, Services, Store, Work } from './Pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import ROUTES from './routes'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<News />} />
        <Route path={ROUTES.POSTS} element={<Services />} />
        <Route path={ROUTES.WORK} element={<Work />} />
        <Route path={ROUTES.STORE} element={<Store />} />
        <Route path={ROUTES.POST} element={<Post />} />
        {/* <Route path='*' element={<ErrorPage />} /> */}
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit similique, soluta excepturi quibusdam laudantium nemo voluptatem reiciendis sequi adipisci.</p>
      </footer>

    </div>
  )
}
