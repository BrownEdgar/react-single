import React, { useRef, useState } from 'react'
import './MainForm.scss'
import axios from 'axios';
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

export default function MainForm() {
  const [idToken, setidToken] = useState('')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value.toLowerCase(),
      password: e.target.password.value,
      returnSecureToken: true,
    }

    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, data)
      .then(res => {
        console.log(res.data)

      })
      .catch(err => console.log(err))
  }
  const login = () => {
    if (emailRef.current && passwordRef.current) {
      const data = {
        email: emailRef.current.value.toLowerCase(),
        password: passwordRef.current.value,
        returnSecureToken: true,
      }
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, data)
        .then(res => setidToken(res.data.idToken))
        .catch(err => console.log(err))
    }

  }

  const handleDelete = () => {
    const data = {
      idToken
    }
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${API_KEY}`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className='MainForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' required ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' required ref={passwordRef} />
        </div>
        <div className='buttons'>

          <input type="submit" value='Register' className='btn' />
          <input type="button" value='Login' className='btn' onClick={login} />
        </div>
      </form>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  )
}
