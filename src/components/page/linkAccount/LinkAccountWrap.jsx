import React, { useContext } from 'react'
import { useState, } from 'react'
import { Base_Url } from '../../../http/config'
import axiosInstance from '../../../store/axiosinstance'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { AuthContext } from '../../common/AuthProvider'

function LinkAccountWrap() {
    const Authstate = useContext(AuthContext)
    const userId = localStorage.getItem("userId")
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [walletAccount, setWalletAccount] = useState([])

    const handleLinkAccount = async () => {
        setIsLoading(true)
        try {
            const response = await axiosInstance.get(`${Base_Url}/payment/api/CustomerAccount/GetCustomerAccount?userId=${userId}`)
            console.log(response.data)

            if (response.data.isSuccessful === true) {
                const accountId = response.data.data.accountId;
                document.cookie = `customerCode=${response.data.data.paystackCustomerCode}; path=/; secure; SameSite=Strict`;
                document.cookie = `amount=${response.data.data.amount}; path=/; secure; SameSite=Strict`;

                Authstate.setState({

                    customerCode: response.data.data.paystackCustomerCode,
                    amount: response.data.data.amount,

                });
                setWalletAccount(response.data.data);
                Swal.fire({
                    text: response.data.responseMessage,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }


                })
                await handleUpdateProfile(userId, accountId);

            } else if (response.data.isSuccessful === false) {
                Swal.fire({
                    text: response.data.responseMessage,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 2000,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }


                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleUpdateProfile = async (userId, accountId) => {
        const data = {
            user_Id: Number(userId),
            walletAccount: accountId.toString(),
        }
        console.log(data)
        try {
            const response = await axiosInstance.post(`${Base_Url}/auction/api/Profile/UpdateProfileWalletDetails`, data)
            console.log(response.data)
            if (response.data.isSuccess === true) {
                Swal.fire({
                    text: response.data.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }


                })
                history.push("/product")
            } else if (response.data.isSuccess === false) {
                Swal.fire({
                    text: response.data.message,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 2000,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }


                })
            }


        } catch (error) {
            console.log(error)


        }


    }

    return (
        <center className=''>
            <div style={{ paddingTop: "2rem", paddingBottom: "5rem" }} className='container'>
                {!isLoading ? "" :
                    <nav className='Signup-loading'>
                        <img className='Signup-spin-nav' src="./images/bg/elipsing.svg" alt="" />

                    </nav>}
                <img style={{ width: "60%" }} src="images/bg/waving.jpg" alt="" />
                <h4 className='mt-2'>Click here to link your account</h4>
                <button onClick={handleLinkAccount} style={{ width: "20%", marginTop: "1rem", fontWeight: "bold", backgroundColor: "#090892", height: "2.7rem" }} className='font-weight-bold border rounded-3 border-0 text-light  '>Link Account</button>
            </div>
        </center>
    )
}

export default LinkAccountWrap
