import React, { useState } from 'react'
import './Posts.scss'
import PostLoader from '../Loaders/PostLoader'
import classNames from 'classnames'

export default function Posts({ data }) {
  const [isCopied, setIsCopied] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  if (data.length === 0) {
    return <div className='Posts'>
      <PostLoader />
      <PostLoader />
      <PostLoader />
    </div>
  }
  const handleCopy = (text, id) => {
    setIsCopied(true);
    setCurrentId(id)
    setTimeout(() => {
      setCurrentId(null)
      setIsCopied(false);
    }, 1000)
    navigator.clipboard.writeText(text)

  }

  return (
    <div className='Posts'>
      {
        data.map(elem => {
          return (
            <div key={elem.id} className='Posts__item'>

              <span>
                <i class={classNames('bi', {
                  "bi-clipboard-check": isCopied && elem.id === currentId,
                  "bi-clipboard": elem.id !== currentId
                })} title='copy' onClick={() => handleCopy(elem.body, elem.id)}></i>
              </span>

              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}
