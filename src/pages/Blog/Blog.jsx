import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';

import './Blog.scss'

export default function Blog() {
  const [blog, setBlog] = useState({})
  const [otherBlogs, setOtherBlogs] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.all([
      axios(`http://localhost:3000/blogs?_limit=6`),
      axios(`http://localhost:3000/blogs/${id}`)
    ])
      .then(([blogs, blog]) => {
        setBlog(blog.data);
        setOtherBlogs(blogs.data);
      })
  }, [])

  return (
    <div className='Blog'>
      <div className="Blog__current">
        <h1>{blog.title}</h1>
        <img src={blog.poster} />
        <div className='Blog__content'>
          {
            blog?.description?.map((paragraph, index) => {
              return (
                <p key={index}>{paragraph}</p>
              )
            })
          }
          {
            blog?.list ? (
              <ul>
                {
                  blog?.list?.map((paragraph, index) => {
                    return (
                      <li key={index}>{paragraph}</li>
                    )
                  })
                }
              </ul>
            ) : null
          }
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, iste enim ipsam nemo autem veniam ab accusamus explicabo animi suscipit sit hic architecto quasi aut. Molestias excepturi quidem assumenda non!</p>
        </div>
      </div>
      <div className="Blog__list">
        {
          otherBlogs.map((elem) => {
            return (
              <div key={elem.id}>
                <Link>
                  <img src={elem.poster} />
                </Link>
                <div>
                  <Link className='title'>{elem.title}</Link>
                  <span>{elem.createdAt}</span>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
