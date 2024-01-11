import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import Counter from '../../common/Counter'
import axiosInstance from '../../../store/axiosinstance';
import AuctionDetailsTab from './AuctionDetailsTab';
import { toast } from "react-toastify"
import axios from 'axios';
import { Modal, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { base_Url, Base_Url } from '../../../http/config';
import './auction.css'
import { AuthContext } from '../../common/AuthProvider';
import { useContext } from 'react';


function AuctionDetailsInfo({ startDate, endDate }) {
  const userId = localStorage.getItem("userId")
  const [isLoading, setIsLoading] = useState(false)
  const [showPopPin, setShowPopPin] = useState(false)
  const [fundsHoldingSuccess, setFundsHoldingSuccess] = useState(false)
  const AuthState = useContext(AuthContext)
  const [latestBidding, setLatestBidding] = useState([])
  const [message, setMessage] = useState("")
  const [transact, setTransact] = useState({
    transaction: ""
  })
  const [createAccount, setCreateAccount] = useState([])
  const [account, setAccount] = useState([])

  const history = useHistory()


  const [showMessage, setShowMessage] = useState(false);

  const [uploading, setUploading] = useState(false)
  const location = useLocation();
  const [link, setlink] = useState([])



  const [productDisplay, setProductDisplay] = useState([])

  const searchParams = new URLSearchParams(location.search);
  const encodedProductId = searchParams.get('productId');

  const productId = atob(encodedProductId);



  const [selectmage, setSelectmage] = useState('')



  const [bidding, setBidding] = useState({
    userId: "",
    productId: "",
    priceRaised: "",
  })
  const handleLinkAccount = async () => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.get(`${Base_Url}/payment/api/CustomerAccount/GetCustomerAccount?userId=${userId}`)
      console.log(response.data)
      console.log(response.data.data.amount)
      console.log(response.data.data.paystackCustomerCode)

      if (response.data.isSuccessful === true) {
        setlink(response.data.data)

      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  const closeModal = () => {
    setShowPopPin(false)
  }
  const displaySingleProduct = async (productId) => {
    console.log(productId)
    const response = await axiosInstance.get(`${base_Url}/api/Product/ExistingProduct?Id=${productId}`)
    setProductDisplay(response.data)
    console.log(response)
  }

  const displayBidding = async () => {
    const response = await axiosInstance.get(`${base_Url}/api/Bidding/GetAllBiddings`)
    console.log(response.data)

  }
  useEffect(() => {

    displayBidding()
    handleLatestBidding()
    handleLinkAccount()



    displaySingleProduct(productId)
  }, [productId]);


  const handleLatestBidding = async () => {
    try {
      const response = await axiosInstance.get(
        `${Base_Url}/auction/api/Bidding/GetLatestBiddingPriceByProductId?ProductId=${productId}`
      );
      console.log(response);

      setLatestBidding(response.data);

      return response;
    } catch (error) {
      console.error("Error fetching latest bidding price:", error);
      throw error;
    }
  };

  const handleForm = (e, transactionPin) => {
    e.preventDefault();
    handleFundsHolding(transactionPin)
      .then(() => {
        closeModal();
      })
      .catch(error => {

        console.error(error);
      });
  };




  const handleModalSubmit = async (e, transactionPin) => {
    setIsLoading(true)
    try {
      e.preventDefault();

      if (!showPopPin) {
        return;
      }

      if (transact.transaction === "") {
        toast.error("Please enter a transaction pin");
        return;
      }

      const previousBidderDetailsArray = await getPreviousBidderDetails(productId);
      const previousBidding = previousBidderDetailsArray.data
      console.log(previousBidding.priceRaised)

      const customerAccount = await getCustomerAccount(previousBidding.userId);
      console.log(customerAccount)

      if (customerAccount && customerAccount.data) {
        const customerCode = customerAccount.data.paystackCustomerCode;
        console.log(customerCode, previousBidding.priceRaised, productId);

        await releaseFunds(customerCode, previousBidding.priceRaised, productId, "Returned");

        const fundsHoldingSuccess = await handleFundsHolding(transactionPin);

        if (fundsHoldingSuccess) {
          await handleMainBidding();
          closeModal();
        } else {
          toast.error("Funds holding was not successful. Please try again.");
        }
      }
      else {
        console.log("No previous bidders found. Allowing the user to bid...");
        const fundsHoldingSuccess = await handleFundsHolding(transactionPin);

        if (fundsHoldingSuccess) {
          await handleMainBidding();
          closeModal();
        } else {
          toast.error("Funds holding was not successful. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error in handleModalSubmit:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false)
    }
  };



  const handleFundsHolding = async (transactionPin) => {
    setIsLoading(true);

    const data = {
      customerCode: link.paystackCustomerCode,
      transactionPin: transactionPin,
      amount: bidding.priceRaised,
      productId: productId,
    };
    console.log(data);

    try {
      const response = await axiosInstance.post(`${Base_Url}/payment/api/HoldReleaseFund/holdfundservice`, data);
      console.log(response.data);
      if (response.data.isSuccessful === true) {
        toast.success(response.data.responseMessage)
        setFundsHoldingSuccess(true);
        return true
      } else if (response.data.isSuccessful === false) {
        setFundsHoldingSuccess(false);
        toast.error(response.data.responseMessage)
        return false;
      }

      // Close the modal after handling funds
      closeModal();
    } catch (error) {
      console.log(error);
      setFundsHoldingSuccess(false);
      return false;
    } finally {
      setIsLoading(false);
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

  const releaseFunds = async (customerCode, priceRaised, productId) => {

    try {
      const data = {
        customerCode: customerCode,
        amount: priceRaised,

        productId: productId,
        status: "Returned",
      };

      const response = await axiosInstance.put(`${Base_Url}/payment/api/HoldReleaseFund/releasefundservice`, data);

      console.log(response.data);

      if (response.data.isSuccessful === true) {
        toast.success(response.data.responseMessage);
      }
      // else if (response.data.isSuccessful === false) {
      //   toast.error(response.data.responseMessage);
      // }
    } catch (error) {
      console.error("Error releasing funds:", error);
    }
  };
  const handleMainBidding = async () => {
    try {
      const productPrice = BigInt(bidding?.priceRaised || 0);
      const formattedProductPrice = productPrice.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
      });

      const data = {
        userId: Number(userId),
        productId: productId.toString(),
        priceRaised: formattedProductPrice,
        walletBalance: link.amount.toString(),
      };

      console.log("Bidding data:", data);

      const response = await axiosInstance.post(`${base_Url}/api/Bidding/PostBiddings`, data);

      console.log("Post Bidding Response:", response);

      if (response.data.isSuccess === true) {


        toast.success(response.data.message);
        setBidding({ ...bidding, priceRaised: "" });
        setShowMessage(true);
        history.push("/product");
      }

      else if (response.data.isSuccess === false) {
        toast.error(response.data.message);
        setShowPopPin(false);
        setBidding({ ...bidding, priceRaised: "" });
      }
    } catch (error) {
      console.error("Error in handleMainBidding:", error);
      toast.error("An error occurred. Please try again.");

      if (!fundsHoldingSuccess) {
        history.push("./product");
        toast.error("Unsuccessful. Please try again.");
      } else {
        toast.error(error.message);
      }
    } finally {
      setShowMessage(false);
      setUploading(false);
      history.push("./product");
    }
  };




  const handleBidding = (e) => {
    setBidding({ ...bidding, [e.target.name]: e.target.value })
  }


  const handleSubmitBidding = async (event) => {
    event.preventDefault();


    const biddingAmount = Number(bidding.priceRaised);
    if (bidding.priceRaised.trim() === "") {
      toast.error("Please enter a price");
      return;
    } else if (link.amount < bidding.priceRaised) {
      toast.error("Insufficient Fund! Please fund your wallet");

      return;
    }
    try {
      const latest = await handleLatestBidding();


      if (latest && latest.data && latest.data.id !== undefined) {
        const latestBiddingAmount = Number(latest.data.id.replace(/[^0-9.-]+/g, ""));

        console.log(biddingAmount);
        console.log(latestBiddingAmount);
        console.log(typeof biddingAmount);
        console.log(typeof latestBiddingAmount);

        if (biddingAmount <= latestBiddingAmount) {
          toast.error("Your bidding price must be higher than the latest bidding price");
          return;
        }


      }

      setShowPopPin(true)
    } catch (error) {
      console.error("Error fetching latest bidding price:", error);

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



  const handleCompleted = async (userId, amount, productId, customerCode,) => {
    try {
      setIsLoading(true);


      const data = {
        customerCode: customerCode,
        amount: amount,
        productId: productId,
        status: "completed",

      };
      console.log(data);

      const response = await axiosInstance.post(`${Base_Url}/payment/api/HoldReleaseFund/releasefundservice`, data);
      console.log(response.data);

      if (response.data.isSuccessful === true) {
        toast.success(response.data.responseMessage);
      } else if (response.data.isSuccessful === false) {
        toast.error(response.data.responseMessage)
      } else {

        console.error("Previous bidder details not available");
        toast.error("Error handling completed. Please try again.");
      }
    } catch (error) {
      console.error("Error handling completed:", error);
    } finally {
      setIsLoading(false);
    }
  };



  // useEffect(() => {
  //   const checkAndHandleBidding = async () => {
  //     try {

  //       const latestBiddingResponse = await axiosInstance.get(`${Base_Url}/auction/api/Bidding/GetLatestBiddingPriceByProductId?ProductId=${productId}`);
  //       const latestBiddingAmount = parseFloat(latestBiddingResponse.data.id);


  //       const allBiddedUsersResponse = await axiosInstance.get(`${Base_Url}/auction/api/Bidding/GetAllBiddedUsersByProductId?ProductId=${productId}`);
  //       const biddedUsers = allBiddedUsersResponse.data;


  //       const isAuctionEnded = productDisplay[0]?.isAuctionEnded;


  //       for (const user of biddedUsers) {
  //         const userBiddingAmount = parseFloat(user.priceRaised);

  //         if (userBiddingAmount < latestBiddingAmount) {

  //           const customerAccountResponse = await getCustomerAccount(user.userId);

  //           const customerCode = customerAccountResponse.data.paystackCustomerCode;
  //           console.log(user.userId, customerCode, user.priceRaised, productId)

  //           await releaseFunds(user.userId, user.priceRaised, customerCode, productId, "returned");
  //         } else if (isAuctionEnded) {

  //           const previousBidderDetails = await getPreviousBidderDetails();
  //           if (previousBidderDetails) {
  //             const customerAccountResponse = await getCustomerAccount(previousBidderDetails.userId);

  //             const customerCode = customerAccountResponse.data.paystackCustomerCode;

  //             await handleCompleted(previousBidderDetails.userId, previousBidderDetails.priceRaised, previousBidderDetails.productId, customerCode);
  //           }
  //         }

  //       }
  //     } catch (error) {
  //       console.error("Error handling bidding:", error);
  //     }
  //   };
  //   checkAndHandleBidding();

  // }, [productId, productDisplay])


  const formatPrice = (price) => {

    const numericPrice = parseFloat(price);


    if (!isNaN(numericPrice)) {

      return numericPrice.toLocaleString("en-US", { style: "currency", currency: "NGN" });
    } else {

      return price;
    }
  };


  const handleImage = (src) => {
    setSelectmage(src)

  }
  return (
    <>

      {showMessage ?
        <div style={{ position: "fixed", top: "90px", width: "82%", zIndex: "1" }} className=' py-3  bg-success text-center  card rounded shadow'>
          <h4 className='text-white'>Bidding is under review. You will be notified when your Bidding has been approved</h4>
        </div> : null
      }

      <Modal show={showPopPin} onHide={closeModal} backdrop="static" centered>
        <Card className="custom-card">
          <Card.Header closebutton onClick={closeModal}></Card.Header>
          <Card.Body>
            <div className="image-preview-container"></div>
            <h4 className="text-center mb-4">Please enter your transaction pin</h4>
            {showPopPin && (
              <Form onSubmit={(e) => handleForm(e, transact.transaction)}>
                <Form.Group controlId="transactionPin">
                  <Form.Control
                    type="password"
                    value={transact.transaction}
                    name='transaction'
                    placeholder="Enter Transaction Pin"
                    onChange={(e) => setTransact({ transaction: e.target.value })}

                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="rounded-3 mt-4 px-5 font-weight-bolder"
                    style={{ backgroundColor: '#090892', borderColor: '#090892' }}
                    onClick={(e) => handleModalSubmit(e, transact.transaction)}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}

          </Card.Body>
        </Card>
      </Modal>

      <div className="row g-4 mt-5 mb-50">
        <div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
          {isLoading ? (
            <div className='Login-loading'>
              <img className='Login-spin-nav' src="./images/bg/elipsing.svg" alt="" />
            </div>
          ) : (
            <>
              <ul className="nav small-image-list d-flex flex-md-column flex-row justify-content-center gap-4  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                {productDisplay[0]?.productUrlJson.split(',').slice(0, 3).map((imageUrl, index) => (
                  <li className="nav-item" key={index}>
                    <div
                      id={`details-img${index + 1}`}
                      data-bs-toggle="pill"
                      onClick={() => handleImage(imageUrl)}
                      data-bs-target={`#gallery-img${index + 1}`}
                      aria-controls={`gallery-img${index + 1}`}
                    >
                      <img alt="images" src={imageUrl} className="img-fluid" />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                {productDisplay[0]?.productUrlJson.split(',').map((imageUrl, index) => (
                  <div className={`tab-pane big-image fade ${index === 0 ? 'show active' : ''}`} id={`gallery-img${index + 1}`} key={index}>
                    <div className="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap">
                      <h3 className='d-flex justify-content-center gap-5'>
                        <Counter startDate={productDisplay[0]?.startDate} endDate={productDisplay[0]?.endDate} />
                      </h3>
                    </div>
                    {/* <img alt="images" src={imageUrl} className="img-fluid" /> */}
                    {imageUrl ? (
                      <img alt="images" src={imageUrl} className="img-fluid" />
                    ) : (
                      <img alt="Dummy" src="/images/bg/noimage.png" className="img-fluid" />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>


        <div className="col-xl-6 col-lg-5">
          <div className="product-details-right  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
            <h4 style={{ fontWeight: "bold" }}>{productDisplay[0]?.productName}</h4>
            <h4>Latest Price Bidding: <span>₦{latestBidding.id}</span></h4>
            <div className="bid-form">
              <div className="form-title">
                <h5>Bid Now</h5>
                <p>Bid Amount : Minimum Bid ₦{latestBidding.id}</p>
              </div>
              <form onSubmit={handleSubmitBidding}>
                <div className="form-inner gap-2">
                  <input name='priceRaised' value={bidding.priceRaised} onChange={handleBidding} type="text" placeholder="NGN00.00" />
                  <button className="eg-btn btn--primary btn--sm" type="submit">{uploading ? "Processing..." : "Place bid"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AuctionDetailsTab description={productDisplay[0]?.description} />


    </>
  )
}

export default AuctionDetailsInfo