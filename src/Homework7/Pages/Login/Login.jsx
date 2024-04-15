import React from 'react'
import {Formik, Form, Field} from 'formik'
import { Link } from 'react-router-dom'
import "./Login.scss"
import ROUTES from '../../routes'



export default function Login({users}) {
  const initialValues={
    username: "",
    password: ""
  }

  const handleSubmit = (values,formik)=>{
    const user = users.find(user=>{
      return user.username === values.username.toLowerCase() &&
      user.password === values.password;
    })
    if(user){
      setTimeout(() => {
        window.location.href = "/"
      }, 2000);
    }else{
      alert("WRONG USER")
    }
  }
  

  return (
    <div className='Login'>
      <div className="Login__form">
        <h1>LOGIN</h1>  
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {
            (formik)=>{
              return(
                <Form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Field type="username" name="username" placeholder="Username" required/>  
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" placeholder="Password" required/>
                  </div>
                  <input type="submit" value="LOGIN"/>
                </Form>
              )
            }
          }
        </Formik>
        <Link to={ROUTES.REGISTER}>Register</Link>
      </div>
    </div>
  )
}
