import React from "react";
import { Link } from "react-router-dom";
import BlogAuthorAndTag from "./BlogAuthorAndTag";
import BlogComments from "./BlogComments";
import BlogContent from "./BlogContent";
import BlogPostCategory from "./BlogPostCategory";
import BlogRecentPostWidget from "./BlogRecentPostWidget";
import BlogSearchWidget from "./BlogSearchWidget";
import BlogSidebarBanner from "./BlogSidebarBanner";
import BlogSocialLink from "./BlogSocialLink";
import CommentForm from "./CommentForm";

function BlogDetailsWrap() {
  return (
    <>
      <div className="blog-details-section pb-120">
        <img
          alt="images"
          src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"}
          class="img-fluid section-bg-top"
        />
        <img
          alt="images"
          src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"}
          class="img-fluid section-bg-bottom"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-single">
            <div class="blog-img">
              <img alt="images"  src={process.env.PUBLIC_URL + "/images/blog/blog-details.png"} className="img-fluid wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s"/>
            </div>
              <ul class="blog-meta gap-2">
                  <li><Link to={"#"}><img alt="images"  src={process.env.PUBLIC_URL + "/images/icons/calendar.svg"} />Date: 25 Jan 2022</Link></li>
                  <li><Link to={"#"}><img alt="images"  src={process.env.PUBLIC_URL + "/images/icons/tags.svg"} />Auction</Link></li>
                  <li><Link to={"#"}><img alt="images"  src={process.env.PUBLIC_URL + "/images/icons/admin.svg"} />Posted by Admin</Link></li>
              </ul>
              <h3 className="blog-title">A brand for a company is like reputation for a person.</h3>
              <BlogContent/>
              <BlogAuthorAndTag/>
              <BlogComments/>
              <CommentForm/>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-sidebar">
              <BlogSearchWidget/>
              <BlogRecentPostWidget/>
              <BlogPostCategory/>
              <BlogSocialLink/>
              <BlogSidebarBanner/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsWrap;
