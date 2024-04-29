import React, { useEffect } from 'react'
import "./Modal.scss"

export default function Modal({ handleDelete, deleteElementById }) {

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains('Modal')) {
        handleDelete()
      }
    }
    window.addEventListener('click', handleClick)

    return () => {
      console.log('the end')
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className='Modal'>
      <div className='Modal__content'>
        <h2>Are you sure?</h2>
        <i className="bi bi-check-circle" onClick={deleteElementById}></i>
        <i className="bi bi-x-circle" onClick={handleDelete}></i>
      </div>
    </div>
  )
}
