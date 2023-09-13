import React from "react";
import { Link } from "react-router-dom";

function BlogSidebarBanner() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div
        class="sidebar-banner wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="1s"
      >
        <span>Cars</span>
        <h3>Toyota AIGID A Clasis Cars Sale</h3>
        <Link
          to={`${process.env.PUBLIC_URL}/auction-details`}
          onClick={scrollTop}
          class="eg-btn btn--primary card--btn"
        >
          Details
        </Link>
      </div>
    </>
  );
}

export default BlogSidebarBanner;
