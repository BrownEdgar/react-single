import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';
import clapsIcon from '../../assets/clap-svgrepo-com.svg'

import './Blog.scss'


export default function Blog() {
  const [blog, setBlog] = useState({})
  const [otherBlogs, setOtherBlogs] = useState([])
  const { id } = useParams()
  console.log(blog)
  useEffect(() => {
    axios.all([
      axios(`http://localhost:3000/blogs?_limit=6`),
      axios(`http://localhost:3000/blogs/${id}`)
    ])
      .then(([blogs, blog]) => {
        setBlog(blog.data);
        setOtherBlogs(blogs.data);
      })
  }, [id])

  const handleClaps = () => {
    const data = {
      claps: (blog.claps || 0) + 1
    }
    setBlog(Object.assign({}, blog, data))
    axios.patch(`http://localhost:3000/blogs/${id}`, data)
      .then(res => console.log(res))
  }

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
              <ul className='Blog__content-list'>
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
          <hr />
          <div className="Blog__content-footer">
            <span className='icon' onClick={handleClaps}>
              <img src={clapsIcon} alt="" />
            </span>
            {blog.claps || 0}
          </div>
        </div>
      </div>
      <div className="Blog__list">
        {
          otherBlogs.map((elem) => {
            return (
              <div key={elem.id}>
                <Link to={`/work/${elem.id}`}>
                  <img src={elem.poster} />
                </Link>
                <div>
                  <h2 className='title'>{elem.title}</h2>
                  <span>
                    <i className="bi bi-calendar2-event"></i>
                    {moment(elem.createdAt).fromNow()}
                  </span>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
