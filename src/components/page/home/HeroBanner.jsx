import React, { useEffect, useState } from "react";
import axiosInstance from "../../../store/axiosinstance";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { RiGalleryUploadLine } from 'react-icons/ri';
import { GiJeweledChalice } from 'react-icons/gi';
import { SiStmicroelectronics } from 'react-icons/si';
import { MdSportsScore } from 'react-icons/md';
import { MdNoPhotography } from 'react-icons/md'
import { BsHouseHeartFill } from 'react-icons/bs'
import { RiGalleryFill } from 'react-icons/ri'
import { GiGoldShell } from 'react-icons/gi'

import { base_Url } from "../../../http/config";
import axios from "axios";
import './hero.css'




function HeroBanner() {
  const [displayCategory, setDisplayCategory] = useState([])
  const [searchProduct, setSearchProduct] = useState([])

  function encodeProductId(productId) {
    return btoa(productId);
  }

  useEffect(() => {
    fetchCategory()
  }, [])
  const fetchCategory = async () => {
    try {
      const response = await axiosInstance.get(`${base_Url}/api/Category/GetAllCategory`)
      console.log(response.data)
      setDisplayCategory(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getCategoryIcon = (categoryName) => {
    const categoryIcons = {
      "Art": RiGalleryFill,
      "Photography": MdNoPhotography,
      "Electronics": SiStmicroelectronics,
      "Jewelry": GiJeweledChalice,
      "Sport": MdSportsScore,
      "Household": BsHouseHeartFill,
      "Luxury": GiGoldShell,

    };

    return categoryIcons[categoryName] || GiJeweledChalice;
  };

  return (
    <>

      <main className="pb-5 main-contain shadow pt-4">
        <div className=" display-1 ">
          <div className="div2">
            <div className="card card-2" >

              <div className="card-body" >
                {displayCategory && displayCategory.map((item, index) => {
                  console.log('Category Name:', item.categoryName);
                  const IconComponent = getCategoryIcon(item.categoryName);
                  const encodedProductId = encodeProductId(item.id);
                  return (
                    <div key={index} className="d-flex gap-2  mt-3">
                      <IconComponent className="icon-all" />

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
