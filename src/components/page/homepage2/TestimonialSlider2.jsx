import React from 'react'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function TestimonialSlider2() {
    const testimonialSlider2 = {
        slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: '.testi-prev2',
        prevEl: '.testi-next2',
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
        <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/bg/client-right.png"} className="client-right-vector" />
        <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/bg/client-left.png"} className="client-left-vector" />
        <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/bg/client-circle4.png"} className="client-circle4" />
        <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/bg/client-circle5.png"} className="client-circle5" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title1">
                <h2>What Client Say</h2>
                <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding
                  products. We want to be a part of your smile, success and future growth.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center position-relative">
            <Swiper {...testimonialSlider2} className="swiper testimonial-slider2">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single style2 hover-border2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                    <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/icons/quote-red.svg"} className="quote-icon" />
                    <div className="testi-img">
                      <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/bg/testi1.png"} />
                    </div>
                    <div className="testi-content">
                      <div className="testi-designation">
                        <h5>Johan Martin R</h5>
                        <p>CEO Founder</p>
                      </div>
                      <p className="para">The Pacific Grove Chamber of Commerce would like to thank eLab
                        Communications and Mr. Will Elkadi for all the efforts and suggestions that
                        assisted. </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single style2 hover-border2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                    <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/icons/quote-red.svg"} className="quote-icon" />
                    <div className="testi-img">
                      <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/bg/testi2.png"} />
                    </div>
                    <div className="testi-content">
                      <div className="testi-designation">
                        <h5>Johan Dou RO</h5>
                        <p>Marketing Officer</p>
                      </div>
                      <p className="para">The Pacific Grove Chamber of Commerce would like to thank eLab
                        Communications and Mr. Will Elkadi for all the efforts and suggestions that
                        assisted. </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single style2 hover-border2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                    <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/icons/quote-red.svg"} className="quote-icon" />
                    <div className="testi-img">
                      <img alt="testimonialImage" src={process.env.PUBLIC_URL +  "/images/bg/testi3.png"} />
                    </div>
                    <div className="testi-content">
                      <div className="testi-designation">
                        <h5>Martin Luther</h5>
                        <p>CTO Enginier</p>
                      </div>
                      <p className="para">The Pacific Grove Chamber of Commerce would like to thank eLab
                        Communications and Mr. Will Elkadi for all the efforts and suggestions that
                        assisted. </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-arrows testimonial2-arrow d-flex justify-content-between gap-3">
              <div className="testi-prev2 style-2 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
              <div className="testi-next2 style-2 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
                <i className="bi bi-arrow-right" /></div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default TestimonialSlider2