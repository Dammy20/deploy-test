import React from 'react'

function SearchHeader() {
    return (
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

                    <div
                        className="mobile-menu-btn d-lg-none d-block"
                        onClick={handleSidbarMenu}
                    >
                        <i className="bx bx-menu" />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default SearchHeader
