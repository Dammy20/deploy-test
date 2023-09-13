import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../../http/config'
import Counter from '../../common/Counter'
import { Link } from 'react-router-dom'
import '../LiveAuction.jsx/LiveAuction.css'
import useProtectedApi from '../../../hooks/useProtectedApi'


import LiveAuctionCard from '../LiveAuction.jsx/LiveAuctionCard'


function LiveAuctionHome1() {
  const [display, setDisplay] = useState([])
  const [displayProduct, setDisplayProduct] = useState([]);
  const [imageDisplay, setImageDisplay] = useState(null)
  const [profileName, setProfileName] = useState(null)
  const [existingDetails, setExistingDetails] = useState({});
  const [profileEmail, setProfileEmail] = useState(null)
  const [selectCategory, setSelectedCategory] = useState([])
  const [categoryId, setCategoryId] = useState(null)
  const ProtectedApi = useProtectedApi()
  const userId = localStorage.getItem("userId")


  const scrollTop = window.scrollTo({ top: 0, behavior: "smooth" })
  function encodeProductId(productId) {
    return btoa(productId);
  }


  useEffect(() => {

    fetchall()
    fetchCategory()
  }, [])
  const fetchall = async () => {
    try {
      let currentPage = 1;
      let allProducts = [];
      while (true) {
        const response = await axios.get(`http://gateway.peabux.com/auction/api/Product/GetAllProductApproved?pageNumber=${currentPage}&pageSize=100`);
        const products = response.data.data;

        if (products.length === 0) {
          break;
        }

        allProducts = [...allProducts, ...products];
        currentPage++;
      }
      console.log(allProducts)
      setDisplay(allProducts);
    } catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {
    const user_Id = userId;
    console.log(userId);

    ProtectedApi.get(`${BASE_URL}/ExistingDetails?User_Id=${user_Id}`)
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          setExistingDetails(response.data[0]);
          if (response.data[0].profileImage) {
            setImageDisplay(response.data[0].profileImage);

          }
          if (response.data[0].fullname) {
            setProfileName(response.data[0].fullname);

          }
          if (response.data[0].emailAddress) {
            setProfileEmail(response.data[0].emailAddress);

          }
        }

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const filterOngoingProducts = () => {
    const currentDate = new Date();
    const filtered = display.filter(
      (product) =>
        new Date(product.startDate) <= currentDate && new Date(product.endDate) >= currentDate
    );
    return filtered;
  };

  const filteredProducts = filterOngoingProducts();
  console.log(filteredProducts);

  // const filtered = categoryId ?
  //   displayProduct.filter((item) => item.categoryId == categoryId)
  //   : displayProduct
  const fetchCategory = async () => {
    try {
      const response = await axios.get('http://gateway.peabux.com/auction/api/Category/GetAllCategory');
      setSelectedCategory(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  const formatPrice = (price) => {

    const numericPrice = parseFloat(price);


    if (!isNaN(numericPrice)) {
      return numericPrice.toLocaleString("en-US", { style: "currency", currency: "NGN" });
    } else {
      return price;
    }
  };
  return (
    <>
      <div class="section-header">

        <div>
          {filteredProducts.length > 0 && (
            <div >
              <hr class="section-divider section-divider-left" />
              <h2 class="section-title">Live Auction</h2>
              <hr class="section-divider section-divider-right" />
            </div>
          )}




        </div>



      </div>

      <div className="main-div" >
        {filteredProducts.length > 0 && (

          <div className=' walking-div display-all card shadow'>
            <div style={{ paddingLeft: "40px", paddingTop: "40px" }}>
              <div className=''>
                <h2 style={{ fontWeight: "600" }} className='font-weight-bold'>{filteredProducts[0].productName}</h2>
                <div>

                </div>
                <div className='d-flex gap-2 mt-4'>
                  {imageDisplay && (
                    <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                      <div style={{ width: "10%" }}>
                        <img style={{ width: "40px", height: "40px", borderRadius: "100%" }} src={imageDisplay} alt="Profile" />

                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <p>Creator</p>
                        <h6 style={{ marginTop: "-15px" }}>{profileName}</h6>

                      </div>
                    </div>
                  )}


                </div>


              </div>
              <div className='mt-4'>
                <p style={{ fontSize: "16px", fontWeight: "600" }} className='mt-4 pt-3 '>Auction ending in :</p>
                <div className="d-flex gap-3">
                  <h4 className='d-flex gap-3'><Counter startDate={filteredProducts[0].startDate} endDate={filteredProducts[0].endDate} /></h4>
                </div>
              </div>
              <div class="auction-box ">
                <div class="cut-off"></div>
                <span class="bid-label">Current Price</span>
                <div class="bid-details">
                  <span class="bid-amount">{formatPrice(filteredProducts[0].auctionSetPrice)}</span>

                </div>
              </div>





              <hr className='mt-4' />
              <div className='d-flex gap-4 mt-4'>
                {filteredProducts.length > 0 ? (

                  <div className="eachAuction2 wow fadeInUp" >

                    <div>

                      <Link
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                        className=' btn btn-primary p-3  rounded-pill'



                        to={{
                          pathname: `/product`
                          // pathname: `/auction-details?productId=${encodeProductId(filteredProducts[0].id)}`,

                        }}
                      >

                        View bid
                      </Link>

                    </div>
                    <div>

                    </div>
                  </div>

                ) : (
                  <p>No products available for the selected category.</p>
                )}
              </div>


            </div>
          </div>
        )}

        <div className='img-div4 shadow'>
          {filteredProducts.length > 0 && (
            <div>

              {filteredProducts[0].productUrlJson &&
                filteredProducts[0].productUrlJson.split(',')[0] && (
                  <img
                    className=''
                    style={{ width: "100%", borderRadius: "20px", height: "100vh" }}
                    src={filteredProducts[0].productUrlJson.split(',')[1]}
                    alt="Product Image"
                  />
                )}
            </div>
          )}
        </div>


      </div>

    </>
  )
}

export default LiveAuctionHome1