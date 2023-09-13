import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ currentPage, onPageChange, totalPages }) {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    console.log(currentPage == totalPages);
    if (currentPage == totalPages) {
      return
    } else {
      onPageChange(currentPage + 1);

    }
  };

  return (
    <div className="row pb-5">
      <nav className="pagination-wrap">
        <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
          <li className="page-item">
            <Link className="page-link" to="#" tabIndex={-1} onClick={handlePrevClick}>
              Prev
            </Link>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
              <Link className="page-link" to="#" onClick={() => onPageChange(index + 1)}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </Link>
            </li>
          ))}
          <li className="page-item">
            {currentPage == totalPages ?
              <button className='btn btn-light' disabled>Next</button> :
              <button
                className='page-link'
                // aria-disabled={`${currentPage - 1 == totalPages ? "true" : "false"}`}
                // className={`page-link ${currentPage === totalPages ? 'disabled' : ''}`}
                to="#"
                onClick={handleNextClick}
              >
                Next
              </button>
            }

          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
