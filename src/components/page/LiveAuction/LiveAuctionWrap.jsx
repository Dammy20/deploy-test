import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../home/HeroBanner'
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import axiosInstance from '../../../store/axiosinstance';
import { BASE_URL } from '../../../http/config';
import useProtectedApi from '../../../hooks/useProtectedApi';
import { useLocation } from "react-router-dom";
import LiveAuctionCard from "../LiveAuction/LiveAuctionCard";
import Pagination from '../../common/Pagination';
import { base_Url } from '../../../http/config';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
SwiperCore.use([Navigation, Autoplay]);




function ProductsWrap() {
  const [displayProduct, setDisplayProduct] = useState([]);
  const [profileName, setProfileName] = useState(null)
  const [existingDetails, setExistingDetails] = useState({});
  const [profileEmail, setProfileEmail] = useState(null)
  const [clickedItem, setClickedItem] = useState(null);
  const ProtectedApi = useProtectedApi()
  const [imageDisplay, setImageDisplay] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);


  const [totalPages, setTotalPages] = useState(1);
  const [displayAll, setDisplayAll] = useState({})
  const [categoryId, setCategoryId] = useState(null)
  const [userDetails, setUserDetails] = useState([])
  const [selectCategory, setSelectedCategory] = useState([])
  const userId = localStorage.getItem("userId")
  const [isLoading, setIsLoading] = useState(false)

  const [selectedCategory, setSelectCategory] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const auctionId = searchParams.get("auctionId");

  function encodeProductId(productId) {
    return btoa(productId);
  }



  useEffect(() => {
    console.log(auctionId)
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axiosInstance.get(`${base_Url}/api/Product/GetProductByCategory?CategoryId=${auctionId}&pageNumber=1&pageSize=20`);
        console.log(response.data);
        setDisplayAll(response.data)
      } catch (error) {
        console.log(error);
      } finally {

        setIsLoading(false)
      }

    };
    fetchData()

    if (auctionId != null) {
      fetchData()
    } else {
      fetchAll()
    }
  }, [auctionId]);
  console.log(displayAll)


  const responsive = {
    768: {
      slidesPerView: 2,
      spaceBetween: 10, // Reduce the space between slides to 10 pixels
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10, // Reduce the space between slides to 10 pixels
    },
  };



  useEffect(() => {
    fetchAll(currentPage);
    fetchCategory()
    FetchSingleUser()
  }, [currentPage]);
  const categoryImageMapping = [
    "./images/bg/download1.webp",
    "./images/bg/download2.webp",
    "./images/bg/download3.webp",
    "./images/bg/download4.webp",
    "./images/bg/download1.webp",
    "./images/bg/download4.webp",
    "./images/bg/download4.webp",
  ];
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
  const categoryColors = ['purple', 'blue', 'green', 'red', 'gray'];

  const fetchCategory = async () => {
    try {
      const response = await axiosInstance.get(`${base_Url}/api/Category/GetAllCategory`);
      setSelectedCategory(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const FetchSingleUser = async () => {
    try {
      const response = await axiosInstance.get(`${base_Url}/api/Product/GetAllProductByCreatedUser?CreatedBy=${userId}&pageNumber=1&pageSize=10`)
      console.log(userId)
      console.log(response.data)
      setUserDetails(response.data.data)
    } catch (error) {
      console.log(error)
    }


  };
  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);

    if (!isNaN(numericPrice)) {
      return numericPrice.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    } else {
      return price;
    }
  };


  async function fetchAll() {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `${base_Url}/api/Product/GetAllProductApproved`
      );
      const data = response.data.data;

      const currentDate = new Date();
      const ongoingAuctions = data.filter((product) => {
        const startDate = new Date(product.startDate);
        const endDate = new Date(product.endDate);
        return startDate < currentDate && currentDate < endDate;
      });


      const productNames = ongoingAuctions.map((product) => product.productName);


      const response2 = await axiosInstance.get(
        `${base_Url}/api/Product/GetAllProductApprovedANDAuctionNotEnded?pageNumber=${currentPage}&pageSize=100`
      );


      setDisplayProduct(response2.data.data);
      console.log(response2.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }









  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategory = (id, name) => {
    setCategoryId(id)
    setSelectCategory(name)

  }

  const filtered = categoryId ?
    displayProduct.filter((item) => item.categoryId == categoryId)
    : []






  return (
    <>
      <main>


        <div className='relative w-full  md:h-20 2xl:h-20'>
          <div className='absolute inset-0'>
            <img
              alt="bannerImage"
              src={process.env.PUBLIC_URL + "./images/bg/bground6.jpg"}
              style={{ height: "15rem", width: "100%" }}
              data-wow-duration="1.5s"
              data-wow-delay="1s"
            />
            <main>
              <div className="contain-product   shadow  display-all bg-white ">


                <div className="product-imgg mt-4">
                  <img
                    alt="nc-imgs"
                    loading="lazy"
                    height="250"
                    decoding="async"
                    data-nimg="1"
                    className="img-object object-cover w-full h-full"
                    src='./images/bg/lapop2.jpg'
                    style={{ color: "transparent", zIndex: 1, borderRadius: "10px", width: "100%" }}
                  />
                </div>


                <div className="awesome-collections login-content mb-5" >
                  <div>
                    <h1 className="category-name ">Awesome Collection</h1>
                    <p className="category-subname ">Scroll to view more categories.</p>

                  </div>
                  <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={1}
                    breakpoints={responsive}
                  >
                    {isLoading ? (
                      <nav className='Login-loading'>
                        <img className='Login-spin-nav' src="./images/bg/elipsing.svg" alt="" />
                      </nav>
                    ) : (
                      selectCategory.map((item, index) => {
                        const imagePath = categoryImageMapping[index] || '';
                        const categoryColor = categoryColors[index % categoryColors.length];
                        const encodedProductId = encodeProductId(item.id);

                        return (
                          <SwiperSlide key={index} className='custom-slide'>
                            <Link to={`/products?auctionId=${encodedProductId}`} className={`category ${categoryColor}`}>
                              <div className="slidein" onClick={() => handleCategory(item.id, item.categoryName)}>
                                <img className='w-100 h-75' src={item.categoryImage} alt="movie" />
                              </div>
                              <div className="slide-inn d-flex gap-3">
                                <div style={{
                                  width: "30px",
                                  height: '30px',
                                  borderRadius: "100%",
                                  backgroundColor: categoryColor
                                }}>
                                </div>
                                <div className="">
                                  <h4>{item.categoryName}</h4>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        );
                      })
                    )}

                    {/* {selectCategory.map((item, index) => {
                                            const imagePath = categoryImageMapping[index] || '';
                                            const categoryColor = categoryColors[index % categoryColors.length];
                                            const encodedProductId = encodeProductId(item.id);

                                            return (
                                                <SwiperSlide key={index} className='custom-slide'>
                                                    <Link to={`/products?auctionId=${encodedProductId}`} className={`category ${categoryColor}`}>
                                                        <div className="slidein" onClick={() => handleCategory(item.id, item.categoryName)}>
                                                            <img className='w-100 h-75' src={item.categoryImage} alt="movie" />
                                                        </div>
                                                        <div className="slide-inn d-flex gap-3">
                                                            <div style={{
                                                                width: "30px",
                                                                height: '30px',
                                                                borderRadius: "100%",
                                                                backgroundColor: categoryColor
                                                            }}>
                                                            </div>
                                                            <div className="">
                                                                <h4>{item.categoryName}</h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            );
                                        })} */}
                  </Swiper>

                </div>
              </div>

            </main>

          </div>
        </div>




      </main >

      <div class="section-header2">
        <hr class="section-divider section-divider-left" />
        <h2 class="section-title">
          {selectedCategory
            ? `Latest Collections in ${selectedCategory}`
            : 'Latest Collections'}
        </h2>
        <hr class="section-divider section-divider-right" />
      </div>

      <div className='container-fluid'>
        <div className="row d-flex justify-content-center">
          {isLoading ? (
            <nav className='Login-loading'>
              <img className='Login-spin-nav' src="./images/bg/elipsing.svg" alt="" />
            </nav>
          ) : (
            <div className="mb-40 d-flex gap-3 flex-wrap justify-content-center" data-wow-duration="1.5s" data-wow-delay="0.2s">
              {displayProduct && displayProduct.length > 0 ? (
                displayProduct.map((item, index) => (

                  <div className="eachAuction2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s" key={index}>
                    <div className="">
                      {item.productUrlJson &&
                        item.productUrlJson.split(',').map((url, imageIndex) => (
                          <img className="" src="" alt="" key={imageIndex} />
                        ))}

                    </div>

                    <LiveAuctionCard
                      image={
                        item.productUrlJson
                          ? item.productUrlJson.split(',')[3]
                          : '/images/bg/noimage.png'
                      }
                      image2={
                        item.productUrlJson
                          ? item.productUrlJson.split(',')[1]
                          : '/images/bg/noimage.png'
                      }
                      productName={item.productName}
                      title={item.description}
                      productId={item.id}
                      startDate={item.startDate}
                      endDate={item.endDate}
                      auctionSetPrice={formatPrice(item.auctionSetPrice)}
                      isAuctionEnded={item.isAuctionEnded}
                      createdBy={item.createdBy}
                    />
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          )}
          {!isLoading ? (
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages} />
          ) : null}
        </div>
      </div>







    </>
  )
}

export default ProductsWrap


