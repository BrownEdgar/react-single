import React from 'react'
import './Pagination.scss'
import classNames from 'classnames'

export default function Pagination({ total, perPage, setPage, page }) {
  return (
    <div className='Pagination'>
      <ul className='Pagination__list'>
        {
          new Array(Math.ceil(total / perPage))
            .fill()
            .map((_, index) => {
              return (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => setPage(index + 1)}
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
    </div>
  )
}
