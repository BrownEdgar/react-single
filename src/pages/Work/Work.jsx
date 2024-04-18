import React, { useState, useEffect, useReducer } from 'react'
import blogReducer, { initialState } from './blogReducer'
import { Link, useSubmit } from 'react-router-dom'
import './Work.scss'
import axios from 'axios'
import DisplayDate from '../../components/DisplayDate/DisplayDate'
import Pagination from '../../components/Pagination/Pagination'

export default function Work() {
  const [state, dispatch] = useReducer(blogReducer, initialState)
  
  
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(9)
  const [loading, setLoading] = useState(false)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage
  const currentPosts = state.slice(indexOfFistPost, indexOfLastPost)
  
  useEffect(() => {
    setLoading(true)
    axios(import.meta.env.VITE_DB_URL)
    .then(res => dispatch({ type: "add_blogs", payload: res.data }))
    .finally(()=>{
      setTimeout(setLoading, 600, false);
    })
  }, [currentPage,postsPerPage])
  const paginate = (pageNumber) =>{setCurrentPage(pageNumber)}
  return (
    <div className='Work'>
      <div className="Work__header">
        <h1>OUR BLOG</h1>
      </div>
      <div className="Work__wrapper">
        {currentPosts.map(elem => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              <img src={elem.poster} />
              <h2>{elem.title}</h2>
              <DisplayDate date={elem.createdAt} format="DD-MMM-YYYY" />
            </Link>
          )
        })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={state.length}
        paginate={paginate}
      />
    </div>
  )
}