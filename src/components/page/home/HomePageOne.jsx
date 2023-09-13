import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Catagory from './Catagory'
import HeroBanner from './HeroBanner'
import LiveAuctionHome1 from './LiveAuctionHome1'
import RecentNewsHome1 from './RecentNewsHome1'
import SponsorHome1 from './SponsorHome1'
import TestimonialHome1 from './TestimonialHome1'
import UpCommingHome1 from './UpCommingHome1'


function HomePageOne() {
  return (
    <>
      <HeroBanner />
      {/* <Catagory /> */}
      <LiveAuctionHome1 />
      <UpCommingHome1 />
      {/* <Slider /> */}
      {/* <TestimonialHome1 /> */}
      {/* <SponsorHome1 /> */}
      {/* <RecentNewsHome1 /> */}
      {/* <AboutUsCounter /> */}
    </>
  )
}

export default HomePageOne