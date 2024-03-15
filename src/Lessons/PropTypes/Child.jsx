import React from 'react'
import PropTypes from 'prop-types'

export default function Child({ children, year, obj }) {
  return (
    <div className='Child'>
      {children}
      <h2>Year: {year}</h2>
    </div>
  )
}
Child.defaultProps = {
  year: false
}

Child.propTypes = {
  year: PropTypes.bool,
  onclick: PropTypes.func.isRequired,
  obj: PropTypes.arrayOf(
    PropTypes.exact({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ).isRequired
}