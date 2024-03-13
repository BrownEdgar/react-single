import React, { useState, useEffect } from 'react';
import axios from 'axios'
import instance from './axios';
import './App.scss'
import Posts from './Posts/Posts';



export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios('https://jsonplaceholder.typicode.com/posts')
    // axios('https://jsonplaceholder.typicode.com/posts', {
    //   params: {
    //     _limit: 11,
    //     _start: 15
    //   }
    // })
    // axios({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   url: 'posts',
    //   params: { _limit: 5 }
    // })
    // const post = {
    //   userId: 1,
    //   title: 'Lorem ipsum dolor sit.',
    //   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic neque, dicta iste, dolor aspernatur placeat itaque quasi maiores numquam possimus!'
    // }
    // axios.delete('https://jsonplaceholder.typicode.com/posts/2')
    // instance('/todos', {
    //   params: {
    //     _limit: 6
    //   }
    // })
    // axios.all([
    //   instance('/posts?_limit=5'),
    //   instance('/todos?_limit=5'),
    //   instance('/users?_limit=5'),
    // ])
    //   .then(([posts, todos, users]) => {
    //     console.log(posts.data)
    //     console.log(todos.data)
    //     console.log(users.data)
    //   })
    instance('/posts')
      .then(({ data }) => setData(data))
      .catch(console.log)
  }, [])


  return (
    <div className='App'>
      <Posts data={data} />
    </div>
  )
}
