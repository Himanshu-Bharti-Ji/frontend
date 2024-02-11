import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
    <div className='col-3'>
      <div className="blog-card">
        <div className="card-image">
            <img className='img-fluid ' src="images/blog-1.jpg" alt="blog image" />
        </div>
        <div className="blog-content">
            <p className='date'></p>
            <h5 className='title'></h5>
            <p className="desc"></p>
            <Link to="/" className='button'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
