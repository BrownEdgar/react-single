import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, boolean } from 'yup';
import { nanoid } from 'nanoid';
import './App.scss'

const initailValues = {
  username: '',
  age: '',
  language: '',
  policy: ''
}

const validationSchema = object({
  username: string()
    .min(3)
    .max(23)
    .matches(/[0-9]/, "must contaion number")
    .required(),
  age: number()
    .positive()
    .integer()
    .min(18)
    .lessThan(63, "duq shat mec eq")
    .required(),
  language: string().oneOf(['javascript', 'react', 'html', 'css']).required(),
  policy: boolean().isTrue("policy must by true").required(),
})


export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values, formik) => {
    console.log(values)
    const user = {
      ...values,
      id: nanoid(7)
    }
    setUsers([...users, user])
    formik.resetForm()
  }

  return (
    <div>
      <Formik
        initialValues={initailValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnChange={true}
      >
        {
          (formik) => {
            console.log(formik)
            return (
              <Form>
                <ErrorMessage>
                  {(errMessage) => {
                    return (
                      <div className="errors">
                        {Object.keys(errMessage).map(elem => {
                          return (
                            <p key={elem} className='errors-item'>{errMessage[elem]}</p>
                          )
                        })}
                      </div>
                    )
                  }}
                </ErrorMessage>
                <Field type='text' name='username' />
                <Field type='number' name='age' />
                <Field as='select' name='language' >
                  <option value="" disabled></option>
                  <option value="javascript">javascript</option>
                  <option value="react">react</option>
                  <option value="html">html</option>
                  <option value="css">css</option>
                </Field>
                <label htmlFor="policy">
                  <Field type='checkbox' id="policy" name='policy' />
                  <span>I agree</span>
                </label>
                <input type='submit' disabled={!formik.isValid || !formik.values.policy} />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
