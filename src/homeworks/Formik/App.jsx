import React, { useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {object, string} from 'yup'
import {nanoid} from "nanoid"
import "./App.scss"

const initialValues = {
  username: "",
  password: "",
  email: "",
}

const validationSchema = object({
  username: string()
            .min(5)
            .max(16)
            .required(),
  password: string()  
            .min(5)
            .max(16)
            .matches(/[0-9]/, "Must contain number")
            .matches(/[A-Z]/, "Must contain capital letter")
            .required(),
  email: string()
         .email()
         .required(),
})

export default function App() {
  const [users, setUsers] = useState([])
  
  const handleSubmit = (values,formik)=>{
    const user = {
      ...values,
      id: nanoid(5)
    }
    setUsers([...users, user])
    formik.resetForm()
  }
  return (
    <div className='App'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnChange={false}
      >
        <Form>
          <h1>Login Form</h1>
          <Field type="text" name="username" placeholder="Username" />
          <div className="errorMessage">
            <ErrorMessage name="username" component="p" className="error"/>
          </div>
          <Field type="password" name="password" placeholder="Password"/>
          <div className="errorMessage">
            <ErrorMessage name="password" component="p" className="error"/> 
          </div>
          <Field type="email" name="email" placeholder="Your Email"/>
          <div className="errorMessage">
            <ErrorMessage name="email" component="p" className="error"/>
          </div>
          <label>
            <input type="checkbox" name="myCheckbox" defaultChecked={false} /> Remember me
          </label>
          <input type="submit" value="LOGIN HERE"/>
          <p>Don't Have an Account? <a href="#">Sign Up!</a></p>
        </Form>
      </Formik>
      <hr />
      <ul>
        <h1>Users</h1>
        {
          users.map(elem=>{
            return(
              <li key={elem.id}>ID: "{elem.id}" | Username: "{elem.username}" | Email: "{elem.email}"</li>
            )
          })  
        }
      </ul>
        
      
    </div>
  )
}
