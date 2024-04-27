import React from 'react'
import { addCount, getCounter, minusCount } from './features/counter/counterSlice'
import {useSelector,useDispatch} from "react-redux"

export default function App() {
  const counter = useSelector(getCounter)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={()=>dispatch(addCount(5))}>add</button>
      <button onClick={()=>dispatch(minusCount(5))}>minus</button>
    </div>
  )
}
