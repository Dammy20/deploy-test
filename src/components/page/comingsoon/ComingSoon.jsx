import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import './cominsoon.css'

function ComingSoon() {
    return (
        <center>
            <div>
                <div className='coming-image' style={{ width: "47%" }}>
                    <img style={{ width: "100%" }} src="./images/bg/maincominng.png" alt="" />


                </div>
                {/* <Link to={"/"}> <button style={{ backgroundColor: "#090892", fontWeight: "bold" }} className='btn btnn-coming btn-danger p-2 py-3 px-3 border border-0 rounded-3'><IoMdArrowRoundBack /> Go To Home</button></Link> */}


            </div>
        </center>
    )
}

export default ComingSoon

