import React, { useState } from 'react'
import "./Pagination.scss"
import classNames from "classnames"

export default function Pagination({postsPerPage, totalPosts, paginate, page}) {
  
  return (
    <div className='Pagination'>
      <nav>
        <ul>
          {
            new Array(Math.ceil(totalPosts / postsPerPage))
              .fill()
              .map((_,index)=>{
                return(
                  <li key={index}>
                    <a href="#"
                      onClick={()=>paginate(index + 1)}
                      className={classNames({
                        active: index == page - 1
                      })}
                    
                    >
                      {index + 1}
                    </a>
                  </li>
                )
              })
          }
        </ul>
      </nav>
    </div>
  )
}
