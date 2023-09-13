import React from 'react'

function CommentForm() {
  return (
    <>
     <div className="comment-form pb-120">
        <div className="blog-widget-title style2">
          <h4>Leave A Comment</h4>
          <p className="para">Your email address will not be published.</p>
          <span />
        </div>
        <form action="#">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-6">
              <div className="form-inner">
                <input type="text" placeholder="Your Name :" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-6">
              <div className="form-inner">
                <input type="email" placeholder="Your Email :" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <textarea name="message" placeholder="Write Message :" rows={12} defaultValue={""} />
              </div>    
            </div>
            <div className="col-12">
              <button type="submit" onClick={(e) =>e.preventDefault()} className="eg-btn btn--primary btn--md form--btn">Submit Now</button>
            </div>
          </div>
        </form>
      </div>   
    </>
  )
}

export default CommentForm