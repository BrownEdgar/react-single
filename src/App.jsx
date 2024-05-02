import React, { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { getAsyncTodos, getTodos, remove } from './features/todos/todosSlice'
import "./App.css"

export default function App() {
  const todos = useSelector(getTodos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAsyncTodos())
  }, [])

  return (
    <ul className='todos'>
      {
        todos.map(elem=>{
          return(
            <li key={elem.id} className='todo'>
              {JSON.stringify(elem)}
              <i className="bi bi-x-circle-fill" onClick={()=>dispatch(remove(elem.id))}></i>
            </li>
          )
        })
      }
    </ul>
  )
}
