import React from 'react'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

function WalletAccountWrap() {
    return (
        <div className='wallet-container d-flex flex-wrap'>
            <div className=' e-wallet col-md-5 ml-md-5 mb-4  '>

                <div className='mt-4 pt-5 '>
                    <h4 className='font-weight-bolder' style={{ color: "#090892", fontWeight: "bolder" }}>E-WALLET</h4>
                    <p style={{ color: "black", fontWeight: "bold" }} className='mt-4'>This is a wallet page where you can either download<br />the app or go to the web page</p>
                    <div className='d-flex  align-items-center mt-4 gap-3'>
                        <button style={{ fontWeight: "bold" }} className='btn btn-dark p-2 px-3 py-2 rounded-2 font-weight-bold'><FaDownload style={{ marginTop: "-4px" }} />Download Mobile App</button>
                        <Link to={"/createwalletaccount"}>
                            <button style={{ backgroundColor: "#090892", fontWeight: "bold" }} className='btn btn-dark p-2 px-3 py-2 rounded-2 font-weight-bold'><FaArrowRight style={{ marginTop: "-4px" }} />Continue with Web Page</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='e-image col-md-7' >
                <img className='w-100' src="./images/bg/wallet.png" alt="Wallet Background" />
            </div>
        </div>





    )
}

export default WalletAccountWrap
