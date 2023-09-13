import React, { useEffect, useReducer, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiTwotoneHome } from "react-icons/ai"
import { FaPlusCircle } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"
import { FaProductHunt } from "react-icons/fa"
import { FaQuestionCircle } from "react-icons/fa"
import { BiHelpCircle } from "react-icons/bi"
import { BASE_URL } from "../../http/config";
import { toast } from "react-toastify"


import { BiWalletAlt } from "react-icons/bi"
import { RxDashboard } from "react-icons/rx"
import { AiOutlineLogin } from "react-icons/ai"
import { UserContext, UserProvider } from "./UserContext";
import { BsQuestionCircle } from "react-icons/bs"
import { AuthContext } from "./AuthProvider";



import { BiLogOutCircle } from "react-icons/bi"
import { RiAuctionLine } from "react-icons/ri"
import TopbarHeader from "./TopbarHeader";
import useProtectedApi from "../../hooks/useProtectedApi";

function Header() {
  const Authstate = useContext(AuthContext)
  const [change, setChange] = useState(false)
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const userId = localStorage.getItem("userId")
  const [profileName, setProfileName] = useState(null)
  const [existingDetails, setExistingDetails] = useState({});
  const [profileEmail, setProfileEmail] = useState(null)
  const [imageDisplay, setImageDisplay] = useState(null)
  const ProtectedApi = useProtectedApi()
  // const { userProfileImage, profileName, profileEmail } = useContext(UserContext);


  const handleToggle = () => {
    setChange(!change);
  };
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  useEffect(() => {
    const user_Id = userId;
    console.log(userId);

    ProtectedApi.get(`${BASE_URL}/ExistingDetails?User_Id=${user_Id}`)
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          setExistingDetails(response.data[0]);
          if (response.data[0].profileImage) {
            setImageDisplay(response.data[0].profileImage);

          }
          if (response.data[0].fullname) {
            setProfileName(response.data[0].fullname);

          }
          if (response.data[0].emailAddress) {
            setProfileEmail(response.data[0].emailAddress);

          }
        }

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-area");
    const scrollTop = window.scrollY;
    scrollTop >= 20
      ? header.classList.add("sticky")
      : header.classList
        ? header.classList.remove("sticky")
        : header.classList.add("sticky");
  };

  /*---------menu button event----------*/
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };

  /*---------add event scroll top----------*/
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const searchFullScreen = () => {
    if (search === false || search === 0) {
      setSearch(1);
      console.log(search);
    } else {
      setSearch(false);
    }
  };

  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "pages":
        return { activeMenu: "pages" };
      case "news":
        return { activeMenu: "news" };
      case "brows":
        return { activeMenu: "brows" };
      case "itwork":
        return { activeMenu: "itwork" };
      case "about":
        return { activeMenu: "about" };
      case "contact":
        return { activeMenu: "contact" };
      default:
        return { activeMenu: "" };
    }
  }

  return (
    <>
      <UserProvider>

        <div className={search === 1 ? "mobile-search slide" : "mobile-search"}>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-11">
                <label>What are you lookking for?</label>
                <input
                  type="text"
                  placeholder="Search Products, Category, Brand"
                />
              </div>
              <div className="col-1 d-flex justify-content-end align-items-center">
                <div className="search-cross-btn " onClick={searchFullScreen}>
                  {/* <i class="bi bi-search me-4"></i> */}
                  <i className="bi bi-x" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="header-area style-1">
          <div style={{ width: "20%" }} className="">
            <Link to={`${process.env.PUBLIC_URL}/`} onClick={scrollTop}>
              <img style={{ width: "68%", paddingLeft: "4.5rem" }}
                alt=""
                src={process.env.PUBLIC_URL + "/images/bg/peabux-logo.png"}
              />
            </Link>
          </div>
          <div className={sidebar === 1 ? "main-menu show-menu" : "main-menu"}>
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap ">
                <Link to={"/"}>
                  <img className="w-50"
                    alt="logo"
                    src={process.env.PUBLIC_URL + "/images/bg/peabux-logo.png"}
                  />
                </Link>
              </div>
              <div className="menu-close-btn" onClick={handleSidbarMenu}>
                <i className="bi bi-x-lg" />
              </div>
            </div>
            <ul className="menu-list ">
              <li
              // className="menu-item-has-children"
              // onClick={() => dispatch({ type: "homeOne" })}
              >
                <Link
                  to={"/"}
                  className={`${state.activeMenu === "homeOne " ? "active" : "text-decoration-none"
                    }`}
                >
                  < AiTwotoneHome /> Home
                </Link>
                {/* <i className="bx bx-plus dropdown-icon" /> */}
                <ul

                >

                </ul>
              </li>

              <li onClick={() => dispatch({ type: "brows" })}>
                <Link
                  to={`${process.env.PUBLIC_URL}/dashboard`}
                  onClick={() => { scrollTop(); handleSidbarMenu() }}
                  className={`${state.activeMenu === "brows" ? "active" : "text-decoration-none"} `}
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>


              <li onClick={() => dispatch({ type: "brows" })}>
                <Link
                  to={`${process.env.PUBLIC_URL}/product`}
                  onClick={() => { scrollTop(); handleSidbarMenu() }}
                  className={`${state.activeMenu === "brows" ? "active" : "text-decoration-none"} `}
                >
                  <FaProductHunt /> Products
                </Link>
              </li>


              <li onClick={() => dispatch({ type: "brows" })}>
                <Link
                  to={`${process.env.PUBLIC_URL}/faq`}
                  onClick={() => { scrollTop(); handleSidbarMenu() }}
                  className={`${state.activeMenu === "brows" ? "active" : "text-decoration-none"} `}
                >
                  <FaQuestionCircle /> Faq
                </Link>
              </li>



              <li onClick={handleToggle}>
                <Link
                  to={`${process.env.PUBLIC_URL}/wallet`}
                  onClick={() => { scrollTop(); handleSidbarMenu() }}
                  className={`${state.activeMenu === "contact" ? "active" : "text-decoration-none"} `}
                >
                  {change ? "$0.00" : "****"}
                </Link>
              </li>



            </ul>

            {/* mobile-search-area */}
            {/* <div className="d-lg-none d-block ml-4"> */}
            {/* <form className="mobile-menu-form"> */}
            {/* <div className="input-with-btn d-flex flex-column">
                <input type="text" placeholder="Search here..." />
                <button type="submit" className="eg-btn btn--primary btn--sm">
                  Search
                </button>
              </div> */}
            {/* </form> */}
            {/* </div> */}
          </div>
          <div className={sidebar === 1 ? "main-menu show-menu" : "main-menu"}>
            <div className="nav-right d-flex align-items-center">

              <ul className="menu-list">
                <li
                  className="menu-item-has-children"
                  onClick={() => dispatch({ type: "news" })}
                >
                  <Link
                    to={"#"}
                    className={`${state.activeMenu === "news" ? "active" : "text-decoration-none"
                      } ${""}`}
                  >
                    {imageDisplay ? (
                      <img
                        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                        src={imageDisplay}
                        alt="Profile"
                      />
                    ) : (
                      <img
                        style={{ width: "30px" }}
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        className="Profile-img-fluid rounded-circle"
                        alt="profile"
                      />
                    )}


                  </Link>

                  <ul
                    className={
                      state.activeMenu === "news"
                        ? "submenu d-block"
                        : "submenu d-xl-block "
                    }
                  >
                    <li>
                      <NavLink className="text-decoration-none"
                        to={`${process.env.PUBLIC_URL}/error`}
                        onClick={() => { scrollTop(); handleSidbarMenu() }}
                      >
                        <div className="d-flex gap-2 mt-3">
                          {imageDisplay ? (
                            <img
                              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                              src={imageDisplay}
                              alt="Profile"
                            />
                          ) : (
                            <img
                              style={{ width: "40px" }}
                              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                              className="Profile-img-fluid rounded-circle"
                              alt="profile"
                            />
                          )}


                          <div>
                            <h6> {profileName && <span>{profileName}</span>}</h6>
                            <p className="account-size">{profileEmail && <span>{profileEmail}</span>}</p>

                          </div>


                        </div>
                        <hr className="profile-line w-100" />


                      </NavLink>
                    </li>
                    <li style={{ marginTop: "-20px" }}>
                      <NavLink className="text-decoration-none"
                        to={`${process.env.PUBLIC_URL}/dashboard`}
                        onClick={() => { scrollTop(); handleSidbarMenu() }}
                      >
                        <div className="d-flex gap-2">
                          <BiUser className="mt-1" />
                          <p> My Profile</p>
                        </div>
                      </NavLink>
                    </li>
                    <li style={{ marginTop: "-20px" }}>
                      <NavLink className="text-decoration-none"
                        to={`${process.env.PUBLIC_URL}/wallet`}
                        onClick={() => { scrollTop(); handleSidbarMenu() }}
                      >
                        <div className="d-flex gap-2">
                          <BiWalletAlt className="mt-1" />
                          <p>Wallet</p>
                        </div>
                        <hr style={{ border: "0.5px groove" }} className="profile-line2 w-100 " />
                      </NavLink>
                    </li>

                    <li style={{ marginTop: "-20px" }}>
                      <NavLink className="text-decoration-none"
                        to={`${process.env.PUBLIC_URL}/login`}
                        onClick={() => { scrollTop(); handleSidbarMenu() }}
                      >
                        <div className="d-flex gap-2">
                          <BiLogOutCircle className="mt-1" />
                          <p>Logout</p>
                        </div>
                      </NavLink>
                    </li>
                    <li style={{ marginTop: "-20px" }}>
                      <NavLink className="text-decoration-none"
                        to={`${process.env.PUBLIC_URL}/wallet`}
                        onClick={() => { scrollTop(); handleSidbarMenu() }}
                      >
                        <div className="d-flex gap-2">
                          <BiHelpCircle className="mt-1" />
                          <p>Help</p>
                        </div>
                      </NavLink>
                    </li>
                  </ul>

                </li>
              </ul>
              <button className="border-header" style={{ backgroundColor: "#090892", marginRight: "10px", border: "none", color: "white", padding: "6px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "7px" }} onClick={() => dispatch({ type: "create" })}>
                <Link
                  to={`${process.env.PUBLIC_URL}/createproduct`}
                  // onClick={() => { scrollTop(); handleSidbarMenu() }}
                  className="border-create"
                >
                  <FaPlusCircle /> New item
                </Link>
              </button>

              {/* <div className="search-btn mr-4" onClick={searchFullScreen}>
              <i className="bi bi-search" />
            </div> */}




              {/* <div className="eg-btn btn--primary header-btn">
            <Link to={`${process.env.PUBLIC_URL}/login`} onClick={scrollTop}>
              My Account
            </Link>
          </div> */}
              <div
                className="mobile-menu-btn d-lg-none d-block"
                onClick={handleSidbarMenu}
              >
                <i className="bx bx-menu" />
              </div>

            </div>
          </div>
        </header>
      </UserProvider>

    </>
  );

}

export default Header;
