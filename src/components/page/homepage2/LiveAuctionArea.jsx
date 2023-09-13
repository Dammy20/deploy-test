import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../../common/Counter'

function AuctionCard(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <>
      <div className="row d-flex justify-content-center mt-4">


        <div className=" mb-40  d-flex gap-3 flex-wrap justify-content-center" data-wow-duration="1.5s" data-wow-delay="0.2s">





          <div className="auction-img">
            <img alt="" src={`${process.env.PUBLIC_URL} ${props.image}`} />
            <div className="auction-timer2">
              <div className="countdown" id="timer1">
                <h5><Counter /></h5>
              </div>
            </div>
          </div>
          <div className="auction-content">
            <h4><Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>{props.title}</Link></h4>
            <div className="author-price-area">
              <div className="author">
                <img alt="authorimage" src={`${process.env.PUBLIC_URL} ${props.authorImg}`} /><span className="name">By {props.authorName}</span>
              </div>
              <p>${props.price}</p>
            </div>
            <div className="auction-card-bttm">
              <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary2 btn--sm">Place a Bid</Link>
              <div className="share-area">
                <i className="bi bi-heart" />
                <i className="bi bi-three-dots-vertical" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function LiveAuctionArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <>
      <div className="live-auction pb-120">
        <img alt="auctioniImage" src={process.env.PUBLIC_URL + "/images/bg/section-bg2.png"} className="img-fluid section-bg2" />
        <div className="container position-relative">
          <img alt="auctioniImage" src={process.env.PUBLIC_URL + "/images/bg/dotted2.png"} className="dotted3" />
          <div className="row d-flex justify-content-center align-items-center mb-60 g-4">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title2 text-lg-end text-center">
                <h2>Live Auction</h2>
                <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding
                  products. We want to be a part of your smile, success and future growth.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-xl-6 text-lg-start text-center">
              <Link to={`${process.env.PUBLIC_URL}/auction-details`} onclick={scrollTop} className="eg-btn btn--primary2 btn--md">View All</Link>
            </div>
          </div>
          <div className="row gy-4 d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image="/images/bg/live-auc1.png"
                title="Brand New royal Enfield 250 CC For special Sale"
                authorImg="/images/bg/auction-authr1.png"
                price="46.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image="/images/bg/live-auc2.png"
                title="Wedding wow Exclusive Cupple Ring (S2022)"
                authorImg="/images/bg/auction-authr2.png"
                price="56.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image="/images/bg/live-auc3.png"
                title="Brand New Honda CBR 600 RR For Sale (2022)"
                authorImg="/images/bg/auction-authr3.png"
                price="66.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image="/images/bg/live-auc4.png"
                title="Toyota AIGID A Class Hatchback Sale (2017 - 2021)"
                authorImg="/images/bg/auction-authr1.png"
                price="25.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image="/images/bg/live-auc5.png"
                title="Havit HV-G61 USB Black Double Game With Vibrat"
                authorImg="/images/bg/auction-authr2.png"
                price="28.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image="/images/bg/live-auc6.png"
                title="IPhone 11 Pro Max All Variants Available For Sale"
                authorImg="/images/bg/auction-authr3.png"
                price="88.25"
                authorName="Sara Alexa"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LiveAuctionArea