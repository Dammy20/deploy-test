import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { base_Url } from '../../../http/config'
import axiosInstance from '../../../store/axiosinstance'
import { BiSearchAlt2 } from "react-icons/bi"
import Slider from './Slider'
import HeroBanner from './HeroBanner'
import './hero.css'
import LiveAuctionHome1 from './LiveAuctionHome1'

import UpCommingHome1 from './UpCommingHome1'


function HomePageOne() {
  const [searchProduct, setSearchProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [valueInput, setValueInput] = useState("")

  const handleSearch = async () => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.get(`${base_Url}/api/Product/GetAllProductApproved?search=${valueInput}&pageNumber=1&pageSize=10`)

      console.log(response.data)
      setSearchProduct(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }


  }
  const handleInputSearch = async (e) => {
    e.preventDefault();

    handleSearch()
    if (valueInput === '') {
      window.location.reload();
    }

  };



  const filteredProducts = Array.isArray(searchProduct.data)
    ? searchProduct.data.filter((product) => !product.isAuctionEnded)
    : [];
  console.log(filteredProducts);
  return (
    <>
      <form onSubmit={handleInputSearch}>
        <div className='searchInput flex flex-wrap justify-center items-center gap-2 border border-3 border-light shadow-md bg-white p-3'>
          <input

            className='p-2 form-control'
            placeholder='Search products, brands and categories'
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            type='text'
          />
          <button
            style={{ backgroundColor: '#090892' }}
            disabled={valueInput.trim() === ''}
            className='btn btn-primary'
            type='submit'
          >
            SEARCH
          </button>


        </div>
      </form>



      <HeroBanner />
      <Slider filteredProducts={filteredProducts} isLoading={isLoading} valueInput={valueInput} />


      <LiveAuctionHome1 />
      <UpCommingHome1 />

      {/* <TestimonialHome1 /> */}
      {/* <SponsorHome1 /> */}
      {/* <RecentNewsHome1 /> */}
      {/* <AboutUsCounter /> */}
    </>
  )
}

export default HomePageOne