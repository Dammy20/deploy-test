import React from "react";
import { Link } from "react-router-dom";

function BlogAuthorAndTag() {
  return (
    <>
      <div className="blog-tag">
        <div className="row g-3">
          <div className="col-md-6 d-flex justify-content-md-start justify-content-center align-items-center">
            <h6>Post Tag:</h6>
            <ul className="tag-list">
              <li>
                <Link to={"#"}>Network Setup</Link>
              </li>
              <li>
                <Link to={"#"}>Cars</Link>
              </li>
              <li>
                <Link to={"#"}>Technology</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center align-items-center">
            <ul className="share-social gap-3">
              <li>
                <Link to={"#"}>
                  <i className="bx bxl-facebook" />
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  <i className="bx bxl-twitter" />
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  <i className="bx bxl-instagram" />
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  <i className="bx bxl-whatsapp" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-author gap-4 flex-md-nowrap flex-wrap">
        <div className="author-image">
          <img
            alt="images"
            src={process.env.PUBLIC_URL + "/images/blog/blog-author.png"}
            className="img-fluid"
          />
        </div>
        <div className="author-detials text-md-end text-center">
          <h5>-- Leslie Alexander</h5>
          <p className="para">
            It has survived not only five centuries, but also the leap into
            electronic typesetting unchanged. It was popularised in the sheets
            containing lorem ipsum is simply free text.
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogAuthorAndTag;
