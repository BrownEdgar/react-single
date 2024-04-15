import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from "../../routes"
import "./Home.scss"

export default function Home() {
  return (
    <div className='Home'>
      <h1>WELCOME</h1>
      <h2>Are you ready?</h2>
      <Link to={ROUTES.LOGIN}>GO</Link>
    </div>
  )
}
