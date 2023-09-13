import React from 'react'
import { Link } from 'react-router-dom'

function BlogRecentPostWidget() {
    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="blog-widget-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
        <div className="blog-category">
          <div className="sidebar-widget-title">
            <h4>Recent Post</h4>
            <span />
          </div>
          <div className="blog-widget-body">
            <ul className="recent-post">
              <li className="single-post">
                <div className="post-img">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img alt="images" src={process.env.PUBLIC_URL + "/images/blog/recent-feed1.png"} /></Link>
                </div>
                <div className="post-content">
                  <span>January 31, 2022</span>
                  <h6><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Grant Distributions Conti nu to Incr Ease.</Link>
                  </h6>
                </div>
              </li>
              <li className="single-post">
                <div className="post-img">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img alt="images" src={process.env.PUBLIC_URL + "/images/blog/recent-feed2.png"} /></Link>
                </div>
                <div className="post-content">
                  <span>February 21, 2022</span>
                  <h6><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Seminar for Children to Learn About.</Link></h6>
                </div>
              </li>
              <li className="single-post">
                <div className="post-img">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img alt="images" src={process.env.PUBLIC_URL + '/images/blog/recent-feed3.png'} /></Link>
                </div>
                <div className="post-content">
                  <span>March 22, 2022</span>
                  <h6><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Education and teacher for all African
                      Children.</Link></h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>   
    </>
  )
}

export default BlogRecentPostWidget