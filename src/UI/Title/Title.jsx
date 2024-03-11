import React from 'react'
import classNames from 'classnames'
import './Title.scss';

export default function Title({ variant = 'default', title, size = 'md', as = 'h1', center }) {
  const Element = as;
  return (
    <Element
      className={classNames('Hedding', {
        [`Hedding-${variant}`]: true,
        [`Hedding-${size}`]: true,
        'Hedding-center': center
      })}
    >
      {title}
    </Element>
  )
}
