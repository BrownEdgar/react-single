import React, { useReducer } from 'react'
import "./App.scss"
import reducer, { initialState } from "./reducer"
import {Formik, Form, Field} from 'formik'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick1 = ()=>{
    dispatch({type: "shuffle"})
  }
  const handleClick2 = ()=>{
    dispatch({type: "delete", payload: 10})
  }
  const handleClick3 = ()=>{
    dispatch({type: "add random", payload: Math.ceil(Math.random()*1000)})
  }
  const handleSubmit = (values,formik)=>{
    // dispatch({type: "changeName", payload: developer.value})
    console.log(formik)
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
        <label onClick={handleSubmit}>
          <input type="text" name="developer" />
          <input type="submit" value="Add into developers"/>
        </label>
        <label>
          <input type="text" name="name" />
          <input type="submit" value="Change USER name"/>
        </label>
        <Formik
          onSubmit={handleSubmit}
        >
          {
            (formik)=>{
              return(
                <Form>
                  <Field type="number" name="number" placeholder="age" required/>
                  <Field type="submit" value="Add age"/>
                </Form>
              )
            }
          }
        </Formik>
      </div>
    </div>
  )
}
