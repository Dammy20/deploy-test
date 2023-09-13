import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import '../page/home/hero.css'
function Footer(props) {

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <>
      <footer className="row-shift">
        <div className="row row-all  pt-4 pb-4">
          <div className="col-lg-3 col-md-6 d-flex justify-content-center">
            <div className="image-contain">
              <img className="w-100" src="/images/bg/peabuxwhite.png" alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="news-display">
              <h5 style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }} >NEW TO PEABUX</h5>
              <p style={{ fontSize: "14px", fontWeight: "300", color: "white" }}>Subscribe to our newsletter to get update on latest offers</p>
              <div className="d-flex gap-2">
                <input style={{ width: "100%" }} className="form-control  p-3" type="text" />
                <button className="btn btn-transparent p-3 border border-2 text-white" >Male</button>
                <button className="btn btn-transparent p-3 border border-2 text-white">Female</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "black" }} className="row pt-5 pb-5">
          <div className="col-lg-3 col-md-6 d-flex justify-content-center">
            <div className="footer-help">
              <h4 style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }}>Need Help?</h4>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>Chat with us</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>Help Center</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>Contact Us</p>

              </div>
            </div>

          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-help2">
              <h4 style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }} >ABOUT JUMIA</h4>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>About us</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>Terms and Conditions</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>Privacy Notice</p>

              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-help3">
              <h4 style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }}>PEABUX INTERNATIONAL</h4>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white", marginTop: "10px" }}>South Africa</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>Ghana</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>UAE</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-help3">
              <h4 style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }}>USEFUL LINKS</h4>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>How to land to Browse product?</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>How to place a bid?</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>How to create a product on our page?</p>

              </div>
            </div>
          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;
{/* <div className="footer-top">
          <div className="container">
            <div className="row gy-5">

              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                <div className="footer-item">
                 
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                <div className="footer-item">
                 
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer-item">
                  
                        
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="footer-bottom">

        </div> */}