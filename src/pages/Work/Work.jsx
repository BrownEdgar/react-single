import React, { useState, useEffect, useReducer } from 'react'
import blogReducer, { initialState } from './blogReducer'
import { Link } from 'react-router-dom'
import DisplayDate from '../../components/DisplayDate/DisplayDate'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import './Work.scss'

export default function Work() {
  const [state, dispatch] = useReducer(blogReducer, initialState)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(9)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios(import.meta.env.VITE_DB_URL,{
      params: {
        _limit: postsPerPage,
        _start: (currentPage* postsPerPage) - postsPerPage
      }
    })
    .then(res => dispatch({ type: "add_blogs", payload: res.data }))
    .finally(()=>{
      setTimeout(setLoading, 600, false);
    })
  }, [currentPage,postsPerPage])

  const handlePageClick = ({selected}) =>{setCurrentPage(selected + 1)}

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
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(50 / postsPerPage)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className='Work__list'
      />
    </div>
  )
}