import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import "./App.scss"
import reducer, { initialState } from './reducer'

export default function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos")
    .then(res=>setTodos(res.data))
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState, ()=>{
    return todos 
  })

  const handleClick1 = ()=>{
    console.log(state)
  }

  return (
    <div className='App'>
      <h1>Todos</h1>
      <div className='App__buttons'>
        <button onClick={handleClick1}>All done</button>
      </div>
      <div className='App__content'> 
        {
          state.map(elem=>{
            return(
              <div key={elem.id}>
                <h3>{elem.id}</h3>
                {JSON.stringify(elem)}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
