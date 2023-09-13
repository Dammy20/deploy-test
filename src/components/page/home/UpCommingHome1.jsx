import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../../common/Counter';
import axios from 'axios';
import { base_Url } from '../../../http/config';
import TimeCounter from '../../common/TimeCounter'
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function UpCommingHome1() {
  const [products, setProducts] = useState([]);
  const [started, setStarted] = useState([])
  const userId = localStorage.getItem("userId")
  // const [started, setStarted] = useState([])


  useEffect(() => {
    displayAllProducts()
  }, [])

  const displayAllProducts = async () => {
    try {
      const response = await axios.get(`${base_Url}/api/Product/GetAllProductApproved?pageNumber=1&pageSize=100`)
      console.log(response.data)
      setProducts(response.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  const filterNonStartedProducts = () => {
    const currentDate = new Date();
    const filtered = products.filter((product) => new Date(product.startDate) > currentDate);
    return filtered;
  };

  const filteredProducts = filterNonStartedProducts();
  console.log(filteredProducts);





  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const upcomingSlider = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: '.coming-prev1',
      prevEl: '.coming-next1',
    },

    breakpoints: {
      280: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },

    }
  }
  return (
    <>

      <div className="upcoming-seciton pb-120">
        {/* <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"} className="img-fluid section-bg" /> */}
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              {filteredProducts.length > 0 && (
                <div className="section-title1">
                  <h2>Up Coming Auction</h2>
                  <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth.</p>
                </div>
              )}

            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <Swiper {...upcomingSlider} className="swiper upcoming-slider">
              <div className="swiper-wrapper">
                {filteredProducts.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">

                    <div className="eg-card c-feature-card1 wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                      <Link to={'/product'} className="auction-img">
                        <div className="">
                          {item.productUrlJson &&
                            item.productUrlJson.split(',')[0] && (
                              <img className=''
                                src={item.productUrlJson.split(',')[0]}

                              />
                            )}

                          <img
                            className=''
                            src="/images/bg/noimage.png"
                            alt="Default Image"
                          />

                        </div>
                        <div className="auction-timer2 gap-lg-3 gap-md-2 gap-1" id="timer7">
                          <Counter startDate={item.startDate} endDate={item.endDate} />
                        </div>
                        <div className="author-area2">

                          <div className="author-emo">
                            <img
                              alt="images"
                              src={process.env.PUBLIC_URL + "/images/icons/smile-emo.svg"}
                            />
                          </div>
                          {/* <div className="author-name">
                            <span>by @robatfox</span>
                          </div> */}
                        </div>
                      </Link>
                      <div className="c-feature-content">
                        <div className="c-feature-category">{item.productName}</div>
                        <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>
                          <h4>{item.productName}</h4>
                        </Link>
                        <p>Bidding Price : <span>{item.auctionSetPrice}</span></p>
                        <div className="auction-card-bttm">
                          <Link to={`${process.env.PUBLIC_URL}/product`} onClick={scrollTop} className="eg-btn btn--primary btn--sm">View
                            Details</Link>
                          <div className="share-area">
                            <ul className="social-icons d-flex">
                              <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
                              <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
                              <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
                              <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
                            </ul>
                            <div>
                              <div className="share-btn"><i className="bx bxs-share-alt" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}



              </div>
            </Swiper>

          </div>
        </div>
      </div>
    </>
  )
}

export default UpCommingHome1