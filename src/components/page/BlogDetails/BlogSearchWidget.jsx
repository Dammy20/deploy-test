import React from "react";

function BlogSearchWidget() {
  return (
    <>
      <div
        className="blog-widget-item wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".2s"
      >
        <div className="search-area">
          <div className="sidebar-widget-title">
            <h4>Search From Blog</h4>
            <span />
          </div>
          <div className="blog-widget-body">
            <form>
              <div className="form-inner">
                <input type="text" placeholder="Search Here" />
                <button className="search--btn">
                  <i className="bx bx-search-alt-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSearchWidget;
