import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MerchantWrap() {
  const [openEye, setOpenEye]= useState();
  const handleEyeIcon = ()=>{
    if(openEye === false || openEye ===0){
      setOpenEye(1)
    }else{
      setOpenEye(false)
    }
  }
    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="signup-section pt-120 pb-120">
        <img alt="images" src={process.env.PUBLIC_URL+ '/images/bg/section-bg.png'}  className="section-bg-top" />
        <img alt="images" src={process.env.PUBLIC_URL+ '/images/bg/section-bg.png'} className="section-bg-bottom" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="form-wrapper wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                <div className="form-title">
                  <h3>Add Merchant</h3>
                  <p>Do you already have an account? <Link to={`${process.env.PUBLIC_URL}/login`} onClick={scrollTop}>Log in here</Link></p>
                </div>
                <form className="w-100">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Frist Name *</label>
                        <input type="email" placeholder="Frist Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Last Name *</label>
                        <input type="email" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Enter Your Email *</label>
                        <input type="email" placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                    <div className="form-inner">
                    <label>Password *</label>
                    <input type={openEye === 1 ? "password": "text"} name="password" id="password" placeholder="Create A Password" />
                    <i className={openEye === 1 ? "bi bi-eye-slash" :"bi bi-eye-slash bi-eye"} id="togglePassword" onClick={handleEyeIcon} />
                  </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                          <input type="checkbox" id="html" />
                          <label htmlFor="html">I agree to the Terms &amp; Policy</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="account-btn">Join Merchant</button>
                </form>
                <div className="alternate-signup-box">
                  <h6>or signup WITH</h6>
                  <div className="btn-group gap-4">
                    <Link    to={"#"} className="eg-btn google-btn d-flex align-items-center"><i className="bx bxl-google" /><span>signup whit google</span></Link>
                    <Link    to={"#"} className="eg-btn facebook-btn d-flex align-items-center"><i className="bx bxl-facebook" />signup whit facebook</Link>
                  </div>
                </div>
                <div className="form-poicy-area">
                  <p>By clicking the "signup" button, you create a Cobiro account, and you agree to Cobiro's <Link to={"#"}>Terms &amp; Conditions</Link> &amp; <Link to={"#"}>Privacy Policy.</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default MerchantWrap