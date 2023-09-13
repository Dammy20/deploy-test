import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Breadcrumb from '../../common/Breadcrumb'
import AuctionDetailsWrap from './AuctionDetailsWrap'
import UserRoute from '../../routes/UserRoute'
import { UserProvider } from '../../common/UserContext'

function AuctionDetails() {
  return (
    <>
      <UserProvider>
        <UserRoute>
          <AuctionDetailsWrap />
        </UserRoute>
      </UserProvider>

    </>
  )
}

export default AuctionDetails