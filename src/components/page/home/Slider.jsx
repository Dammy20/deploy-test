
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_Url } from '../../../http/config'
import LiveAuctionCard from '../LiveAuction/LiveAuctionCard'
import Pagination from '../../common/Pagination'
import { useRef } from 'react'

function Slider({ filteredProducts, isLoading, valueInput }) {

    const [searched, setSearched] = useState(false);



    const isSearchButtonClicked = isLoading || valueInput.trim() !== '';

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



    return (
        <div className="container-fluid">
            <div style={{ marginTop: '-1px' }} class="section-header2 mt-4">
                <hr class="section-divider section-divider-left" />
                <h2 class="section-title">
                    {isSearchButtonClicked && filteredProducts.length === 0
                        ? 'No product found'
                        : filteredProducts.length > 0
                            ? `Showing results for search "${valueInput}"`
                            : ''}
                </h2>
                <hr class="section-divider section-divider-right" />
            </div>
            <div className="row d-flex justify-content-center">
                {isLoading ? (
                    <nav className="Login-loading">
                        <img className="Login-spin-nav" src="./images/bg/elipsing.svg" alt="" />
                    </nav>
                ) : (
                    <div
                        className="mb-40 d-flex gap-3 flex-wrap justify-content-center"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.2s"
                    >
                        {filteredProducts && filteredProducts.length > 0 ? (
                            filteredProducts.map((item, index) => (
                                <div
                                    className="eachAuction2 wow fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay="1s"
                                    key={index}
                                >
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
                        ) : null}
                    </div>
                )}
            </div>
        </div>
        // <div className='container-fluid'>
        //     <div style={{ marginTop: "-1px" }} class="section-header2 mt-4">
        //         <hr class="section-divider section-divider-left" />
        //         <h2 class="section-title">
        //             {filteredProducts.length > 0 ? `Showing results for search "${valueInput}"`
        //                 : ''}
        //         </h2>
        //         <hr class="section-divider section-divider-right" />
        //     </div>
        //     <div className="row d-flex justify-content-center">
        //         {isLoading ? (
        //             <nav className='Login-loading'>
        //                 <img className='Login-spin-nav' src="./images/bg/elipsing.svg" alt="" />
        //             </nav>
        //         ) : (
        //             <div className="mb-40 d-flex gap-3 flex-wrap justify-content-center" data-wow-duration="1.5s" data-wow-delay="0.2s">
        //                 {filteredProducts && filteredProducts.length > 0 && (
        //                     filteredProducts.map((item, index) => (
        //                         <div className="eachAuction2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s" key={index}>
        //                             <div className="">
        //                                 {item.productUrlJson &&
        //                                     item.productUrlJson.split(',').map((url, imageIndex) => (
        //                                         <img className="" src="" alt="" key={imageIndex} />
        //                                     ))}
        //                             </div>

        //                             <LiveAuctionCard
        //                                 image={
        //                                     item.productUrlJson
        //                                         ? item.productUrlJson.split(',')[0]
        //                                         : '/images/bg/noimage.png'
        //                                 }
        //                                 image2={
        //                                     item.productUrlJson
        //                                         ? item.productUrlJson.split(',')[1]
        //                                         : '/images/bg/noimage.png'
        //                                 }
        //                                 productName={item.productName}
        //                                 title={item.description}
        //                                 productId={item.id}
        //                                 startDate={item.startDate}
        //                                 endDate={item.endDate}
        //                                 auctionSetPrice={formatPrice(item.auctionSetPrice)}
        //                                 isAuctionEnded={item.isAuctionEnded}
        //                             />
        //                         </div>
        //                     ))

        //                 )}
        //                 {/* {
        //                     filteredProducts.length < 0 &&

        //                     <p>No products found.</p>

        //                 } */}
        //             </div>
        //         )}


        //         {/* {!isLoading ? (
        //             <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages} />
        //         ) : null} */}
        //     </div>
        // </div>

    )
}

export default Slider
