import React, { useState } from 'react'
import "./Pagination.scss"

export default function Pagination({postsPerPage, totalPosts, paginate}) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i+1)
  }
  const [activePage, setActivePage] = useState(1)

  const handlePageClick = (number) =>{
    setActivePage(number)
    paginate(number)
  }
  
  return (
    <div className='Pagination'>
      <nav>
        <ul>
          {
            pageNumbers.map((number,index)=>{
              return(
                <li key={index} onClick={()=>{
                  handlePageClick(number)
                  paginate(number)
                }}>
                  {number}
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}
