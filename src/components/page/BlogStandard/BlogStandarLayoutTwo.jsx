import React from 'react'
import { Link } from 'react-router-dom'

function BlogStandarLayoutTwo(props) {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="single-blog layout4">
        <div className="blog-thumb">
          <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img src={`${process.env.PUBLIC_URL} ${props.image}`} alt="Images" /></Link>
        </div>
        <div className="blog-inner">
          <div className="author-date">
            <Link onClick={scrollTop} to={"#"}>By, Admin</Link>
            <Link onClick={scrollTop} className="cmnt" to={"#"}>{`Comment (${props.comment})`}</Link>
            <Link onClick={scrollTop} to={"#"}>{props.date}</Link>
          </div>
          <h4><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>{props.title}</Link></h4>
        </div>
      </div>   
    </>
  )
}

export default BlogStandarLayoutTwo