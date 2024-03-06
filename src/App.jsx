import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>change count</button>
    </div>
  )
}
