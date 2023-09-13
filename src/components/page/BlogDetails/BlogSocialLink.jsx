import React from 'react'
import { Link } from 'react-router-dom'

function BlogSocialLink() {
  return (
    <>
     <div className="blog-widget-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".8s">
        <div className="tag-area">
          <div className="sidebar-widget-title">
            <h4>Follow Social</h4>
            <span />
          </div>
          <div className="blog-widget-body">
            <ul className="sidebar-social-list gap-4">
              <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
              <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
              <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
              <li><Link to={"#"}><i className="bx bxl-pinterest-alt" /></Link></li>
            </ul>
          </div>
        </div>
      </div>   
    </>
  )
}

export default BlogSocialLink