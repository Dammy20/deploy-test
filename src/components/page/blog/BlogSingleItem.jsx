import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function BlogSingleItem(props) {
  return (
    <>
     <div className="single-blog-style1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
        <div className="blog-img">
          <Link to={"#"} className="blog-date"><i className="bi bi-calendar-check" />{props.date}</Link>
          <LazyLoadImage
          src={`${process.env.PUBLIC_URL} ${props.image}`}
          alt="images"
          className=" wow fadeInDown"
          effect="blur"
          />
          {/* <img alt="images" src={`${process.env.PUBLIC_URL} ${props.image}`} /> */}
        </div>
        <div className="blog-content">
          <h5><Link to={`${process.env.PUBLIC_URL}/blog-details`}>{props.blogContent}</Link></h5>
          <div className="blog-meta">
            <div className="author">
              <img alt="images" src={process.env.PUBLIC_URL + "/images/blog/author1.png"} />
              <Link to={"#"} className="author-name">{props.authorName}</Link>
            </div>
            <div className="comment">
              <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/comment-icon.svg"} />
              <Link to={"#"} className="comment">05 Comments</Link>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default BlogSingleItem