import React from 'react'
import './Wallet.css'
import { BsArrowLeft } from "react-icons/bs"

function Wallet() {
    return (
        <div className='container-wallet '>
            <div>
                <h2>Connect your wallet.</h2>
                <h6 className='connect-wallet'>Connect with one of our available wallet providers or create a new one.</h6>
                <hr className='width-wallet' />
            </div>
            <div style={{ border: "1px groove" }} className='border-wallet shadow-sm  d-flex'>
                <img className='image-walletmeta ' src="./images/bg/meta.png" alt="" />
                <h5 className='font-wallet px-4 py-4'> Metamask</h5>
            </div>
            <div style={{ border: "1px groove" }} className='border-wallet shadow-sm mt-3 d-flex'>
                <img className='image-wallet2' src="./images/bg/wallet.png" alt="" />
                <h5 className='font-wallet px-4 py-4'> Walletconnect</h5>
            </div>
            <div style={{ border: "1px groove" }} className='border-wallet shadow-sm  mt-3 d-flex'>
                <img className='image-walletmeta ' src="./images/bg/meta.png" alt="" />
                <h5 className='font-wallet px-4 py-4'> Wallet</h5>
            </div>
            <div style={{ border: "1px groove" }} className='border-wallet shadow-sm  mt-3 d-flex'>
                <img className='image-wallet2' src="./images/bg/wallet.png" alt="" />
                <h5 className='font-wallet px-4 py-4'> Walletlink</h5>
            </div>

            <div>
                <button className='btn-wallet'><BsArrowLeft /> Go Back Home
                </button>
            </div>

        </div>
    )
}

export default Wallet
