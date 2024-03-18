import React, { useEffect, useRef } from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Modal({ title, children, theme, toggleModal }) {

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current === e.target) {
        toggleModal()
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])



  return (
    <div className='Modal' ref={modalRef}>
      <div className={classNames("Modal__content", {
        [`Modal__content-${theme}`]: true
      })}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  theme: 'light'
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element
  ]).isRequired,
  toggleModal: PropTypes.func.isRequired
}