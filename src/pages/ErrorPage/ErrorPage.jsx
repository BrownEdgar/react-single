import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'

export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
      <h2>
        <em>404 | PAGE NOT FOUND </em>
      </h2>
      <Link to={'/'} className='link link__home'>Go home</Link>

    </div>
  )
}
