import React, { useEffect, useReducer, useState } from 'react'
import reducer, { initialState } from './reducer'
import classNames from 'classnames'
import axios from 'axios'

import "./App.scss"

export default function App() {
  const [{ filteredData, searchValue, faundCount }, dispatch] = useReducer(reducer, initialState)
  const [timirId, setTimirId] = useState(null)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos")
      .then(res => dispatch({ type: 'add-posts', payload: res.data }))
  }, [])

  const handleClick1 = () => {
    dispatch({ type: 'all-done' })
  }


  const handleChange = (e) => {
    dispatch({ type: 'set-filter', payload: e.target.value })
  }
  useEffect(() => {
    dispatch({
      type: 'filter-by-value'
    })
  }, [searchValue])

  useEffect(() => {
    dispatch({
      type: 'update-count'
    })
  }, [filteredData])


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleInputChange = (e) => {
    if (timirId !== null) {
      clearTimeout(timirId)
    }
    const s = setTimeout(() => {
      dispatch({ type: 'set-searchValue', payload: e.target.value.toLowerCase() })
    }, 500)
    setTimirId(s)
  }

  return (
    <div className='App'>
      <h1>Todos</h1>
      <div className='App__buttons'>
        <button onClick={handleClick1}>All done</button>
        <select name="todos" onChange={handleChange}>
          <option value="all">all</option>
          <option value="complited">all-complited</option>
          <option value="uncomplited">all-uncomplited</option>
        </select>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder='title...'
            onChange={handleInputChange}
          />
        </form>
        <p className='faundCount'>result : <span> {faundCount}</span>  </p>
      </div>
      <div className='App__content'>
        {
          filteredData.map(elem => {
            return (
              <div key={elem.id} className={classNames(null, {
                green: elem.completed,
                red: !elem.completed,
              })}>
                <h3>{elem.title}</h3>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}
