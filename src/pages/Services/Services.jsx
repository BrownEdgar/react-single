import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Services.scss'
import { Link } from 'react-router-dom';

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
            <Link key={elem.id} to={`/posts/${elem.id}`}>
              <h2>{elem.title}</h2>
            </Link>
          )
        })}
      </div>
    </div>
  )
}