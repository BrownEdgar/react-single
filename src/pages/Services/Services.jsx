import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Services.scss'

export default function Services() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 9
      }
    }).then(res => setPosts(res.data))
  }, [])

  return (
    <div className='Services'>
      <h1>Our Posts</h1>
      <div className="Posts">
        {posts.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}