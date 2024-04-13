import React, { useEffect, useReducer } from 'react'
import blogReducer, { initialState } from './blogReducer'
import { Link } from 'react-router-dom'
import './Work.scss'
import axios from 'axios'
import DisplayDate from '../../components/DisplayDate/DisplayDate'

export default function Work() {
  const [state, dispatch] = useReducer(blogReducer, initialState)

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL)
      .then(res => dispatch({ type: "add_blogs", payload: res.data }))
  }, [])


  return (
    <div className='Work'>
      <div className="Work__header">
        <h1>OUR BLOG</h1>
      </div>
      <div className="Work__wrapper">
        {state.map(elem => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              <img src={elem.poster} />
              <h2>{elem.title}</h2>
              <DisplayDate date={elem.createdAt} format="DD-MMM-YYYY" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}