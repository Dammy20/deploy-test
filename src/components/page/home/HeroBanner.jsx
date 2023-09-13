import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { RiGalleryUploadLine } from 'react-icons/ri'
import { GiJeweledChalice } from 'react-icons/gi'

import { MdSportsScore } from 'react-icons/md'
import { SiStmicroelectronics } from 'react-icons/si'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { RiRadio2Fill } from "react-icons/ri"
import { base_Url } from "../../../http/config";
import axios from "axios";
import './hero.css'




function HeroBanner() {
  const [displayCategory, setDisplayCategory] = useState([])
  function encodeProductId(productId) {
    return btoa(productId);
  }

  useEffect(() => {
    fetchCategory()
  }, [])
  const fetchCategory = async () => {
    try {
      const response = await axios.get('http://gateway.peabux.com/auction/api/Category/GetAllCategory')
      console.log(response.data)
      setDisplayCategory(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getCategoryIcon = (categoryName) => {
    const categoryIcons = {
      "Category 1": RiGalleryUploadLine,
      "Category 2": HiOutlinePhotograph,
      "Category 3": SiStmicroelectronics,
      "Category 4": GiJeweledChalice,
      "Category 5": MdSportsScore,
    };

    return categoryIcons[categoryName] || RiGalleryUploadLine;
  };

  return (
    <>

      <main className="pb-5 main-contain shadow pt-4">
        <div className=" display-1 ">
          <div className="div2">
            <div className="card card-2" >

              <div className="card-body" >
                {displayCategory && displayCategory.map((item, index) => {
                  const IconComponent = getCategoryIcon(item.categoryName);
                  const encodedProductId = encodeProductId(item.id);
                  return (
                    <div key={index} className="d-flex gap-2  mt-3">
                      <IconComponent className="icon-all" />
                      {/* <img src={item.categoryImage} alt="" /> */}

                      <Link to={`/products?auctionId=${encodedProductId}`} className="category-title">{item.categoryName}</Link>
                    </div>
                  )

                })}

              </div>


            </div>

          </div>

          <div className="image-dib" >
            <Carousel interval={2000} className="carousel-in">
              <Carousel.Item className="carousel-item ">
                <img
                  className="d-block main-image"
                  src="/images/bg/bags2.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className="carousel-item" >
                <img
                  className="d-block main-image"
                  src="/images/bg/bags3.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block main-age"
                  src="/images/bg/bagsm.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="smallmage" style={{ flex: "1", marginLeft: "20px" }}>
            <div style={{ width: "80%", marginBottom: "20px" }}>
              <img
                style={{ borderRadius: "5px", height: "14.3rem", width: "100%" }}
                src="/images/bg/bags2.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "80%" }}>
              <img
                style={{ borderRadius: "5px", height: "14.3rem", width: "100%" }}
                src="/images/bg/bags3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>


    </>
  );
}

export default HeroBanner;
