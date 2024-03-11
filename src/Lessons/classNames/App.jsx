import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import './App.scss'
import Title from '../../UI/Title/Title';

export default function App() {

  return (
    <div className='App'>
      <Title variant='light' title='About React.js' as='h2' />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, aspernatur nulla atque libero tempore minima eum, nostrum ipsam molestias natus, dolorem labore rerum praesentium. Quis quo, autem rem ratione libero mollitia necessitatibus magni facere, ullam dignissimos iste doloribus quae perferendis odio impedit eaque quaerat, eligendi quidem. Quod ea ipsam inventore velit earum repudiandae recusandae totam doloribus tempore sit tenetur itaque animi deserunt nisi maiores unde, ullam, sint error saepe sequi! Mollitia non nisi dolores deleniti dignissimos sint quisquam pariatur enim?</p>
    </div>
  )
}
