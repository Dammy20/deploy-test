import React from "react";
import { Link } from "react-router-dom";
import Counter from "../../common/Counter";
function AuctionCard3(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div
        className="eg-card auction-card3 wow fadeInDown"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
      >
        <div className="auction-timer">
          <span className="timer-title">Time Remaining</span>
          <div className="countdown" id="timer1">
            <h4>
           <Counter/>
            </h4>
          </div>
        </div>
        <div className="auction-img">
          <img
            alt="liveAuctionImage"
            src={`${process.env.PUBLIC_URL} ${props.auctionImg}`}
          />
          <div className="author-area">
            <div className="author-emo">
              <img
                alt="liveAuctionImage"
                src={process.env.PUBLIC_URL + "/images/icons/smile-emo.svg"}
              />
            </div>
            <div className="author-name">
              <span>by @robatfox</span>
            </div>
          </div>
        </div>
        <div className="auction-content">
          <h4>
            <Link
              to={`${process.env.PUBLIC_URL}/auction-details`}
              onClick={scrollTop}
            >
              {props.content}
            </Link>
          </h4>
          <p>
            Bidding Price : <span>${props.price}</span>
          </p>
          <div className="auction-card-bttm">
            <Link
              to={`${process.env.PUBLIC_URL}/auction-details`}
              onClick={scrollTop}
              className="eg-btn btn--primary3 btn--sm"
            >
              Place a Bid
            </Link>
            <div className="share-area">
              <ul className="social-icons d-flex">
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-pinterest" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-instagram" />
                  </Link>
                </li>
              </ul>
              <div>
                <Link to={"#"} className="share-btn">
                  <i className="bx bxs-share-alt" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function LiveAuction3() {
  return (
    <>
      <div className="live-auction pb-120">
        <img
          alt="images"
          src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"}
          className="img-fluid section-bg"
        />
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title4">
                <h2>Live Auction</h2>
                <p className="mb-0">
                  Explore on the world's best &amp; largest Bidding marketplace
                  with our beautiful Bidding products. We want to be a part of
                  your smile, success and future growth.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4 d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard3
                auctionImg="/images/bg/live-auc21.png"
                content="Toyota AIGID A Clasic Hatchback spciale Sale"
                price="120.99"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard3
                auctionImg="/images/bg/live-auc22.png"
                content="Havit HV-G61 USB Black Double Game Pad with"
                price="110.99"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard3
                auctionImg="/images/bg/live-auc23.png"
                content="Creative Fashion Ribbon Digital Watch Little Elegant"
                price="90.99"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard3
                auctionImg="/images/bg/live-auc24.png"
                content="Brand New Royal enfield 250 cc For Flase Sale."
                price="85.99"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard3
                auctionImg="/images/bg/live-auc25.png"
                content="Creative Fashion Ribbon Digital Sun Class S22"
                price="35.99"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard3
                auctionImg="/images/bg/live-auc26.png"
                content="Creative Fashion Riboon Digital Watch Little Elegant"
                price="33.99"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveAuction3;
