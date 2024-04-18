import React  from 'react'
import {Formik, Form, Field} from 'formik'
import "./Register.scss"
import { useNavigate } from 'react-router-dom'
import {nanoid} from "nanoid"
import axios from 'axios'

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  file: ""
}

export default function Register() {
  const navigate = useNavigate()
  const handleSubmit = (values,formik)=>{
    const developer = {
        id: nanoid(7),
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
        file: values.file
      } 
      axios.post('http://localhost:3000/developers', developer)
      .then(res => {
        formik.resetForm();
        navigate('/')
      })
      formik.resetForm()
    }


  


  return (
    <div className='Register'>
      <div className="Register__form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {
            (formik)=>{
              return (
                <Form>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field type="firstName" name="firstName" placeholder="First Name"/> 
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="lastName" name="lastName" placeholder="Last Name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                  <Field type="username" name="username" placeholder="Username"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="photo">Photo</label>
                    <Field type="file" name="photo" placeholder="Photo"/>
                  </div>
                  <input type="submit"  value="Register"/>

                </Form>
              )
            }
          }
        </Formik>
      </div>
      <div className="Register__content">
        <h1>Are you a developer?</h1>
        <h4>Register here!</h4>
      </div>
    </div>
  )
}
