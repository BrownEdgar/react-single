import React, { useEffect } from 'react'
import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter, getCounter, minusCounter } from './features/counter/counterSlice'
import { addUser, getAllusers, getAsyncUsers, saveUsers } from './features/users/usersSlice';
import axios from 'axios';

export default function App() {
  const users = useSelector(getAllusers);
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.username.value;
    dispatch(addUser(value));
    dispatch(addCounter(1));
    e.target.reset()
  }

  useEffect(() => {
    dispatch(getAsyncUsers())
  }, [])


  return (
    <div>
      <h1>USERS: {counter}</h1>
      <pre>
        {JSON.stringify(users, null, 1)}
      </pre>
      <form onSubmit={handleSubmit}>
        <input type="text" name='username' />
        <input type="submit" value="save" />
      </form>
    </div>
  )
}

//selector
