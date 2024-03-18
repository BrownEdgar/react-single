import axios from 'axios'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import "./App.scss"

export default function App() {
  const [comments, setComments] = useState([])
  const [isCopied, setIsCopied] = useState(false)
  const [currentQuot, setCurrentQuot] = useState(null)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/comments", {
      params: {
        _limit: 11
      }
    })
      .then(res => setComments(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleCopy = (body, id) => {
    setIsCopied(true)
    setCurrentQuot(id)
    setTimeout(() => {
      setCurrentQuot(null)
      setIsCopied(false)
    }, 200);
    navigator.clipboard.writeText(body)
  }

  const handleLike = (id) => {
    const result = comments.map(elem => {
      if (elem.id === id) {
        elem.like = !elem.like
      }
      return elem
    })
    setComments(result)
  }

  return (
    <div className='Comments'>
      {
        comments.map(elem => {
          return (
            <div key={elem.id} className='Comments_content'>
              <h3>{elem.name}</h3>
              <p>{elem.body}</p>
              <i className={classNames("bi", {
                "bi-heart-fill": elem.like,
                "bi-heart": !elem.like
              })} title="like" onClick={() => handleLike(elem.id)}></i>
              <i className={classNames("bi", {
                "bi-check": isCopied && elem.id === currentQuot,
                "bi-copy": !(isCopied && elem.id === currentQuot),
              })}
                title='copy' onClick={() => handleCopy(elem.body, elem.id)}></i>
            </div>

          )
        })
      }
    </div>
  )
}
