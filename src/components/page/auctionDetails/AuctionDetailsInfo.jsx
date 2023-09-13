import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import Counter from '../../common/Counter'
import AuctionDetailsTab from './AuctionDetailsTab';
import { toast } from "react-toastify"
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { base_Url } from '../../../http/config';
import './auction.css'

function AuctionDetailsInfo() {
  const userId = localStorage.getItem("userId")
  const [message, setMessage] = useState("")
  const history = useHistory()


  const [showMessage, setShowMessage] = useState(false);

  const [uploading, setUploading] = useState(false)
  const location = useLocation();
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
  const displaySingleProduct = async (productId) => {
    console.log(productId)
    const response = await axios.get(`${base_Url}/api/Product/ExistingProduct?Id=${productId}`)
    setProductDisplay(response.data)
    console.log(response.data)
  }

  const displayBidding = async () => {
    const response = await axios.get(`${base_Url}/api/Bidding/GetAllBiddings`)
    console.log(response.data)

  }
  useEffect(() => {

    displayBidding()
    displaySingleProduct(productId)
  }, [productId]);



  const formatPrice = (price) => {

    const numericPrice = parseFloat(price);


    if (!isNaN(numericPrice)) {

      return numericPrice.toLocaleString("en-US", { style: "currency", currency: "NGN" });
    } else {

      return price;
    }
  };
  const handleBidding = (e) => {
    setBidding({ ...bidding, [e.target.name]: e.target.value })
  }
  const handleSubmitBidding = async (event) => {
    event.preventDefault()
    const productPrice = BigInt(bidding?.priceRaised || 0);

    const formattedProductPrice = productPrice.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
    const data = {
      userId: Number(userId),
      productId: productId.toString(),
      priceRaised: formattedProductPrice,

    }
    console.log(data)

    try {

      if (bidding.priceRaised == "") {
        toast.error("Please enter a price");
        return
      }
      setUploading(true)

      const response = await axios.post(`${base_Url}/api/Bidding/PostBiddings`, data)
      console.log(response)
      if (response.data.isSuccess == true) {
        toast.success(response.data.message)
        setBidding({ ...bidding, priceRaised: "" })
        setShowMessage(true);
        history.push("./product")


      }



      console.log(showMessage)




    } catch (error) {
      console.log(error)
      toast.error(error)
    } finally {
      setShowMessage(false)
      setUploading(false)
      // history.push("./live-auction")

    }



  }
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


      <div className="row g-4 mb-50">
        <div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
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
                <img alt="images" src={imageUrl} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-xl-6 col-lg-5">
          <div className="product-details-right  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
            <h4 style={{ fontWeight: "bold" }}>{productDisplay[0]?.productName}</h4>
            <h4>Bidding Price: <span>{formatPrice(productDisplay[0]?.auctionSetPrice)}</span></h4>
            <div className="bid-form">
              <div className="form-title">
                <h5>Bid Now</h5>
                <p>Bid Amount : Minimum Bid {formatPrice(productDisplay[0]?.auctionSetPrice)}</p>
              </div>
              <form onSubmit={handleSubmitBidding}>
                <div className="form-inner gap-2">
                  <input name='priceRaised' value={bidding.priceRaised} onChange={handleBidding} type="text" placeholder="$00.00" />
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