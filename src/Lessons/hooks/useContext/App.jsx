import React, { useState } from 'react'
import { MyContext } from './contexts/Contexts';
import A from './A'
import D from './D';


export default function App() {
  console.log('App Render')
  const [count, setCount] = useState(48);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>component App</h1>
      <MyContext.Provider value={{ count, handleClick }}>
        <A />
      </MyContext.Provider>
      <D />
    </div>
  )
}
