import React from 'react'
import { Link } from 'react-router-dom';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function Testimonial3() {
    const testimonialSlider = {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        navigation: {
          nextEl: '.testi-prev1',
          prevEl: '.testi-next1',
        },
      
        breakpoints: {
            280:{
                slidesPerView: 1
              },
          480:{
            slidesPerView: 1,
            autoplay:true,
          },
          768:{
            slidesPerView: 1
          },
          992:{ 
            slidesPerView: 2
          },
          1200:{
            slidesPerView: 3
          },
         
        }
    }
  return (
    <>
      <div className="testimonial-section pt-80 pb-80">
        <img alt="testimonialBGImage" src={process.env.PUBLIC_URL + "/images/bg/client-right.png" }className="client-right-vector" />
        <img alt="testimonialBGImage" src={process.env.PUBLIC_URL + "/images/bg/client-left.png" }className="client-left-vector" />
        <img alt="testimonialBGImage" src={process.env.PUBLIC_URL + "/images/bg/clent-circle1.png"} className="client-circle1" />
        <img alt="testimonialBGImage" src={process.env.PUBLIC_URL + "/images/bg/clent-circle2.png"} className="client-circle2" />
        <img alt="testimonialBGImage" src={process.env.PUBLIC_URL + "/images/bg/clent-circle3.png"} className="client-circle3" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title4">
                <h2>What Client Say</h2>
                <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding
                  products. We want to be a part of your smile, success and future growth.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center position-relative">
            <Swiper {...testimonialSlider} className="swiper testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single hover-border3 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                    <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/quote-green2.svg"} className="quote-icon" />
                    <div className="testi-img">
                      <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/testi1.png"} />
                    </div>
                    <div className="testi-content">
                      <p className="para">The Pacific Grove Chamber of Commerce would like to thank eLab
                        Communications and Mr. Will Elkadi for all the efforts and suggestions that
                        assisted. </p>
                      <div className="testi-designation">
                        <h5><Link to={"#"}>Johan Martin R</Link></h5>
                        <p>CEO Founder</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single hover-border3 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                    <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/quote-green2.svg"} className="quote-icon" />
                    <div className="testi-img">
                      <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/testi2.png"} />
                    </div>
                    <div className="testi-content">
                      <p className="para">The Pacific Grove Chamber of Commerce would like to thank eLab
                        Communications and Mr. Will Elkadi for all the efforts and suggestions that
                        assisted. </p>
                      <div className="testi-designation">
                        <h5><Link to={"#"}>Jamie anderson</Link></h5>
                        <p>CEO Founder</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single hover-border3 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                    <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/quote-green2.svg"} className="quote-icon" />
                    <div className="testi-img">
                      <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/testi3.png"} />
                    </div>
                    <div className="testi-content">
                      <p className="para">The Pacific Grove Chamber of Commerce would like to thank eLab
                        Communications and Mr. Will Elkadi for all the efforts and suggestions that
                        assisted. </p>
                      <div className="testi-designation">
                        <h5><Link to={"#"}>John Peter</Link></h5>
                        <p>CEO Founder</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-arrows testimonial2-arrow d-flex justify-content-between gap-3">
              <div className="testi-prev1 style-3 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
              <div className="testi-next1 style-3 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
                <i className="bi bi-arrow-right" /></div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Testimonial3