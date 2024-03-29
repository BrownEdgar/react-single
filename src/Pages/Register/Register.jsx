import React, { useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import "./Register.scss"
import {string, object} from "yup"
import { Link } from 'react-router-dom'
import {nanoid} from "nanoid"


const initialValues = {
  username: "",
  email: "",
  password: ""
}

const validationSchema = object({
  username: string().min(3).max(12).required(),
  email: string().email().required(),
  password: string().min(6).max(12).matches(/[0-9]/, "must contain number").required()
})

export default function Home() {
  const [users, setUsers] = useState([])
  

  const handleSubmit = (values,formik)=>{
    const user = {
      ...values,
      id: nanoid(7)
    }
    setUsers([...users, user])
    formik.resetForm()
  }

  return (
    <div className='Register'>
      <h1>Welcome to our business page</h1>
      <div className="Register__content">
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {
            (formik)=>{
              return(
                <Form>
                  <Field type="username" name="username" placeholder="Username"/>
                  <Field type="email" name="email" placeholder="Email"/>
                  <Field type="password" name="password" placeholder="Password"/>
                  <div className="errors">
                    <ErrorMessage name='username' component="p" className='error'/>
                    <ErrorMessage name='email' component="p" className='error'/>
                    <ErrorMessage name='password' component="p" className='error'/>
                  </div>
                  <Field type="submit" value="REGISTER"/>
                </Form>
              )
            }
          }
        </Formik>
        <p>If you have an account</p>
        <Link to={"/"}>Click HERE !</Link>
      </div>
    </div>
  )
}