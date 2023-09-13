import React from 'react'
import {Link} from 'react-router-dom'
function HeroBanner() {
  return (
    <>
      <div className="hero-area hero-style-two">
        <img alt="heroImage" src={process.env.PUBLIC_URL + "/images/bg/section-bg2.png"} className="radial-bg" />
        <img alt="heroImage" src={process.env.PUBLIC_URL + "/images/bg/banner2-icon1.png"} className="banner2-icon1" />
        <img alt="heroImage" src={process.env.PUBLIC_URL + "/images/bg/banner2-icon2.png"} className="banner2-icon2" />
        <img alt="heroImage" src={process.env.PUBLIC_URL + "/images/bg/banner2-icon3.png"} className="banner2-icon3" />
        <div className="scroll-text">
          <h6><a href="#category">Scroll Down</a></h6>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-start align-items-end">
            <div className="col-xl-7 col-lg-7">
              <div className="banner2-content">
                <span className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.5s">Welcome To Auction House</span>
                <h1 className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">Build, sell &amp; collect digital items.</h1>
                <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">Nulla facilisi. Maecenas ac tellus ut ligula interdum convallis. Nullam
                  dapibus on erat in dolor posuere, none hendrerit lectus ornare.
                  Suspendisse sit amet turpina sagittis, ultrices dui et, aliquam urna.
                </p>
                <Link to={`${process.env.PUBLIC_URL}/live-auction`} className="eg-btn btn--primary2 btn--lg wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">Start Exploring</Link>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default HeroBanner