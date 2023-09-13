import React from "react";
import { Link } from "react-router-dom";

function TopbarHeader() {

  return (
    <>
      <div className="topbar">
  <div className="topbar-left d-flex flex-row align-items-center">
    <h6>Follow Us</h6>
    <ul className="topbar-social-list gap-2">
      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
      <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
    </ul>
  </div>
  <div className="email-area">
    <h6>Email: <a href="mailto:contact@example.com">contact@example.com</a></h6>
  </div>
  <div className="topbar-right">
    <ul className="topbar-right-list">
      <li><img src={process.env.PUBLIC_URL + "/images/icons/flag-eng.png"} alt="images" /><span>Language</span>
        <ul className="topbar-sublist">
          <li><img src={process.env.PUBLIC_URL + "images/icons/flag-germeny.svg"} alt="images" /><span>Germeny</span></li>
          <li> <img src={process.env.PUBLIC_URL + "/images/icons/flag-french.svg"} alt="images" /><span>French</span></li>
          <li><img src={process.env.PUBLIC_URL + "/images/icons/flag-bangla.svg"} alt="images" /><span>Bengali</span></li>
        </ul>
      </li>
      <li>Currency
                   <ul className="topbar-sublist">
                        <li><Link to="#"><i className="bi bi-currency-dollar"></i>Usd</Link></li>
                        <li><Link to="#"><i className="bi bi-currency-euro"></i>Euro</Link></li>
                        <li><Link to="#"><i className="bi bi-currency-pound"></i>Pound</Link></li>
                    </ul>
                </li>
    </ul>
  </div>
</div>

    </>
  );
}
export default TopbarHeader;
