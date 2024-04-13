import React from 'react'
import './CurrentBlog.scss'
import clapsIcon from '../../assets/clap-svgrepo-com.svg'
import DisplayDate from '../DisplayDate/DisplayDate'

export default function CurrentBlog({ blog, handleClaps }) {
  return (
    <div className="CurrentBlog">
      <h1>{blog.title}</h1>
      <img src={blog.poster} />
      <div className='CurrentBlog__content'>
        {
          blog?.description?.map((paragraph, index) => {
            return (
              <p key={index}>{paragraph}</p>
            )
          })
        }
        {
          blog?.list ? (
            <ul className='CurrentBlog__content-list'>
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
        <div className="CurrentBlog__content-footer">
          <span className='icon' onClick={handleClaps}>
            <img src={clapsIcon} />
            <em>   {blog.claps || 0}</em>
          </span>

          <DisplayDate date={blog.createdAt} size='lg' />
        </div>
      </div>
    </div>
  )
}
