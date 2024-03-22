import React from 'react'
import './SimpleLoader.scss'
import Loader from '../../assets/simple_loader.svg'

export default function SimpleLoader() {
  return (
    <div className='SimpleLoader'>
      <img src={Loader} alt="Loader" />
    </div>
  )
}
