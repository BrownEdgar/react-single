import React, { useEffect, useReducer } from 'react'
import reducer, { initialStateValue } from './reducer';
import Actions from './actionTypes';
import './App.scss'
import axios from 'axios';


export default function App() {

  const [state, dispatch] = useReducer(reducer, initialStateValue);

  const handleClick = () => {
    dispatch({ type: Actions.ADD, payload: Math.round(Math.random() * 1000) })
    dispatch({ type: Actions.SORT, })
  }


  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(res => dispatch({ type: Actions.ADD_POSTS, payload: res.data }))
  }, [])

  console.log(state)

  return (
    <div>
      <h1>State:</h1>

      <ul>
        {state.data.map(elem => <li key={elem}>{elem}</li>)}
        <li>TOTAL: {state.total}</li>
      </ul>
      <button onClick={handleClick}>ADD</button>
    </div>
  )
}
