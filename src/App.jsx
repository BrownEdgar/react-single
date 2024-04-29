import React, { useEffect } from 'react'
import { addCount, getCounter, minusCount } from './features/counter/counterSlice'
import { useSelector,useDispatch } from "react-redux"
import { getAsyncTodos, getTodos } from './features/todos/todosSlice'

export default function App() {
  const todos = useSelector(getTodos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAsyncTodos())
  }, [])
  

  return (
    <div> 
      <p>{JSON.stringify(todos)}</p>
    </div>
  )
}
