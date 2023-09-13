import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { base_Url } from '../../../http/config'
function ContentOfpurchase() {
  const [purchaseBidding, setPurchaseBidding] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    displayPurchase()
  }, [])
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = (currentPage - 1) * entriesPerPage;

  const currentEntries = purchaseBidding.slice(indexOfFirstEntry, indexOfLastEntry);


  const displayPurchase = async () => {
    const response = await axios.get(`${base_Url}/api/Bidding/GetAllBiddingApprovedByUsers?UserId=${userId}`)
    console.log(response.data)
    setPurchaseBidding(response.data)
  }
  const totalPages = Math.ceil(purchaseBidding.length / entriesPerPage);
  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="tab-pane fade" id="v-pills-purchase" role="tabpanel" aria-labelledby="v-pills-purchase-tab">
        {/* table title*/}
        <div className="table-title-area">
          <h3>All Purchase</h3>
          {/* <select id="order-category">
            <option value={"01"}>Show: Last 05 Order</option>
            <option value={"02"}>Show: Last 03 Order</option>
            <option value={"03"}>Show: Last 15 Order</option>
            <option value={"04"}>Show: Last 20 Order</option>
          </select> */}
        </div>
        {/* table */}
        <div className="table-wrapper">
          <table className="eg-table order-table table mb-0">
            <thead>
              <tr>
                <th>Item No</th>
                <th>Title</th>
                <th>Bid Amount(₦)</th>
                <th>Date</th>
                <th>Image</th>


              </tr>
            </thead>
            <tbody>
              {currentEntries.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.productName}</td>
                  <td>{item.productPrice}</td>
                  <td>{new Date(item.createdDate).toLocaleString()}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <td data-label="Image"><img alt="images" src={process.env.PUBLIC_URL + "/images/bg/order1.png"} className="img-fluid" /></td> */}
        {/* pagination area */}
        <div className="table-pagination">
          <p>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, purchaseBidding.length)} of {purchaseBidding.length} entries</p>
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
                  disabled={currentPage === totalPages || indexOfLastEntry >= purchaseBidding.length}
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

export default ContentOfpurchase