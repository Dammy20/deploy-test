import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Breadcrumb from '../../common/Breadcrumb'
import LiveAuctionWrap from './LiveAuctionWrap'
import HeroBanner3 from '../home/HeroBanner3'
import Catagory from '../home/Catagory'
import UserRoute from '../../routes/UserRoute'
import { UserProvider } from '../../common/UserContext'


function LiveAuction() {
  return (
    <>
      {/* <Breadcrumb pageName="Live Auction" pageTitle="Live Auction"/> */}
      <UserProvider>
        <UserRoute>

          {/* <HeroBanner3 /> */}
          {/* <Catagory /> */}
          <LiveAuctionWrap />
        </UserRoute>
      </UserProvider>
      {/* <AboutUsCounter /> */}

    </>
  )
}

export default LiveAuction