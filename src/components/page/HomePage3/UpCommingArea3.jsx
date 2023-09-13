// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//     Autoplay,
//     Navigation,
//     Pagination
//   } from "swiper";
// import { Link } from 'react-router-dom';
// import Counter from '../../common/Counter';
//   SwiperCore.use([Navigation, Autoplay,Pagination]);
// function UpCommingArea3() {
//     const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
//     const upCommingSlider = {
//         slidesPerView: 1,
//   speed: 1000,
//   spaceBetween: 24,
//   loop: true,
//   roundLengths: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: 'true',
//   },
//   navigation: {
//     nextEl: '.coming-prev3',
//     prevEl: '.coming-next3',
//   },

//   breakpoints: {
//       280:{
//           slidesPerView: 1,
//           pagination: false
//         },
//     480:{
//       slidesPerView: 1,
//       pagination: false
//     },
//     768:{
//       slidesPerView: 2,
//       pagination: false
//     },
//     992:{ 
//       slidesPerView: 2
//     },
//     1200:{
//       slidesPerView: 3
//     },
   
//   }}
//   return (
//     <>
//      <div className="upcoming-seciton pt-120 pb-120">
//         <div className="container">
//           <div className="row d-flex justify-content-center">
//             <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
//               <div className="section-title1">
//                 <h2>Up Comming Auction</h2>
//                 <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth.</p>
//               </div>
//             </div>
//           </div>
//           <div className="row d-flex justify-content-center">
//             <Swiper {...upCommingSlider} className="swiper upcoming-slider3 swiper-fix">
//               <div className="swiper-wrapper">
//                 <SwiperSlide className="swiper-slide">
//                   <div className="eg-card auction-card3 style-2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
//                     <div className="auction-timer">
//                       <span className="timer-title">Time Remaining</span>
//                       <div className="countdown" id="timer7">
//                         <h4><Counter/></h4>
//                       </div>
//                     </div>
//                     <div className="auction-img">
//                       <img alt="images" src={process.env.PUBLIC_URL +"/images/bg/upcoming21.png"} />
//                       <div className="author-area">
//                         <div className="author-emo">
//                           <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/smile-emo.svg"} />
//                         </div>
//                         <div className="author-name">
//                           <span>by @robatfox</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="auction-content">
//                       <h4><Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>Creative Fashion Ribbon Digital Watch Little</Link></h4>
//                       <p>Bidding Price : <span>$85.9</span></p>
//                       <div className="auction-card-bttm">
//                         <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary3 btn--sm">Place a Bid</Link>
//                         <div className="share-area">
//                           <ul className="social-icons d-flex">
//                             <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
//                           </ul>
//                           <div>
//                             <Link to={"#"} className="share-btn"><i className="bx bxs-share-alt" /></Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide className="swiper-slide">
//                   <div className="eg-card auction-card3 style-2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
//                     <div className="auction-timer">
//                       <span className="timer-title">Time Remaining</span>
//                       <div className="countdown" id="timer8">
//                         <h4><span id="days8">05</span>D :<span id="hours8">05</span>H : <span id="minutes8">52</span>M : <span id="seconds8">32</span>S</h4>
//                       </div>
//                     </div>
//                     <div className="auction-img">
//                       <img alt="images" src={ process.env.PUBLIC_URL +"/images/bg/upcoming22.png"} />
//                       <div className="author-area">
//                         <div className="author-emo">
//                           <img alt="images" src={ process.env.PUBLIC_URL +"/images/icons/smile-emo.svg"} />
//                         </div>
//                         <div className="author-name">
//                           <span>by @robatfox</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="auction-content">
//                       <h4><Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>Havit HV-GB62 USb Black Double Game Pad With</Link></h4>
//                       <p>Bidding Price : <span>$85.9</span></p>
//                       <div className="auction-card-bttm">
//                         <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary3 btn--sm">Place a Bid</Link>
//                         <div className="share-area">
//                           <ul className="social-icons d-flex">
//                             <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
//                           </ul>
//                           <div>
//                             <Link to={"#"} className="share-btn"><i className="bx bxs-share-alt" /></Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide className="swiper-slide">
//                   <div className="eg-card auction-card3 style-2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
//                     <div className="auction-timer">
//                       <span className="timer-title">Time Remaining</span>
//                       <div className="countdown" id="timer9">
//                         <h4><span id="days9">05</span>D :<span id="hours9">05</span>H : <span id="minutes9">52</span>M : <span id="seconds9">32</span>S</h4>
//                       </div>
//                     </div>
//                     <div className="auction-img">
//                       <img alt="images" src={process.env.PUBLIC_URL +"/images/bg/upcoming23.png"} />
//                       <div className="author-area">
//                         <div className="author-emo">
//                           <img alt="images" src={ process.env.PUBLIC_URL +"/images/icons/smile-emo.svg"} />
//                         </div>
//                         <div className="author-name">
//                           <span>by @robatfox</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="auction-content">
//                       <h4><Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>Creative Fashion Riboon Digital Head Phone</Link></h4>
//                       <p>Bidding Price : <span>$85.9</span></p>
//                       <div className="auction-card-bttm">
//                         <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary3 btn--sm">Place a Bid</Link>
//                         <div className="share-area">
//                           <ul className="social-icons d-flex">
//                             <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
//                           </ul>
//                           <div>
//                             <Link to={"#"} className="share-btn"><i className="bx bxs-share-alt" /></Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide className="swiper-slide">
//                   <div className="eg-card auction-card3 style-2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
//                     <div className="auction-timer">
//                       <span className="timer-title">Time Remaining</span>
//                       <div className="countdown" id="timer10">
//                         <h4><span id="days10">05</span>D :<span id="hours10">05</span>H : <span id="minutes10">52</span>M : <span id="seconds10">32</span>S</h4>
//                       </div>
//                     </div>
//                     <div className="auction-img">
//                       <img alt="images" src={ process.env.PUBLIC_URL +"/images/bg/upcoming22.png"} />
//                       <div className="author-area">
//                         <div className="author-emo">
//                           <img alt="images" src={ process.env.PUBLIC_URL +"/images/icons/smile-emo.svg"} />
//                         </div>
//                         <div className="author-name">
//                           <span>by @robatfox</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="auction-content">
//                       <h4><Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>Havit HV-GB62 USb Black Double Game Pad With</Link></h4>
//                       <p>Bidding Price : <span>$85.9</span></p>
//                       <div className="auction-card-bttm">
//                         <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary3 btn--sm">Place a Bid</Link>
//                         <div className="share-area">
//                           <ul className="social-icons d-flex">
//                             <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
//                             <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
//                           </ul>
//                           <div>
//                             <Link to={"#"} className="share-btn"><i className="bx bxs-share-alt" /></Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               </div>
//             </Swiper>
//             <div className="slider-bottom d-flex justify-content-between align-items-center">
//               <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary3-outline btn--md">View ALL</Link>
//               <div className="swiper-pagination style-3 d-lg-block d-none" />
//               <div className="slider-arrows coming-arrow style-3 d-flex gap-3">
//                 <div className="coming-prev3 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
//                 <div className="coming-next3 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>   
//     </>
//   )
// }

// export default UpCommingA