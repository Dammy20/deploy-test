import React from "react";
import Pagination from "../../common/Pagination";
import BlogSingleItem from "./BlogSingleItem";

function BlogWrap() {
  return (
    <>
      <div className="blog-section pt-120 pb-120">
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
        <div className="container">
          <div className="row d-flex justify-content-center g-4 mb-60">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
              <BlogSingleItem
                date="Jan 30, 2022"
                image="/images/blog/blogstyle11.png"
                blogContent="Still Has in Advertising Creative Digital Reviews"
                authorName="Johan Martin"
                commnet="5"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
            <BlogSingleItem
                date="Feb 12, 2022"
                image="/images/blog/blogstyle12.png"
                blogContent="Our friend Johnny No-Job He’s a specialist in influencer."
                authorName="Mallik Vanzir"
                commnet="8"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
            <BlogSingleItem
                date="Mar 12, 2022"
                image="/images/blog/blogstyle13.png"
                blogContent="While these are just estimates, they encouraging guide"
                authorName="Jullai Nathar"
                commnet="2"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
            <BlogSingleItem
                date="Apr 15, 2022"
                image="/images/blog/blogstyle14.png"
                blogContent="What skills do you need marketing consultant?"
                authorName="Onthr Router"
                commnet="1"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
            <BlogSingleItem
                date="May 20, 2022"
                image="/images/blog/blogstyle15.png"
                blogContent="If you feel the same way becoming a."
                authorName="Onar Paresi"
                commnet="5"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
            <BlogSingleItem
                date="Jun 29, 2022"
                image="/images/blog/blogstyle16.png"
                blogContent="Creative Fashion Riboon Digital with rgb lights."
                authorName="Khals Jdail"
                commnet="12"
              />
            </div>
          </div>
          <Pagination/>
         
        </div>
      </div>
    </>
  );
}

export default BlogWrap;
