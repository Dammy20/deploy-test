import React from 'react'
import {Link} from 'react-router-dom'   
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function CategoryHome2() {
    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  const   categorySlider = {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        roundLengths: true,
        pagination: false,
        navigation: {
          nextEl: '.category-prev2',
          prevEl: '.category-next2',
        },
    
        breakpoints: {
            280:{
                slidesPerView: 1
              },
          380:{
            slidesPerView: 2
          },
          540:{
            slidesPerView: 3
          },
          576:{
            slidesPerView: 3
          },
          768:{
            slidesPerView: 4
          },
          992:{ 
            slidesPerView: 5
          },
          1200:{
            slidesPerView: 6
          },
          1400:{
            slidesPerView: 7
          },
        }
    }
  return (
    <>
     <div className="category-section2 pt-120 pb-120" id="category">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <Swiper {...categorySlider} className="swiper category2-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/accessories.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/cat-icon2.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Accessories</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/cars.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/car-icon.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Cars</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/motobike.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/moto-bike.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Motor Bike</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/fashion.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/cat-icon4.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Fashion</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/virtual.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/cat-icon5.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Virtual Worlds</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/music.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/cat-icon1.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Music</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/cards.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/cat-icon3.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Trading Cards</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/fashion.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/cat-icon4.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Fashion</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
                      <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/bg/cards.png"} className="category-img" />
                      <div className="content">
                        <img alt="categoryImage" src={process.env.PUBLIC_URL + "/images/icons/cat-icon3.svg"} />
                        <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Trading Cards</Link></h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default CategoryHome2