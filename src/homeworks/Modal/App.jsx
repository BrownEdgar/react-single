import React, { useEffect, useState } from 'react'
import "./App.scss"
import axios from "axios"
import classNames from 'classnames'
import Modal from "./Modal"

export default function App() {
  const [todos, setTodos] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [deletedItem, setDeletedItem] = useState(null)

  useEffect(() => {
    axios("https://dummyjson.com/todos")
      .then(res=>setTodos(res.data.todos))
      .catch(err=>console.log(err))
  }, [])

  const handleDelete = ()=>setIsOpen(!isOpen)
  const deleteElementById = ()=>{
    setTodos((prevTodos)=>prevTodos.filter(elem=> elem.id !== deletedItem));
    handleDelete()
  }

  return (
    <div className='Todos'>
      {isOpen ? <Modal handleDelete={handleDelete} deleteElementById={deleteElementById}/> : null}
      {
        todos.map(elem=>{
          return(
            <div className='Todos_content' key={elem.id}>
              <i class="bi bi-x-circle" onClick={()=>{
                handleDelete()
                setDeletedItem(elem.id)
              }}></i>
              <p>{elem.todo}</p>
            </div>
          )
        })
      }
    </div>
  )
}
