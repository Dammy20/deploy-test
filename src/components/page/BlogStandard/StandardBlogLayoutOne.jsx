import React from 'react'
import { Link } from 'react-router-dom'

function StandardBlogLayoutOne() {
    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="single-blog layout3">
        <div className="blog-thumb">
          <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}><img src={process.env.PUBLIC_URL + '/img/blog/blog-1.jpg'} alt="images" /></Link>
          <div className="tag">
            <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/project`}>Dashbord</Link>
          </div>
        </div>
        <div className="blog-inner">
          <div className="author-date">
            <Link onClick={scrollTop} to={"#"}>By, Admin</Link>
            <Link onClick={scrollTop} to={"#"}>22.02.2022</Link>
          </div>
          <h4><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>In a augue sit amet erat Suspel eleifend suscipit issen.</Link></h4>
          <p>Integer purus odio, placerat nec rhoncus in, all ullamcorper nec dolor. Class online befor thatn aptent taciti sociosqu ad litora torquent per.</p>
        </div>
      </div>   
    </>
  )
}

export default StandardBlogLayoutOne