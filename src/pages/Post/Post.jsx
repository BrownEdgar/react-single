import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

import './Post.scss'
import ROUTES from '../../routes';
import Loader from '../../components/Loaders/Loader/Loader';

export default function Post() {
  const [post, setPost] = useState({});
  const [hasError, setHasError] = useState({
    status: false,
    message: ''
  })
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => setHasError({
        status: err.response.status,
        message: err.message
      }))
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }, [id])

  return (
    <div className='Post'>
      <Link className='link' to={ROUTES.POSTS}>
        <i className="bi bi-arrow-bar-left"></i>
        All posts
      </Link>
      {
        hasError.status ? (
          <pre>
            {JSON.stringify(hasError)}
          </pre>
        ) : (

          <>
            <h1>Welcom to the special post N {id}</h1>
            <div className='Post__block'>
              {loading
                ? <Loader />
                : (
                  <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                  </>
                )}
            </div>
            <div className="links">
              <Link to={`/posts/${parseInt(id) - 1}`} className={
                `link ${id <= 1 ? 'link-disabled' : ''}`
              } >PREV</Link>
              <Link to={`/posts/${parseInt(id) + 1}`} className='link'>NEXT</Link>
            </div>
          </>
        )
      }

    </div>
  )
}
