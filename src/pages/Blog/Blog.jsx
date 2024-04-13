import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import BlogList from '../../components/BlogList/BlogList';



import axios from 'axios';

import './Blog.scss'
import CurrentBlog from '../../components/CurrentBlog/CurrentBlog';

const DB_URL = import.meta.env.VITE_DB_URL

export default function Blog() {
  const [blog, setBlog] = useState({})
  const [otherBlogs, setOtherBlogs] = useState([])
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios.all([
      axios(`${DB_URL}?_sort=claps`),
      axios(`${DB_URL}/${id}`)
    ])
      .then(([blogs, blog]) => {
        setBlog(blog.data);
        setOtherBlogs(blogs.data.slice(-7).filter(blog => blog.id !== id));
      })
  }, [id])
  const handleDelete = (id) => {
    axios.delete(`${DB_URL}/${id}`)
      .then(res => {
        console.log(res);
        navigate('/work')
      })
  }

  const handleClaps = () => {
    const data = {
      claps: (blog.claps || 0) + 1
    }
    setBlog(Object.assign({}, blog, data))
    axios.patch(`${DB_URL}/${id}`, data)
      .then(res => console.log(res))
  }

  return (
    <div className='Blog'>

      <CurrentBlog blog={blog} handleClaps={handleClaps} handleDelete={handleDelete} />
      <BlogList otherBlogs={otherBlogs} />
    </div>
  )
}
