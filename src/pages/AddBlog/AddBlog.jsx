import React, { useState, useEffect } from 'react';

import './AddBlog.scss'
import axios from 'axios'
import moment from 'moment'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { Form, Formik, Field } from 'formik'

const initialValues = {
  title: '',
  denscription: '',
  denscription2: '',
  poster: '',
}

export default function AddBlog() {
  const navigate = useNavigate()
  const handleSubmit = (values, formik) => {

    const data = {
      id: nanoid(5),
      title: values.title,
      description: [values.denscription, values.denscription2],
      poster: `/images/` + values.poster.split('\\').at(-1),
      createdAt: moment().format(),
      claps: 0
    }
    console.log(data)
    axios.post('http://localhost:3000/blogs', data)
      .then(res => {
        formik.resetForm();
        navigate('/work')
      })
  }
  return (
    <div className='AddBlog'>
      <h1>Add Blog</h1>
      <div className="AddBlog__form">

        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
        >
          <Form>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" id="title" />
            </div>
            <div className='form-group'>
              <label htmlFor="denscription">Denscription</label>
              <Field as='textarea' name="denscription" id="denscription" rows={7} minLength={10} maxLength={200}>
                enter denscription one
              </Field>
            </div>
            <div className='form-group'>
              <label htmlFor="denscription2">Denscription 2</label>
              <Field as='textarea' name="denscription2" id="denscription2" rows={5} minLength={10} maxLength={200}>
                enter denscription two
              </Field>
            </div>
            <div className='form-group'>
              <label htmlFor="poster">Poster</label>
              <Field type="file" name="poster" id="poster" />
            </div>
            <div className='form-group'>
              <input type="submit" />
            </div>
          </Form>
        </Formik>
      </div>


    </div>
  )
}
