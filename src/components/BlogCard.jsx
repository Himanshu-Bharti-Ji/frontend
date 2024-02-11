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
            <p className='date'>11 Feb, 2024</p>
            <h5 className='title'>A beautiful sunday morning renaissance</h5>
            <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dolore dicta tempora voluptatum ab sunt, quod nulla enim.</p>
            <Link to="/" className='button'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
