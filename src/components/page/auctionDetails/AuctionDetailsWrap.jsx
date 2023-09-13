import React from 'react'
import AuctionDetailsInfo from './AuctionDetailsInfo'
import AuctionDetailsTab from './AuctionDetailsTab'

function AuctionDetailsWrap() {
  return (
    <>
      <div className="auction-details-section pt-120 pb-120">
        <img alt="images" src={process.env.PUBLIC_URL + '/images/bg/section-bg.png'} className="img-fluid section-bg-top" />
        <img alt="images" src={process.env.PUBLIC_URL + '/images/bg/section-bg.png'} className="img-fluid section-bg-bottom" />

        <div className="container">
          <AuctionDetailsInfo />
          {/* <AuctionDetailsTab /> */}
        </div>
      </div>
    </>
  )
}

export default AuctionDetailsWrap