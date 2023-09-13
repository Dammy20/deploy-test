import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Counter from '../../common/Counter'
import moment from 'moment-timezone'
import axios from 'axios'
import { UserProvider } from '../../common/UserContext'
import { base_Url } from '../../../http/config'
import { UserContext } from '../../common/UserContext'
function AuctionDetailsTab({ description }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const location = useLocation()

  const [createdUser, setCreatedUser] = useState([])
  const userId = localStorage.getItem("userId")
  const [showMessage, setShowMessage] = useState(false)
  const [prodId, setProdId] = useState([])
  const [bid, setBid] = useState([])
  const [hoursDate, setHoursDate] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [biddingId, setBiddingId] = useState([])
  const [bidding, setBidding] = useState([])
  const { userProfileImage } = useContext(UserContext)



  useEffect(() => {
    display()
    biddingUser()

  }, [])
  const biddingUser = async () => {
    try {

      const response = await axios.get(`${base_Url}/api/Bidding/GetAllBiddingByUsers?UserId=${userId}`);
      const bids = response.data;


      const bidsWithProductNamesPromises = bids.map(async (bid) => {
        const productResponse = await axios.get(`${base_Url}/api/Product/ExistingProduct?Id=${bid.productId}`);
        console.log(bid.productId)
        const productDetails = productResponse.data[0];
        return {
          ...bid,
          productName: productDetails.productName
        };
      });

      const bidsWithProductNames = await Promise.all(bidsWithProductNamesPromises);

      setBid(bidsWithProductNames);
      console.log(bid)
    } catch (error) {
      console.log(error);
    } finally {

    }
  };

  const getTimeAgo = (timestamp) => {
    const date = new Date(timestamp);
    const currentDate = new Date();
    const timeDiff = currentDate - date;
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);

    if (secondsDiff < 60) {
      return `${secondsDiff} ${secondsDiff === 1 ? 'second' : 'seconds'} ago`;
    } else if (minutesDiff < 60) {
      return `${minutesDiff} ${minutesDiff === 1 ? 'minute' : 'minutes'} ago`;
    } else if (hoursDiff < 24) {
      return `${hoursDiff} ${hoursDiff === 1 ? 'hour' : 'hours'} ago`;
    } else {
      return `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago`;
    }
  };
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    // Adjust the date to your system's time zone
    const adjustedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // Use 24-hour format
    };

    return adjustedDate.toLocaleDateString('en-US', options);
  };




  const display = async () => {
    try {

      const response = await axios.get(`${base_Url}/api/Product/GetAllProductByCreatedUser?CreatedBy=${userId}&pageNumber=1&pageSize=10`)
      console.log(response.data)
      setCreatedUser(response.data.data)
    } catch (error) {
      console.log(error)
    } finally {

    }

  }
  return (
    <>
      <UserProvider>

        <div className="row d-flex justify-content-center g-4">
          <div className="col-lg-8">
            <ul className="nav nav-pills d-flex  justify-content-start gap-sm-4 gap-3 mb-45 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active details-tab-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link details-tab-btn" id="pills-bid-tab" data-bs-toggle="pill" data-bs-target="#pills-bid" type="button" role="tab" aria-controls="pills-bid" aria-selected="false">Biding History</button>
              </li>
              <li className="nav-item" role="presentation">
                {/* <button className="nav-link details-tab-btn" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Other Auction</button> */}
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="describe-content">
                  <h4>{description}</h4>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-bid" role="tabpanel" aria-labelledby="pills-bid-tab">
                <div className="bid-list-area">
                  <div>
                    {bid.map((item, index) => (
                      <ul className="bid-list" key={index}>
                        <li>
                          <div className="row d-flex align-items-center">
                            <div className="col-7">
                              <div className="bidder-area">
                                <div className="bidder-content">
                                  <Link to={"#"}><h6>{item.productName}</h6></Link>
                                  <p>{item.priceRaised}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-5 text-end">
                              <div className="bid-time">
                                <p>{formatDateTime(item.biddingDate)} </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-10 ">
                    {Array.isArray(createdUser) && createdUser.map((item, index) => (
                      <div className="eg-card auction-card1  " key={index}>
                        <div className="auction-img mt-4 d-flex">
                          {item.productUrlJson && item.productUrlJson.split(',').length > 0 && (
                            <img
                              className=''
                              src={item.productUrlJson.split(',')[0]}
                              alt={`Product Image 0`}
                            />
                          )}
                          {!item.productUrlJson && (
                            <img
                              alt="images"
                              src={process.env.PUBLIC_URL + "/images/bg/noimage.png"}
                            />
                          )}

                          <div className="author-area">
                            <div className="author-emo">
                              <img alt="imagess" src={process.env.PUBLIC_URL + "/images/icons/smile-emo.svg"} />
                            </div>
                            <div className="author-name">
                              <span>by @robatfox</span>
                            </div>
                          </div>
                        </div>
                        <div className="auction-content">
                          {/* <h4><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>{item.auctionSetPrice}</Link></h4> */}
                          <p>Bidding Price : <span>{item.auctionSetPrice}</span> </p>
                          <span>{item.description}</span>
                          <div className="auction-card-bttm">
                            <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary btn--sm">Place a Bid</Link>
                            <div className="share-area">
                              <ul className="social-icons d-flex">
                                <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
                                <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
                                <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
                                <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
                              </ul>
                              <div>
                                <Link to={"#"} className="share-btn"><i className="bx bxs-share-alt" /></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </UserProvider>




    </>
  )
}

export default AuctionDetailsTab