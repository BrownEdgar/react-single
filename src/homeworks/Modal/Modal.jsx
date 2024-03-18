import React from 'react'
import "./Modal.scss"

export default function Modal({handleDelete, deleteElementById}) {
  return (
    <div className='Modal'>
      <div className='Modal__content'>
        <h2>Are you sure?</h2>
        <i class="bi bi-check-circle" onClick={deleteElementById}></i>
        <i class="bi bi-x-circle" onClick={handleDelete}></i>
      </div>
    </div>
  ) 
}
