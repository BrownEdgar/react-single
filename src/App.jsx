import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Animals, Blog, News, Post, Services, Store, Work } from './Pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import ROUTES from './routes'
import MainLayoutes from './Layouts/MainLayoutes'
import PrivateRoutes from './Layouts/PrivateRoutes'

export default function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<MainLayoutes />}>
          <Route index element={<News />} />
          <Route element={<PrivateRoutes />}>
            <Route path={ROUTES.POSTS} element={<Services />} />
            <Route path={ROUTES.WORK} element={<Work />} />
            <Route path={ROUTES.BLOG} element={<Blog />} />
            <Route path={ROUTES.STORE} element={<Store />} />
            <Route path={ROUTES.ANIMALS} element={<Animals />} />
            <Route path={ROUTES.POST} element={<Post />} />
          </Route>

          {/* <Route path='*' element={<ErrorPage />} /> */}
          <Route path='*' element={<Navigate to={'/'} />} />
        </Route>

      </Routes>


    </div>
  )
}
