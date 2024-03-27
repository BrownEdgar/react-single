import React from 'react'
import Spinner from '../../../assets/spinner.svg'
import './Loader.scss'

export default function Loader() {
  return (
    <div className='Loader'>
      <img src={Spinner} alt="spinner" />
    </div>
  )
}
