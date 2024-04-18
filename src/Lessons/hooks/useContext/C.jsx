import React, { useContext } from 'react'
import { MyContext } from './contexts/Contexts'



export default function C() {
  const value = useContext(MyContext)
  return (
    <div>
      <h1>component C</h1>

      <h2> <mark>value: {JSON.stringify(value)}</mark></h2>
      <button onClick={value.handleClick}>PLUS</button>
    </div>
  )
}
