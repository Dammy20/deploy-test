import React, { useEffect, useReducer, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import axiosInstance from "../../store/axiosinstance";
import { AiTwotoneHome } from "react-icons/ai"
import { FaPlusCircle } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"
import { FaProductHunt } from "react-icons/fa"
import { FaQuestionCircle } from "react-icons/fa"
import { BiHelpCircle } from "react-icons/bi"
import { BASE_URL } from "../../http/config";
import { Base_Url } from "../../http/config";
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
  const [link, setLink] = useState([])
  const { email } = Authstate.state;

  const [profileName, setProfileName] = useState(null)
  const [existingDetails, setExistingDetails] = useState({});
  const [profileEmail, setProfileEmail] = useState(null)
  const [imageDisplay, setImageDisplay] = useState(null)
  const ProtectedApi = useProtectedApi()
  // const { userProfileImage, profileName, profileEmail } = useContext(UserContext);


  const handleToggle = () => {
    setChange(!change);
  };
  const handleLinkAccount = async () => {

    try {
      const response = await axiosInstance.get(`${Base_Url}/payment/api/CustomerAccount/GetCustomerAccount?userId=${userId}`)
      console.log(response.data)
      console.log(response.data.data.amount)

      if (response.data.isSuccessful === true) {
        setLink(response.data.data)

      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleLinkAccount()
    handleExisting()
  }, [])
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  ;
  const handleExisting = async () => {
    const user_Id = userId;
    console.log(userId)
    try {
      const response = await axiosInstance.get(`${BASE_URL}/ExistingDetails?User_Id=${user_Id}`)
      console.log(response.data[0].profileImage)
      console.log(response.data[0])
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

    } catch (error) {
      console.log(error)
    }

  }





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
      setSidebar((prevState) => !prevState);
    }
  };
  const handleSidbarMenus = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar((prevState) => !prevState);
    }
    localStorage.clear();
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

        </div>
        <header className="header-area style-1">
          <div className="nav-logo">
            <Link to={`${process.env.PUBLIC_URL}/`} onClick={scrollTop}>
              <img className="image-view w-50"
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
            <nav className="nav-header">

              <div>
                <ul className="menu-list ">
                  <li
                    className=""
                    onClick={() => dispatch({ type: "homeOne" })}
                  >
                    <Link
                      to={"/"}
                      className={`${state.activeMenu === "homeOne " ? "active" : "text-decoration-none"
                        }`}
                    >
                      < AiTwotoneHome /> Home
                    </Link>

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
                      to={`${process.env.PUBLIC_URL}/walletaccount`}
                      onClick={() => { scrollTop(); handleSidbarMenu() }}
                      className={`${state.activeMenu === "contact" ? "active" : "text-decoration-none"} `}
                    >
                      {change ? `₦${link.amount ? link.amount : "0.00"}` : "****"}
                    </Link>
                  </li>



                </ul>
              </div>
              <div className="nav-right d-flex ">

                <ul className="menu-list">
                  <li
                    className="menu-item-has-children"
                    onClick={() => dispatch({ type: "news" })}
                  >

                    <Link

                    >
                      {imageDisplay ? (
                        <img
                          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                          src={imageDisplay}
                          to={"#"}
                          className={`${state.activeMenu === "news" ? "active" : "text-decoration-none"
                            } ${""}`}
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
                              <h6>{`${Authstate.state.firstName}`}</h6>
                              <p className="account-size">{Authstate.state.email}</p>

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
                          onClick={() => { scrollTop(); handleSidbarMenus() }}
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
                <div className="w-50">
                  <button className="border-header" style={{ backgroundColor: "#090892", marginRight: "10px", border: "none", color: "white", width: "100%", height: "5vh", borderRadius: "7px", marginTop: "1.8rem" }} onClick={() => dispatch({ type: "create" })}>
                    <Link
                      to={`${process.env.PUBLIC_URL}/createproduct`}
                      onClick={() => { scrollTop(); handleSidbarMenu() }}
                      className="border-create"
                    >
                      <FaPlusCircle /> New item
                    </Link>
                  </button>
                </div>




              </div>
            </nav>


          </div>
          <div
            className="mobile-menu-btn d-lg-none d-block"
            onClick={handleSidbarMenu}
          >
            <i className="bx bx-menu" />
          </div>
          {/* <div className={sidebar === 1 ? "main-menu show-menu" : "main-menu"}> */}


          {/* </div>  */}

        </header >
      </UserProvider >

    </>
  );

}

export default Header;
