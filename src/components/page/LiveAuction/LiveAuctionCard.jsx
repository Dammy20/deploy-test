import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import axiosInstance from "../../../store/axiosinstance";
import 'react-toastify/dist/ReactToastify.css';
import { RiAccountPinBoxFill } from "react-icons/ri";
import { ToastContainer } from 'react-toastify';
import { MdAccountTree } from "react-icons/md";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { Base_Url, base_Url, BASE_URL } from "../../../http/config";
import Counter from "../../common/Counter";
import Swal from "sweetalert2"
import "swiper/css/autoplay";



function LiveAuctionCard(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const [isAuctionStarted, setIsAuctionStarted] = useState(new Date() >= new Date(props.startDate));
  const [showPopup, setShowPopup] = useState(false);
  const [account, setAccount] = useState([])
  const [existingDetails, setExistingDetails] = useState([])
  const [showPop, setShowPop] = useState(false)
  const [endedAuctionProductIds, setEndedAuctionProductIds] = useState([]);

  const [showMessage, setShowMessage] = useState(false)
  const userId = localStorage.getItem("userId")
  const encodedAuctionId = btoa(props.productId);
  // const encodedAuctionId = props.productId;


  const [isAuctionEnded, setIsAuctionEnded] = useState(new Date() > new Date(props.endDate));
  const history = useHistory()
  useEffect(() => {

    existingAll()

  }, [])
  const closeModal = () => {
    setShowPop(false)
  }
  const existingAll = async () => {
    try {
      const response = await axios.get(`${Base_Url}/auction/api/Profile/ExistingDetails?User_Id=${userId}`)
      console.log(response.data)
      setExistingDetails(response.data[0]);



    } catch (error) {
      console.log(error)
    }
  }
  const handleCompleted = async (customerCode, priceRaised, productId) => {

    try {
      const data = {
        customerCode: customerCode,
        amount: priceRaised,

        productId: productId,
        status: "Completed",
      };

      const response = await axiosInstance.put(`${Base_Url}/payment/api/HoldReleaseFund/releasefundservice`, data);

      console.log(response.data);

      if (response.data.isSuccessful === true) {
        toast.success(response.data.responseMessage);
      }

    } catch (error) {
      console.error("Error releasing funds:", error);
    }
  };

  const getCustomerAccount = async (userId) => {
    try {

      const response = await axiosInstance.get(`${Base_Url}/payment/api/CustomerAccount/GetCustomerAccount?userId=${userId}`);

      console.log(response.data);

      if (response.data.isSuccessful === true) {
        return response.data;
      } else {
        console.error("Error getting customer account:", response.data.responseMessage);
        return null;
      }
    } catch (error) {
      console.error("Error getting customer account:", error);
      return null;
    }
  };
  const getPreviousBidderDetails = async (productId) => {
    try {
      const response = await axiosInstance.get(`${Base_Url}/auction/api/Bidding/GetPreviousBidderDetails?ProductId=${productId}`);
      console.log("Response from GetPreviousBidderDetails:", response);


      if (response.data) {
        return response;
      } else {
        console.log("No previous bidder details found.");
        return { data: [] }; // Return a default value if no data is found
      }
    } catch (error) {
      console.log("Error getting previous bidder details:", error);
      return null;
    }

  };


  useEffect(() => {
    if (props.isAuctionEnded) {
      updateAuction([props.productId]);
    } else if (isAuctionEnded) {
      setIsAuctionEnded(true)
      updateAuction([props.productId])
    }
  }, [props.isAuctionEnded, props.productId]);



  const updateAuction = async (productId) => {
    console.log(productId)
    try {

      const response = await axios.post(`${base_Url}/api/Product/UpdateAuctionEnded`, {
        productId: Number(productId),
        isAuctionEnded: true,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };

  const auctionn = async (e) => {



    try {

      if (!isAuctionStarted) {
        e.preventDefault()
        Swal.fire({
          title: 'The auction is yet to start. Please wait for the auction to begin',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
          timer: 1500,
        });
      } else if (props.createdBy === userId) {
        e.preventDefault()
        Swal.fire({
          title: 'As a user, You cannot place a bid on products you created',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
          timer: 2000,
        });
      } else {
        if (isAuctionStarted) {
          if (!existingDetails) {

            e.preventDefault()
            toast.error("Please fill your profile in order to proceed")
          } else if (existingDetails.walletAccount === null) {
            e.preventDefault()
            setShowPop(true);
          } else if (isAuctionEnded) {
            e.preventDefault()
            const previousBidderDetailsArray = await getPreviousBidderDetails(props.productId);
            const previousBidding = previousBidderDetailsArray.data;

            const customerAccount = await getCustomerAccount(previousBidding.userId);

            if (customerAccount && customerAccount.data) {
              const customerCode = customerAccount.data.paystackCustomerCode;


              await handleCompleted(customerCode, previousBidding.priceRaised, props.productId, "Completed");


              await updateAuction();

            }
          } else {
            history.push("/auction-details");
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };




  // const auctionn = (e) => {
  //   if (!isAuctionStarted) {
  //     if (props.createdBy === userId) {
  //       e.preventDefault();
  //       Swal.fire({
  //         title: 'Please be informed that the auction is yet to start, and you are kindly requested to wait for its commencement.Additionally, you are not permitted to bid on products you have created.',
  //         showClass: {
  //           popup: 'animate__animated animate__fadeInDown'
  //         },
  //         hideClass: {
  //           popup: 'animate__animated animate__fadeOutUp'
  //         },
  //         timer: 6000
  //       });
  //     } else {
  //       e.preventDefault();
  //       Swal.fire({
  //         title: 'The auction is yet to start. Please wait for the auction to begin',
  //         showClass: {
  //           popup: 'animate__animated animate__fadeInDown'
  //         },
  //         hideClass: {
  //           popup: 'animate__animated animate__fadeOutUp'
  //         },
  //         timer: 1500
  //       });
  //     }
  //   } else if (isAuctionEnded) {
  //     // e.preventDefault()
  //     updateAuction()
  //   } else {

  //     history.push("./auction-details")
  //   }
  // }

  return (
    <>
      <div>

        <ToastContainer />
      </div>
      <Modal show={showPop} onHide={closeModal} className="custom-modal" centered>
        <Modal.Header closeButton>

          <h4 className='mt-4 text-danger'> Important Information</h4>
        </Modal.Header>
        <Modal.Body>



          <div className="image-preview-container">

          </div>
          <h5>Sorry, this operation cannot be perfomed, you do not have a Wallet Account</h5>
          <div className="d-flex justify-content-between mt-4 pb-4 ">
            <Link to={"/walletaccount"}>  <button style={{ backgroundColor: "#090892" }} className="btn btn-primary p-2 rounded-3 px-3 font-weight-bolder"> <RiAccountPinBoxFill />
              Open Account
            </button></Link>
            <Link to={"/linkaccount"}> <button className="btn btn-dark p-2 rounded-3 p-2 px-3 font-weight-bolder"><MdAccountTree />
              Link wallet
            </button></Link>
          </div>

        </Modal.Body>








      </Modal>

      <div
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"

        className="eg-card  c-feature-card1 wow animate fadeInDown" data-aos="zoom-in-left"
      >
        <div className="auction-img">
          <img alt="images" src={props.image ? props.image : "/images/bg/noimage.png"} />

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
            <h4>{props.productName}</h4>
          </Link>
          <div className="description">
            {props.title ? (
              <p className="description-text">
                {props.title.length > 40
                  ? `${props.title.slice(0, 40)}...`
                  : props.title}
                {props.title.length > 40 && (
                  <Link style={{ color: "#090892" }}
                    to={isAuctionEnded ? "#" : `/auction-details?productId=${encodedAuctionId}`}
                    onClick={(e) => auctionn(e)}
                  >
                    Read more
                  </Link>
                )}
              </p>
            ) : (
              <p>No description available</p>
            )}
          </div>

          <p style={{ marginTop: "-7px" }}>
            Bidding Price : <span>₦{props.auctionSetPrice}</span>
          </p>
          <div className="auction-card-bttm">

            <Link
              to={isAuctionEnded ? "#" : `/auction-details?productId=${encodedAuctionId}`}

              className={`eg-btn btn--primary btn--sm ${isAuctionEnded ? 'disabled' : ''}`}
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
