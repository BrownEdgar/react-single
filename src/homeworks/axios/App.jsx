import React, { useEffect,useState } from 'react'
import axios from "axios"
import "./App.scss"

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [isCopied, setIsCopied] = useState(false)
  
  useEffect(()=>{
    axios("https://type.fit/api/quotes")
    .then(res=>setQuotes(res.data))
    .catch(err=>console.log(err))
  },[])

  const handleCopy = (text)=>{
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000);
    navigator.clipboard.writeText(text)
  }

  return (
    <div className='App'>
      {
        quotes.map(elem=>{
          return(
            <div key={elem.author} className='App_content'>
              <p>{elem.text}</p>
              <h5>{elem.author.replace(", type.fit", "")}</h5>
              <i class={classNames("bi",{
                "bi-copy": !isCopied,
                "bi-check": isCopied,
              })}
              title='copy' onClick={()=> handleCopy(elem.text)}></i>
            </div>

          )
        })
      }
    </div>
  )
}
