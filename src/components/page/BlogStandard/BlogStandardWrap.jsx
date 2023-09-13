import React from 'react'
import BlogStandarLayoutTwo from './BlogStandarLayoutTwo'
import StandardBlogLayoutOne from './StandardBlogLayoutOne'
import Pagination from '../../common/Pagination'
import SearchWidget from '../blog/SearchWidget'
import CatagoryWidget from '../blog/CatagoryWidget'
import NewPostWidget from '../blog/NewPostWidget'
import BannerWidget from '../blog/BannerWidget'
import PostTagWidget from '../blog/PostTagWidget'

function BlogStandardWrap() {
  return (
    <>
        <div className="blog-standard sec-mar-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 or-2">
                        <div className="blog-standard-details">
                        <StandardBlogLayoutOne/>
                        <BlogStandarLayoutTwo  image={"img/blog/blog-standard-1.jpg"} date="22.02.2022" comment={3} title="Donec Porttitor Feugiat Lectus Quis Vehicula Enim Metus Proin Ide Odio Sagittis Cursus Nisi At Pellentesque."  />
                        <BlogStandarLayoutTwo  image={"img/blog/blog-standard-2.jpg"} date="25.03.2022" comment={5} title="Consectetur Vehicula Enim Metus Bibendum Elitangu Quis Vulputate Lectus Leo Sed Erat Vehicula Elitangu Quis."  />
                        <BlogStandarLayoutTwo  image={"img/blog/blog-standard-3.jpg"} date="15.04.2022" comment={7} title="Aliquam Nec Urna Non Nisl Finibus Ornare Et In Dolor Praesent Suscipit Dui Vel Urna Non Nisl Finibus Ornare."  />
                        </div>
                        <Pagination/>
                    </div>
                    <div className="col-lg-4 or-1">
                        <SearchWidget/>
                        <CatagoryWidget/>
                        <NewPostWidget/>
                        <PostTagWidget/>
                        <BannerWidget/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogStandardWrap