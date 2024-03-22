import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.scss'
import Pagination from '../../Lessons/pagination/Pagination';
import ReactPaginate from 'react-paginate';
import SimpleLoader from '../../Lessons/Loaders/SimpleLoader';


export default function App() {

  const [data, setData] = useState([]); //100
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(6);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: perPage,
        _start: (page * perPage) - perPage
      }
    })
      .then(res => setData(res.data))
      .finally(() => {
        setTimeout(setLoading, 600, false)
      })
  }, [page, perPage])

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)
  }

  return (
    <div className='App'>
      <div className="App__posts">

        {
          data.map(elem => {
            return (

              <div key={elem.id}>
                {loading
                  ? <SimpleLoader />
                  : (
                    <>
                      <h2>{elem.title}</h2>
                      <p>{elem.body}</p>
                    </>
                  )
                }

              </div>
            )
          })
        }
      </div>
      {/* <Pagination total={100} perPage={perPage} setPage={setPage} page={page} /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(100 / perPage)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='App__list'
      />
    </div>
  )
}
