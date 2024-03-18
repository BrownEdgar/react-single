import React, { useEffect, useState } from 'react'
import axios from "axios"
import classNames from "classnames"
import "./App.scss"
import Quot from "./Quot"

export default function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    axios("https://dummyjson.com/quotes")
      .then(res=>setQuotes(res.data.quotes))
      .catch(err=>console.log(err))
  }, [])

  const handleLike = (id)=>{
    const result = quotes.map(elem=>{
      if(elem.id === id){
        elem.like = !elem.like
        elem.like ? elem.liked = "liked" : elem.liked = "default"        
      }
      return elem
    })
    setQuotes(result)
  }

  const handleDisLike = (id)=>{
    const result = quotes.map(elem=>{
      if(elem.id === id){
        elem.disLike = !elem.disLike
        elem.disLike ? elem.liked = "disLiked" : elem.liked = "default"
      }
      return elem
    })
    setQuotes(result)
  }
  
  return (
    <div className='App'>
      
      {
        quotes.map(elem=>{
          return(
            <div className='App__quotes' key={elem.id}>
              <Quot author={elem.author} quote={elem.quote} theme={elem.liked}>
                <i className={classNames("bi",{
                  "bi-hand-thumbs-up": !elem.like,
                  "bi-hand-thumbs-up-fill": elem.like
                })}
                title='like' onClick={()=>handleLike(elem.id)}></i>
                <i className={classNames("bi",{
                  "bi-hand-thumbs-down": !elem.disLike,
                  "bi-hand-thumbs-down-fill": elem.disLike
                })}
                title='dislike' onClick={()=>handleDisLike(elem.id)}></i>
              </Quot>
            </div>
          )
        })
      }
    </div>
  )
}
