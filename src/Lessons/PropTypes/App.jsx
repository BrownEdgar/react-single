import React from 'react'
import Title from '../../UI/Title/Title'
import Child from './Child'

export default function App() {
  return (
    <div>
      <Title title={'PropTypes in React'} variant='light' />
      <Child year={2024} obj={{ title: "lorem", age: 25 }}>
        <h1>Child Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </Child>
    </div>
  )
}
