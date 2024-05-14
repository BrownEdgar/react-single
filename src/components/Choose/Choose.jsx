import React from 'react'
import './Choose.scss'
import { useSelector } from 'react-redux'
import { getAllItems } from '@f/chooseUs/chooseSlice'


export default function Choose() {
  const items = useSelector(getAllItems)
  return (
    <div className='Choose'>
      <h1 className='Title Choose__title'>Why Choose Us? version 2</h1>
      <p className='Choose__paragraph'>Need to send something on time? Delivery is process of transporting goods from a source location to a predefined destination.</p>

      <div className='Choose__block'>
        {
          items.map(elem => {

            return (
              <div key={elem.id} style={{ backgroundColor: `${elem.bgColor}` }}>
                <img src={elem.image} />
                <h2>{elem.title}</h2>
                <p>{elem.desc}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
