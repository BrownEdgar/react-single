import React, { useState } from 'react'
import "./App.scss"
import {Formik, Form, Field, ErrorMessage} from "formik"
import {nanoid} from "nanoid"
import {object, string, number} from "yup"

const initialValues = {
  firstName: "",
  lastName: "",
  streetName: "",
  number: "",
  floorUnit: "",
  postalCode: "",
  city: "",
  state: "",
  country: ""
}

const validationSchema = object({
  firstName: string()
             .min(3,"Please entry your First name!!!")
             .max(16,"Please entry your First name!!!")
             .required("Please entry your First name!!!"),
  lastName: string()
            .min(3,"Please entry your Last name!!!")
            .max(16,"Please entry your Last name!!!")
            .required("Please entry your Last name!!!"),
  streetName: string()
              .min(3,"Please entry your Street name!!!")
              .max(16,"Please entry your Street name!!!")
              .required("Please entry your Street name!!!"),
  number: number("Please entry your Phone number!!!")
          .required("Please entry your Phone number!!!"),
  floorUnit: number("Please entry your floor!!!"),
  postalCode: number("Please entry your Postal code!!!")
              .required("Please entry your Postal code!!!"),
  city: string().required("Please entry your City!!!"),
  state: string().required("Please entry your State!!!"),
  country: string()
           .oneOf(["Armenia","Russia","Germany","Spain","Italy"])
           .required("Please choose your Country!!!")      
})


export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (values,formik)=>{
    console.log(values)
    const user = {
      ...values,
      id: nanoid(7)
    }
    setUsers([...users,user])
    formik.resetForm()
  }

  return (
    <div className='App'>
      <h1>Address form table</h1>
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
                <h4>Name</h4>
                <Field type="text" name="firstName" placeholder="First name" />
                <Field type="text" name="lastName" placeholder="Last name"/>
                <div className='nameErrors'>
                  <ErrorMessage name='firstName' component="p" className='errors'/>
                  <ErrorMessage name='lastName' component="p" className='errors'/>
                </div>
                <h4>Address</h4>
                <Field type="text" name="streetName" placeholder="Street name" />
                <Field type="text" name="number" placeholder="number" className="numberfloor"/>
                <Field type="text" name="floorUnit" placeholder="Floor, unit, ..." className="numberfloor"/>
                <Field type="text" name="postalCode" placeholder="Postal code" />
                <Field type="text" name="city" placeholder="City" />
                <Field type="text" name="state" placeholder="State" />
                <Field as="select" name="country">
                  <option value="" disabled>Country</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Russia">Russia</option>
                  <option value="Germany">Germany</option>
                  <option value="Spain">Spain</option>
                  <option value="Italy">Italy</option>
                </Field>  
                <div className='addressErrors'>
                  <ErrorMessage name='streetName' component="p" className='errors' />
                  <ErrorMessage name='number' component="p" className='errors' />
                  <ErrorMessage name='floorUnit' component="p" className='errors' />
                  <ErrorMessage name='postalCode' component="p" className='errors' />
                  <ErrorMessage name='city' component="p" className='errors' />
                  <ErrorMessage name='state' component="p" className='errors' />
                  <ErrorMessage name='country' component="p" className='errors' />
                </div>
                <Field type="submit" value="Submit"/>

              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
