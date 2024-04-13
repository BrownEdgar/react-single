import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import './BlogList.scss'
import clapsIcon from '../../assets/clap-svgrepo-com.svg'
import DisplayDate from '../DisplayDate/DisplayDate'

export default function BlogList({ otherBlogs }) {
  return (
    <div className="BlogList">
      {
        otherBlogs.map((elem) => {
          return (
            <div key={elem.id}>
              <Link to={`/blogs/${elem.id}`}>
                <img src={elem.poster} className='BlogList__poster' />
              </Link>
              <div>
                <h2 className='title'>{elem.title}</h2>
                <DisplayDate date={elem.createdAt} />
                <span>
                  <img src={clapsIcon} alt="claps-icon" />
                  {elem.claps}
                </span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
