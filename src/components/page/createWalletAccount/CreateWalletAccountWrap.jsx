import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../../store/axiosinstance'

import { useHistory } from 'react-router-dom'

import { Modal, Button } from 'react-bootstrap';
import { BASE_URL, Base_Url, base_Url } from '../../../http/config'

import Swal from 'sweetalert2'
import { AuthContext } from '../../common/AuthProvider';

function CreateWalletAccountWrap() {
    const userId = localStorage.getItem("userId")
    const Authstate = useContext(AuthContext)
    const history = useHistory()
    const [accountCreated, setAccountCreated] = useState(false);

    const [isLoading, setIsLoading] = useState(false)
    const [linkWallet, setLinkWallet] = useState([])
    const [isWallet, setIsWallet] = useState(false)
    const [walletCreation, setWalletCreation] = useState([])
    const [walletAccount, setWalletAccount] = useState([])
    const [existingDetails, setExistingDetails] = useState([])
    const [showModal, setShowModal] = useState(true);
    const [userDetails, setUserDetails] = useState({
        userId: "",
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        transactionPin: "",
    })
    useEffect(() => {

        const user_Id = userId;


        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`${BASE_URL}/ExistingDetails?User_Id=${user_Id}`);


                if (response.data.length > 0) {
                    setExistingDetails(response.data[0]);

                }

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();



    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleVerify = () => {
        setShowModal(false)
    }

    const handleLinkAccount = async () => {
        setIsLoading(true)
        try {
            const response = await axiosInstance.get(`${Base_Url}/payment/api/CustomerAccount/GetCustomerAccount?userId=${userId}`)
            console.log(response.data)

            if (response.data.isSuccessful === true) {

                const accountId = response.data.data.accountId;


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
            setLinkWallet(response.data)
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
            }


        } catch (error) {
            console.log(error)
            if (response.data.isSuccess === false) {
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
        }

    }
    const handleChangeOtp = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const handleVerification = async () => {
        setIsLoading(true)
        const data = {
            userId: userId,
            email: Authstate.state.email,
            firstName: Authstate.state.firstName.split(' ')[0],
            lastName: Authstate.state.lastName,
            phone: userDetails.phone,
            transactionPin: userDetails.transactionPin,
        }
        console.log(data)

        try {
            const response = await axiosInstance.post(`${Base_Url}/payment/api/CustomerAccount/CreateCustomerAccount`, data)
            console.log(response.data)
            console.log(response.data.isSuccessful)
            setIsWallet(true);

            if (response.data.isSuccessful === true) {
                setWalletCreation(response.data)
                setIsWallet(true);


                Swal.fire({
                    html: `
                    <div>
                        <p>${response.data.responseMessage}</p>
                        <p style="font-style: italic; color: #555;">
                            <strong>Reminder:</strong> After creating your wallet, it's recommended to link your account for a seamless experience.
                            Use your login details or credentials to log into the wallet app, which supports single sign-on.
                        </p>
                    </div>
                `,
                    icon: 'success',
                    showConfirmButton: true,


                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }


                })
                setIsWallet(true);
                userDetails.transactionPin = "",
                    userDetails.phone = ""
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
                setIsWallet(false);
            }
        } catch (error) {
            console.log(error)

        } finally {
            setIsLoading(false)
        }

    }
    return (
        <center>


            {!showModal ? (
                <div class="Signup-contain mt-5 pt-2">
                    <div class="row">
                        <div class="">
                            <div class="Signup-form-container shadow-sm">
                                {!isLoading ? "" :
                                    <nav className='Signup-loading'>
                                        <img className='Signup-spin-nav' src="./images/bg/elipsing.svg" alt="" />

                                    </nav>}
                                <div className='Signup-img-contain d-flex justify-content-center'>
                                    <img style={{ width: "120px" }}
                                        alt=""
                                        src={process.env.PUBLIC_URL + "/images/bg/peabux-logo.png"}
                                    />
                                </div>
                                <h3 class="Signup-title mt-3">Create Wallet account</h3>
                                <div className=' form-horizontal '>
                                    <div class="form-group  mt-3">
                                        <label className='labelall' htmlFor="">Email</label>
                                        <span class="Signup-icon-login fa fa-envelope"></span>
                                        <input
                                            value={Authstate.state.email}
                                            name="email"
                                            readOnly
                                            onChange={handleChangeOtp}
                                            placeholder='Enter Email Address'
                                            style={{ padding: "20px", width: "100%", borderRadius: "5px", backgroundColor: "#f0f0f0", fontSize: "13px" }}
                                            class="formcontrol mt-2 form-control-lg"
                                            type="text"
                                        />
                                    </div>
                                    {/* {errors.password && <p className=' text-danger text-xs'>{errors.password}</p>} */}

                                    <div class="form-group mt-3">
                                        <label className='labelall' htmlFor="">firstName</label>
                                        <i class="Signup-icon-login fa fa-lock "></i>
                                        <input
                                            value={(Authstate.state.firstName || '').split(' ')[0]} //
                                            name="firstName"
                                            onChange={handleChangeOtp}
                                            placeholder='Enter FirstName'
                                            readOnly
                                            style={{ padding: "20px", width: "100%", backgroundColor: "#f0f0f0", fontSize: "13px", borderRadius: "5px" }}
                                            class="formcontrol mt-2 form-control-lg"
                                            type="text"
                                        />
                                    </div>
                                    <div className='form-group mt-3' >
                                        <label class='labelall' htmlFor="">lastName</label>
                                        <i class="Signup-icon-login fa fa-lock "></i>
                                        <input
                                            value={Authstate.state.lastName}
                                            name="lastName"
                                            readOnly
                                            onChange={handleChangeOtp}
                                            placeholder='Enter lastName'

                                            style={{ padding: "20px", width: "100%", backgroundColor: "#f0f0f0", fontSize: "13px", borderRadius: "5px" }}
                                            class="formcontrol mt-2 form-control-lg"
                                            type="text"
                                        />
                                    </div>
                                    <div className='form-group mt-3' >
                                        <label class='labelall' htmlFor="">Confirmpassword</label>
                                        <i class="Signup-icon-login fa fa-lock "></i>
                                        <input
                                            value={userDetails.phone}
                                            name="phone"
                                            onChange={handleChangeOtp}
                                            placeholder='Enter phone number'
                                            style={{ padding: "20px", width: "100%", fontSize: "13px", borderRadius: "5px" }}
                                            class="formcontrol mt-2 form-control-lg"
                                            type="number"
                                        />
                                    </div>



                                    <div className='form-group mt-3' >
                                        <label class='labelall' htmlFor="">Confirmpassword</label>
                                        <i class="Signup-icon-login fa fa-lock "></i>
                                        <input
                                            value={userDetails.transactionPin}
                                            name="transactionPin"
                                            onChange={handleChangeOtp}

                                            placeholder='Enter transactionPin'
                                            style={{ padding: "20px", width: "100%", fontSize: "13px", borderRadius: "5px" }}
                                            class="formcontrol mt-2 form-control-lg"
                                            type="password"
                                        />

                                    </div>

                                    {/* {errors.confirmPassword && <p className=' text-danger text-xs'>{errors.confirmPassword}</p>} */}



                                    <button
                                        disabled={isWallet || existingDetails.walletAccount != null}
                                        onClick={handleVerification} class="mt-3 h-35 btn btn-primary w-100 ">Create Account</button>
                                    <h5 className='font-weight-bolder'>AND</h5>
                                    <span class="user-login text-center">Already Have an Account? Click Here to link account before proceeding <button onClick={handleLinkAccount} class="mt-3 h-35 btn btn-primary w-100">Link account</button></span>

                                    <div class="d-flex justify-content-center pt-3">
                                        <div class="d-flex align-items-center">
                                            {/* <button className='Signup-login-with-google-btn2' onClick={() => login()}>Sign in with Google </button> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Modal show={showModal} onHide={handleCloseModal} backdrop="static" centered keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger' centered>  <img className="w-25" src="./images/bg/warning.jpg" alt="" /> </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <h5 className='font-weight-bold text-danger'>
                        This is a single sign-on. This summarily mean that users can use their auction login details to log into the wallet application. In addition to this,
                        please note that when your account has been created, you are expected to also link your account in order to proceed
                        . </h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "#090892" }} onClick={handleVerify}>
                        OK
                    </Button>
                    <Button style={{ backgroundColor: "black" }} onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}
        </center>

    )
}

export default CreateWalletAccountWrap
