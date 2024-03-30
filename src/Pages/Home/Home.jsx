import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import "./Home.scss"
import { Link } from 'react-router-dom'
import {string, object} from "yup"

const validationSchema = object({
  email: string().email().required(),
  password: string().required()
})

export default function Home({users}) {
  const initialValues = {
    email: "",
    password: ""
  }

  const handleSubmit = (values,formik)=>{
    const user = users.find(user=>{
      return user.email === values.email.toLowerCase() &&
      user.password === values.password;
    })
    if(user){
      alert("SUCCESS")
      formik.resetForm()
    }else{
      alert("WRONG USER")
    }
  }

  return (
    <div className='Home'>
      <h1>Welcome to our business page</h1>
      <div className="Home__content">
        <h2>LOGIN</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {
            (formik)=>{
              return(
                <Form>
                  <Field type="email" name="email" placeholder="Email" required/>
                  <Field type="password" name="password" placeholder="Password" required/>
                  <div className="errors">
                    <ErrorMessage name='email' component="p" className='error'/>
                    <ErrorMessage name='password' component="p" className='error'/>
                  </div>
                  <Field type="submit" value="LOGIN"/>
                </Form>
              )
            }
          }
        </Formik>
        <p>Doesn't register?</p>
        <Link to={"/register"}>Click HERE !</Link>
      </div>
    </div>
  )
}