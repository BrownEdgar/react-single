import React, { useReducer } from 'react'
import "./App.scss"
import reducer, { initialState } from "./reducer"
import {Formik, Form, Field} from 'formik'
import Actions from './actionTypes'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick1 = ()=>{
    dispatch({type: Actions.SHUFFLE})
  }
  const handleClick2 = ()=>{
    dispatch({type: Actions.DELETE, payload: 10})
  }
  const handleClick3 = ()=>{
    dispatch({type: Actions.ADD, payload: Math.ceil(Math.random()*1000)})
  }
  const handleSubmit1 = (values,formik)=>{
    dispatch({type: Actions.ADD_DEVELOPER, payload: values.developer})
    formik.resetForm()
  } 
  const handleSubmit2 = (values,formik)=>{
    dispatch({type: Actions.CHANGE_USER_NAME, payload: values.name})
    formik.resetForm()
  } 
  const handleSubmit3 = (values,formik)=>{
    dispatch({type: Actions.CHANGE_AGE, payload: values.number})
    formik.resetForm()
  } 

  return (
    <div className='App'>
      <h1>Developers: {JSON.stringify(state.developers)}</h1>
      <h2>User: {JSON.stringify(state.user)}</h2>
      <h3>Arr: {JSON.stringify(state.arr)}</h3>
      <div className='App__buttons'>
        <button onClick={handleClick1}>Shuffle arr</button>
        <button onClick={handleClick2}>Delete arr items under 10</button>
        <button onClick={handleClick3}>Add random number into Arr</button>
        <Formik
          onSubmit={handleSubmit1}
          initialValues={{developer:""}}
        >
          {
            (formik)=>{
              return(
                <Form>
                  <Field type="text" name="developer" placeholder="developer" required/>
                  <input type="submit" value="Add developers"/>
                </Form>
              )
            }
          }
        </Formik>
        <Formik
          onSubmit={handleSubmit2}
          initialValues={{name:""}}
        >
          {
            (formik)=>{
              return(
                <Form>
                  <Field type="text" name="name" placeholder="name" required/>
                  <input type="submit" value="Change USER name"/>
                </Form>
              )
            }
          }
        </Formik>
        <Formik
          onSubmit={handleSubmit3}
          initialValues={{number:""}}
        >
          {
            (formik)=>{
              return(
                <Form>
                  <Field type="number" name="number" placeholder="age" required/>
                  <input type="submit" value="Add age"/>
                </Form>
              )
            }
          }
        </Formik>
      </div>
    </div>
  )
}
