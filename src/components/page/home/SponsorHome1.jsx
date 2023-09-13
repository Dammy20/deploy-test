import React from 'react'
import Slider from "react-slick";
function SponsorHome1() {
    const sponsorSlickSlider = {
        rows: 2,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            slidesToShow: 5
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 350,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    }
  return (
    <>
     <div className="sponsor-section style-1 pb-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title1">
                <h2>Trusted By 500+ Businesses.</h2>
                <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding
                  products. We want to be a part of your smile, success and future growth.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="slick-wrapper wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <Slider {...sponsorSlickSlider} id="slick1">
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor1.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor2.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor3.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor4.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor5.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor6.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor7.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor8.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor9.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor1.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor3.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor5.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor8.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor6.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor7.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor8.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor1.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor2.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor9.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor8.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor9.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor1.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor3.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor5.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor8.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor6.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor7.png"} /></div>
                <div className="slide-item"><img alt="sponsorImage" src={process.env.PUBLIC_URL + "/images/bg/sponsor8.png"} /></div>
              </Slider>
            </div>
          </div> 
        </div>
      </div>   
    </>
  )
}

export default SponsorHome1