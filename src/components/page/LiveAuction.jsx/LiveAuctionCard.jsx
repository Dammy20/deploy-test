import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2"
// import withReactContent from "sweetalert2-react-content"
import axios from "axios";
import { useState } from "react";
import Counter from "../../common/Counter";
import "swiper/css/autoplay";
import { base_Url } from "../../../http/config";


function LiveAuctionCard(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  // console.log(props);
  const [isAuctionStarted, setIsAuctionStarted] = useState(new Date() >= new Date(props.startDate));
  const [showPopup, setShowPopup] = useState(false);
  const [endedAuctionProductIds, setEndedAuctionProductIds] = useState([]);

  const [showMessage, setShowMessage] = useState(false)
  const encodedAuctionId = btoa(props.productId);

  const isAuctionEnded = new Date() > new Date(props.endDate);
  const history = useHistory()


  useEffect(() => {
    if (props.isAuctionEnded) {
      updateAuction([props.productId]);
    } else if (isAuctionEnded) {
      props.isAuctionEnded == true
      updateAuction([props.productId])
    }
  }, [isAuctionEnded, props.productId]);



  const updateAuction = async (productId) => {
    console.log(productId)
    try {

      const response = await axios.post(`${base_Url}/api/Product/UpdateAuctionEnded`, {
        productId: Number(productId),
        isAuctionEnded: true,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  const auctionn = (e) => {
    if (!isAuctionStarted) {
      e.preventDefault();
      Swal.fire({
        title: 'The auction is yet to start. Please wait for the auction to begin',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        timer: 1500
      })

    } else if (isAuctionEnded) {
      e.preventDefault()
      updateAuction()

    } else {

      history.push("./auction-details")
    }
  }

  return (
    <>

      <div
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"

        className="eg-card  c-feature-card1 wow animate fadeInDown" data-aos="zoom-in-left"
      >
        <div className="auction-img">
          <img alt="images" src={props.image} />
          <div className="auction-timer2 gap-lg-3 gap-md-2 gap-1" id="timer7">
            <Counter startDate={props.startDate} endDate={props.endDate} productId={props.productId} />
          </div>
          <div className="author-area2" data-aos="zoom-in-left" >
            <div className="author-emo ">
              <img
                alt="images"
                src={process.env.PUBLIC_URL + "/images/icons/smile-emo.svg"}
              />
            </div>

          </div>
        </div>
        <div className="c-feature-content">
          <div className="c-feature-category">{props.productname}</div>
          <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>
            <h4>{props.productname}</h4>
          </Link>
          <p>
            Bidding Price : <span>₦{props.auctionSetPrice}</span>
          </p>
          <div className="auction-card-bttm">

            <Link
              to={isAuctionEnded ? "#" : `/auction-details?productId=${encodedAuctionId}`}

              className={`eg-btn btn--primary btn--sm ${!isAuctionStarted || isAuctionEnded ? 'disabled' : ''}`}
              onClick={(e) => auctionn(e)}

            >
              {isAuctionEnded ? "Auction Ended" : "Place a Bid"}
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
      </div >
    </>
  );
}

export default LiveAuctionCard;
