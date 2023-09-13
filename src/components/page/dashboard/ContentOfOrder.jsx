import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { base_Url } from '../../../http/config';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import { orderListOptions } from '../../../data/data'

function ContentOfOrder() {
  const [bidding, setBidding] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [productContain, setProductContain] = useState([])
  const [currentEntries, setCurrentEntries] = useState([]);
  const [updatedCurrentEntries, setUpdatedCurrentEntries] = useState([]);
  const [entriesPerPage] = useState(10);
  const [prodName, setProdName] = useState([])
  const [prodId, setProdId] = useState([])
  const userId = localStorage.getItem("userId")
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = (currentPage - 1) * entriesPerPage;



  const displayBidding = async () => {
    try {
      const response = await axios.get(`${base_Url}/api/Bidding/GetAllBiddingByUsers?UserId=${userId}`);
      console.log(response.data);

      if (response.data) {
        const allProductIds = response.data.map(element => element.productId);
        console.log(allProductIds);
        setProdId(allProductIds);

        const productDetailsPromises = allProductIds.map(productId =>
          axios.get(`${base_Url}/api/Product/ExistingProduct?Id=${productId}`)
        );

        const productDetailsResponses = await Promise.all(productDetailsPromises);
        const productDetailsData = productDetailsResponses.map(response => response.data[0]); // Extract the product details from the response array.
        console.log(productDetailsData);

        // Now you have an array of details for all biddings.
        const biddingsWithProductNames = response.data.map((bidding, index) => ({
          ...bidding,
          productName: productDetailsData[index].productName,
          productImage: productDetailsData[index].productUrlJson,
        }));

        setBidding(biddingsWithProductNames);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    displayBidding();
  }, [currentPage, entriesPerPage]);

  useEffect(() => {
    const updatedCurrentEntries = bidding.slice(indexOfFirstEntry, indexOfLastEntry);
    setCurrentEntries(updatedCurrentEntries);
  }, [bidding, indexOfFirstEntry, indexOfLastEntry]);
  const totalPages = Math.ceil(bidding.length / entriesPerPage);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const adjustedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    return adjustedDate.toLocaleDateString('en-US', options);
  };




  const customStyle = {

    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#EEEEEE',
      padding: 0,
      '&:hover': { borderColor: '#090892' },
      boxShadow: state.isFocused ? null : null,

    }),
  }
  return (
    <>
      <div className="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
        {/* table title */}
        <div className="table-title-area">
          <h3>Order Bidding List</h3>
          {/* <Select placeholder="Filter order" valueContainer="select" options={orderListOptions} styles={customStyle} /> */}
        </div>
        {/* table */}
        <div className="table-wrapper">
          <table className="eg-table order-table table mb-0">
            <thead>
              <tr>
                {/* <th>Bidding ID</th> */}
                <th>Product Image</th>
                <th>ProductName</th>
                <th>Bidding Price</th>
                <th>Bidding Date</th>
                <th>Bidding Time</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((item, index) => (
                <tr key={index}>
                  <td data-label="Image">
                    {item.productImage && item.productImage.split(',').length > 0 ? (
                      <img
                        src={item.productImage.split(',')[0]}
                        alt="Product Image"
                        className="img-fluid"
                      />

                    ) : (
                      <img
                        src="/images/bg/order1.png"
                        alt="Default Product Image"
                        className="img-fluid"
                      />
                    )}








                  </td>
                  <td data-label="Bid Amount(USD)"><input className='d-none' type="text" /> {item.productName}</td>
                  <td data-label="Highest Bid">{item.priceRaised}</td>
                  <td data-label="Status" className="text-green">{new Date(item.biddingDate).toLocaleDateString()}</td>
                  <td data-label="Status" className="text-green">
                    {formatDateTime(item.biddingDate)}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        {/* pagination area */}
        <div className="table-pagination">
          <p>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, bidding.length)} of {bidding.length} entries</p>
          <nav className="pagination-wrap">
            <ul className="pagination style-two d-flex justify-content-center gap-md-3 gap-2">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages || indexOfLastEntry >= bidding.length}
                >
                  Next
                </button>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default ContentOfOrder