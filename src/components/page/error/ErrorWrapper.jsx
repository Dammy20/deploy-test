import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import axiosInstance from "../../../store/axiosinstance";
import { useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import './error.css'




function ErrorWrapper() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const history = useHistory()

  const base_url = 'http://testgateway.peabux.com/authentication/api/Account/ResetPassword'

  const handleEmail = async (event) => {
    event.preventDefault()
    try {
      setIsLoading(true)
      const response = await axiosInstance.post(base_url, { email })
      console.log(response.data.result.isSuccess)

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
        email = ""
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
        history.push("/resetpassword")


      }

    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <div class="Forget-contain">
        <div class="row Forget-content">
          {!isLoading ? "" :
            <nav className='Forget-loading'>
              <img className='Forget-spin-nav' src="./images/bg/elipsing.svg" alt="" />

            </nav>}
          <div>
            <img className="Forget-head-logo8"
              alt=""
              src={process.env.PUBLIC_URL + "/images/bg/peabux-logo.png"}
            />
          </div>

          <div className="Forget-image-dis col-md-6 mb-3">

            <img style={{ width: "350px" }} className='image-resize' src="./images/bg/forget.png" alt="" />
          </div>
          <div class="Forget-image-text col-md-6 mt-4 ">
            <h4 className='Forget-welcome-login'>Forgot Your Password </h4>



            <form onSubmit={handleEmail}>
              <div style={{ marginTop: "20px", }} class="form-group d-flex align-items-center ">
                <span class="Forget-icon-login fa fa-envelope"></span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: "10px", textIndent: "20px" }} type="email" placeholder='Enter your email' name="email" class="form-control shadow-sm" />
              </div>
              <div className="Forget-submit-form">
                <button style={{ backgroundColor: "#090892" }} class=" h-35 mt-4 btn-submit w-100 ">Submit</button>

              </div>

              <div className="Forget-details  ">

                <p>Login</p>
              </div>
              {/* <button class=" mt-4 btn-class">Submit</button> */}

            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default ErrorWrapper;
{/* <div className="body-div">
  <div class="card text-center" style={{ width: "450px" }}>
    <div class="card-header h5 text-white" style={{ backgroundColor: "#090892" }}>Password Reset</div>
    <div class="card-body px-5">
      <p class="card-text py-2">
        Enter your email address and we'll send you an email with instructions to reset your password.
      </p>
      <div class="form-outline">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="typeEmail" class="form-control my-3" placeholder="Enter your email" />

      </div>
      <button onClick={handleEmail} class="btn btn-primary w-100 mt-4" style={{ backgroundColor: "#090892" }}>Reset password</button>

      <div class="d-flex justify-content-between mt-4">
        <Link to="/login"> <p style={{ color: "#090892" }}>Login</p></Link>
        <Link to="/signup"><p style={{ color: "#090892" }}>Register</p></Link>
      </div>
    </div>
  </div>
</div> */}
