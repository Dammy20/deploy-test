import React, { useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './change.css'

function ChangeWrap() {
    const [isLoading, setIsLoading] = useState(false)
    const [change, setChange] = useState({
        Email: '',
        oldPassword: '',
        password: ''
    })
    const form = useState(null)
    const history = useHistory()

    const data = {
        Email: change.Email,
        oldPassword: change.oldPassword,
        password: change.password,
    }
    const base_url = 'http://gateway.peabux.com/authentication/api/Account/ChangePassword'
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setIsLoading(true)
            const response = await axios.post(base_url, data)
            console.log(response.data.result)
            if (response.data.result.isSuccess === false) {
                Swal.fire({
                    text: response.data.result.message,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 3000,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                change.Email = ""
                change.password = ""
                change.oldPassword = ""
                setIsLoading(false)

            } else {
                Swal.fire({
                    text: response.data.result.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                history.push("/login");

                form.reset()
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }
    return (

        <>
            <div class="Change-containing  ">
                <div class="row Change-content2 p-3 shadow-sm ">
                    {!isLoading ? "" :
                        <nav className='Change-loading'>
                            <img className='Change-spin-nav' src="./images/bg/elipsing.svg" alt="" />

                        </nav>}
                    <div>
                        <img className="Change-head-logo2"
                            alt=""
                            src={process.env.PUBLIC_URL + "/images/bg/peabux-logo.png"}
                        />
                    </div>

                    <div class="col-md-6 mb-3 ">
                        <img className='Change-image-illustrate' style={{ width: "350px" }} src="./images/bg/forget.png" alt="" />
                    </div>

                    <div class="col-md-6 mt-4 ">
                        <h4 className='Change-welcome-login2'>Reset Password</h4>

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginTop: "20px" }} class="form-group d-flex align-items-center ">
                                <span class="Change-icon-login2 fa fa-envelope"></span>
                                <input value={change.Email} onChange={(e) => setChange({ ...change, Email: e.target.value })} style={{ padding: "10px", textIndent: "20px" }} type="email" placeholder='Enter your email' name="email" class="form-control shadow-sm" />
                            </div>
                            <div style={{ marginTop: "20px" }} class="form-group d-flex align-items-center ">
                                <i class="Change-icon-login2 fa fa-lock "></i>
                                <input value={change.oldPassword} onChange={(e) => setChange({ ...change, oldPassword: e.target.value })} style={{ padding: "10px", textIndent: "20px" }} type="password" placeholder='Enter your temporary' name="email" className="form-control shadow-sm" />
                            </div>
                            <div style={{ marginTop: "20px" }} class="form-group d-flex align-items-center ">
                                <i class="Change-icon-login2 fa fa-lock "></i>
                                <input value={change.password} onChange={(e) => setChange({ ...change, password: e.target.value })} style={{ padding: "10px", textIndent: "20px" }} type="password" placeholder='Enter your new password' name="email" class="form-control shadow-sm" />
                            </div>


                            <button style={{ marginTop: "30px" }} class=" mt-4 btn-class2">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangeWrap
    // < div class="mainDiv" >
    //     <div class="cardStyle">
    //         <form action="" onSubmit={handleSubmit} value={change}>

    //             <img src="" id="signupLogo" />

    //             <h2 class="formTitle">
    //                 Change your password
    //             </h2>

    //             <div class="inputDiv">
    //                 <label class="inputLabel" for="email">Email </label>
    //                 <input value={change.Email} onChange={(e) => setChange({ ...change, Email: e.target.value })} type="email" id="email" name="password" required />
    //             </div>
    //             <div class="inputDiv">
    //                 <label class="inputLabel" for="password">Old Password</label>
    //                 <input value={change.oldPassword} onChange={(e) => setChange({ ...change, oldPassword: e.target.value })} type="password" id="password" name="password" required />
    //             </div>

    //             <div class="inputDiv">
    //                 <label class="inputLabel" for="confirmPassword">New Password</label>
    //                 <input value={change.password} onChange={(e) => setChange({ ...change, password: e.target.value })} type="password" id="confirmPassword" name="confirmPassword" />
    //             </div>

    //             <div class="buttonWrapper">
    //                 <button style={{ backgroundColor: "#090892" }} type="submit" id="submitButton" onclick="validateSignupForm()" class="submitButton pure-button pure-button-primary">
    //                     <span>Continue</span>

    //                 </button>
    //             </div>

    //         </form>
    //     </div>
    //         </div >
