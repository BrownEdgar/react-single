import React, { useEffect, useState } from 'react'
import axios from "axios"
import classNames from 'classnames'
import "./App.scss"

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [isCopied, setIsCopied] = useState(false)
  const [currentQuot, setCurrentQuot] = useState(null)

  useEffect(() => {
    axios("https://type.fit/api/quotes")
      .then(res => setQuotes(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleCopy = (text, author) => {
    setIsCopied(true)
    setCurrentQuot(author)
    setTimeout(() => {
      setCurrentQuot(null)
      setIsCopied(false)
    }, 1000);
    navigator.clipboard.writeText(text)
  }

  return (
    <div className='App'>
      {
        quotes.map(elem => {
          return (
            <div key={elem.author} className='App_content'>
              <p>{elem.text}</p>
              <h5>{elem.author.replace(", type.fit", "")}</h5>
              <i className={classNames("bi", {
                "bi-check": isCopied && elem.author === currentQuot,
                "bi-copy": !(isCopied && elem.author === currentQuot),
              })}
                title='copy' onClick={() => handleCopy(elem.text, elem.author)}></i>
            </div>

          )
        })
      }
    </div>
  )
}
