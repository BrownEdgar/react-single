import React, { useEffect, useReducer } from 'react'
import blogReducer, { initialState } from './blogReducer'
import { Link } from 'react-router-dom'
import './Work.scss'
import axios from 'axios'

export default function Work() {
  const [state, dispatch] = useReducer(blogReducer, initialState)


  useEffect(() => {
    axios('http://localhost:3000/blogs')
      .then(res => dispatch({ type: "add_blogs", payload: res.data }))
  }, [])


  return (
    <div className='Work'>
      <div className="Work__header">
        <h1>BLOG</h1>
      </div>
      <div className="Work__wrapper">
        {state.map(elem => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              <img src={elem.poster} />
              <h2>{elem.title}</h2>
              <p>{elem.createdAt}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}