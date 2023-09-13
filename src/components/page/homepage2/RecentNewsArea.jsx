import React from 'react'
import {Link} from "react-router-dom"
function RecentNewsArea() {
    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="recent-news-section pt-120 pb-120">
        <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/bg/section-bg2.png"} className="img-fluid section-bg2" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title1">
                <h2>Our Recent News</h2>
                <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding
                  products. We want to be a part of your smile, success and future growth.</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
              <div className="single-blog-style2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <div className="blog-img">
                  <Link to={"#"} className="blog-date"><i className="bi bi-calendar-check" />Jan 30, 2022</Link>
                  <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/blog/recent21.png"} />
                </div>
                <div className="blog-content">
                  <h5><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>David Droga Still Has Faith in Online Advertising Creative
                    </Link></h5>
                  <div className="blog-meta">
                    <div className="author">
                      <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/blog/author1.png"} />
                      <Link to={"#"} className="author-name">Johan Martin</Link>
                    </div>
                    <div className="comment">
                      <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/icons/comment-icon.svg"} />
                      <Link to={"#"} className="comment">05 Comments</Link>
                    </div>
                  </div>
                  <p className="para">Explore on the world's best &amp; largest Bidding market place with our Bidding
                    products.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
              <div className="single-blog-style2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                <div className="blog-img">
                  <Link to={"#"} className="blog-date"><i className="bi bi-calendar-check" />May 30, 2022</Link>
                  <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/blog/recent22.png"} />
                </div>
                <div className="blog-content">
                  <h5><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Take our friend Johnny No-Job, for example. He’s a
                      specialist in .</Link></h5>
                  <div className="blog-meta">
                    <div className="author">
                      <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/blog/author1.png"} />
                      <Link to={"#"} className="author-name">Johan Martin</Link>
                    </div>
                    <div className="comment">
                      <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/icons/comment-icon.svg"} />
                      <Link to={"#"} className="comment">05 Comments</Link>
                    </div>
                  </div>
                  <p className="para">Explore on the world's best &amp; largest Bidding market place with our Bidding
                    products.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
              <div className="single-blog-style2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                <div className="blog-img">
                  <Link to={"#"} className="blog-date"><i className="bi bi-calendar-check" />May 30, 2022</Link>
                  <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/blog/recent23.png"} />
                </div>
                <div className="blog-content">
                  <h5><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>The second-price sealed-bid auction is similar to the first.</Link></h5>
                  <div className="blog-meta">
                    <div className="author">
                      <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/blog/author1.png"} />
                      <Link to={"#"} className="author-name">Johan Martin</Link>
                    </div>
                    <div className="comment">
                      <img alt="recentImage" src={process.env.PUBLIC_URL+ "/images/icons/comment-icon.svg"} />
                      <Link to={"#"} className="comment">05 Comments</Link>
                    </div>
                  </div>
                  <p className="para">Explore on the world's best &amp; largest Bidding market place with our Bidding
                    products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default RecentNewsArea