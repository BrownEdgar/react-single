import classNames from 'classnames'
import moment from 'moment'
import React from 'react'
import './DisplayDate.scss'

export default function DisplayDate({ date, size = 'md' }) {
  return (
    <div className='DisplayDate'>
      <i className={classNames("bi bi-calendar2-event", {
        [`bi-${size}`]: size
      })}></i>
      {moment(date).fromNow()}
    </div>
  )
}
