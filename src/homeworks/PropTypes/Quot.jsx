import React, { children } from 'react'
import PropTypes from "prop-types"
import classNames from 'classnames'
import "./Quot.scss"


export default function Quot({quote,author,children,theme}) {
  return (
    <div className='Quot'>
      <div className={classNames("Quot__content",{
        [`Quot__content-${theme}`]: true
      })}>
        <p>{quote}</p>
        <h4>{author}</h4>
        {children}
      </div>
    </div>
  )
}

Quot.defaultProps = {
  theme: "default"
}

Quot.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["liked","disLiked","default"]),
  children: PropTypes.element.isRequired
}