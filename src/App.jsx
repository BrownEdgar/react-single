import React from 'react'
import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter, getCounter, minusCounter } from './features/counter/counterSlice'

export default function App() {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Redux counter: {JSON.stringify(counter)}</h1>
      <button onClick={() => dispatch(addCounter(3))}>PLUS</button>
      <button onClick={() => dispatch(minusCounter())}>minus</button>
    </div>
  )
}

//selector
