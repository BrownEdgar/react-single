import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
export default function App() {
  const [quotes, setQuotes] = useState([])
  console.log(quotes)
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then(data => {
        const q = data.map(elem => {
          return {
            id: nanoid(7),
            author: elem.author.replace('type.fit', ""),
            text: elem.text
          }
        })
        setQuotes(q)
      });
  }, [])

  return (
    <div>
      <ul>
        {
          quotes.map(elem => {
            return (
              <li key={elem.id}>
                <h2>{elem.text}</h2>
                <p>{elem.author || "unknown"}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
