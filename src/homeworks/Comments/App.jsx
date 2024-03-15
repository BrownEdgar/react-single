import axios from 'axios'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import "./App.scss"

export default function App() {
  const [comments, setComments] = useState([])
  const [isCopied, setIsCopied] = useState(false)
  const [currentQuot, setCurrentQuot] = useState(null)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/comments",{
      params:{
        _limit:11
      }
    })
    .then(res=>setComments(res.data))
    .catch(err=>console.log(err))
  }, [])

  const handleCopy = (body, id)=>{
    setIsCopied(true)
    setCurrentQuot(id)
    setTimeout(() => {
      setCurrentQuot(null)
      setIsCopied(false)
    }, 200);
    navigator.clipboard.writeText(body)
  }

  const handleLike = (id)=>{
    setLiked(true)
    setCurrentQuot(id)
  }

  return (
    <div className='Comments'>
      {
        comments.map(elem=>{
          return(
            <div key={elem.id} className='Comments_content'>
              <h3>{elem.name}</h3>
              <p>{elem.body}</p>
              <i class={classNames("bi",{
                "bi-heart-fill": liked && elem.id === currentQuot,
                "bi-heart": !(liked && elem.id === currentQuot)
              })} title="like" onClick={()=>handleLike(elem.id)}></i>
              <i class={classNames("bi",{
                "bi-check": isCopied && elem.id === currentQuot,
                "bi-copy": !(isCopied && elem.id === currentQuot),
              })}
              title='copy' onClick={()=> handleCopy(elem.body, elem.id)}></i>
            </div>

          )
        })
      }
    </div>
  )
}
