import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Counter from '../../common/Counter'
import moment from 'moment-timezone'
import axios from 'axios'
import { UserProvider } from '../../common/UserContext'
import { Base_Url, base_Url } from '../../../http/config'
import { UserContext } from '../../common/UserContext'
import axiosInstance from '../../../store/axiosinstance'
import AuctionDetailsInfo from './AuctionDetailsInfo'
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
  const [latestBid, setLatestBid] = useState([])
  const [bidding, setBidding] = useState([])
  const [userAmount, setUserAmount] = useState([])
  const searchParams = new URLSearchParams(location.search);
  const encodedProductId = searchParams.get('productId');

  const productId = atob(encodedProductId);
  const { userProfileImage } = useContext(UserContext)



  useEffect(() => {
    display()
    biddingUser()
    handleLatestBid()


  }, [productId])

  const handleLatestBid = async () => {
    try {
      const response = await axiosInstance.get(`${Base_Url}/auction/api/Bidding/GetLatestBiddingPriceByProductId?ProductId=${productId}`)
      console.log(response.data)
      setLatestBid(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const biddingUser = async () => {
    try {

      const response = await axios.get(`${Base_Url}/auction/api/Bidding/GetAllBiddedUsersByproductId?ProductId=${productId}`);
      console.log(response.data)
      setBid(response.data)
      // const bids = response.data;


      // const bidsWithProductNamesPromises = bids.map(async (bid) => {
      //   const productResponse = await axios.get(`${Base_Url}/auction/api/Product/ExistingProduct?Id=${bid.productId}`);
      //   console.log(bid.productId)
      //   const productDetails = productResponse.data[0];
      //   return {
      //     ...bid,
      //     productName: productDetails.productName
      //   };
      // });

      // const bidsWithProductNames = await Promise.all(bidsWithProductNamesPromises);

      // setBid(bidsWithProductNames);
      console.log(bid)
    } catch (error) {
      console.log(error);
    } finally {

    }
  };




  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const adjustedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Use 12-hour format with AM/PM
    };

    const dateTimeString = adjustedDate.toLocaleDateString('en-US', options);

    return dateTimeString;
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
                <button className="nav-link details-tab-btn" id="pills-price-tab" data-bs-toggle="pill" data-bs-target="#pills-price" type="button" role="tab" aria-controls="pills-price" aria-selected="false">Latest Bidding Price</button>
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
                  {bid && bid.length > 0 ? (
                    <div style={{ gap: "32rem" }} className='d-flex mt-4 '>
                      <h6 style={{ paddingLeft: "2rem" }} className='font-weight-bolder'>Previous Biddings</h6>
                      <h6 className='font-weight-bolder'>BiddingDates</h6>
                    </div>
                  ) : null}
                  <div>
                    {bid.map((item, index) => (
                      <ul className="bid-list" key={index}>
                        <li>
                          <div className="row d-flex align-items-center">
                            <div className="col-7">
                              <div className="bidder-area">
                                <div className="bidder-content">
                                  <Link to={"#"}><h6>{item.productName}</h6></Link>

                                  <h6 style={{ color: "#090892" }}>₦{item.priceRaised}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-5 text-end">
                              <div className="bid-time">

                                <p style={{ color: "#090892" }}>{formatDateTime(item.biddingDate)} </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade " id="pills-price" role="tabpanel" aria-labelledby="pills-price-tab">
                <div className='bid-list-area'>

                  <ul className='bid-list text-danger p-2 font-weight-bolder ' style={{ fontWeight: "bolder", paddingTop: "5px" }}>
                    <li>{latestBid.message}</li>
                  </ul>



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