import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../store/axiosinstance'
import axios from 'axios'
import { Base_Url } from '../../../http/config'
import { AuthContext } from '../../common/AuthProvider'
import { useGoogleLogin, googleLogout } from '@react-oauth/google'
import { useEffect } from 'react'
import Validation from '../../common/Validation';
import Swal from 'sweetalert2'
import '../signUp/signup.css'
import { toast } from 'react-toastify'


import { useHistory } from 'react-router-dom'



function SignUpWrap() {
  const [openEye, setOpenEye] = useState();
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false)
  const [profile, setProfile] = useState([]);
  const [errordisplay, setErrorDisplay] = useState()

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",

  })
  const [userDetails, setUserDetails] = useState({
    Email: "",
    OTP: ""

  })
  const history = useHistory()
  // const handleEyeIcon = () => {
  //   if (openEye === false || openEye === 0) {
  //     setOpenEye(1)
  //   } else {
  //     setOpenEye(false)
  //   }
  // }
  const [errors, setErrors] = useState({})
  const [errormessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)






  const handleChange = (ev) => {
    setValues({ ...values, [ev.target.name]: ev.target.value })


  }
  const handleChangeOtp = (ev) => {
    setUserDetails({ ...userDetails, [ev.target.name]: ev.target.value })


  }
  const handleSubmit = async (event) => {
    if (values.firstName === "" || values.lastName === "" || values.email === "" || values.password === "" || values.confirmPassword === "") {
      toast.error("Please fill in your details")
      return
    }
    event.preventDefault()
    setErrors(Validation(values))
    let data = {
      email: values.email,

    }
    console.log(data)

    try {
      setIsLoading(true)
      const response = await axiosInstance.post(`${Base_Url}/authentication/api/Account/GenerateOtp`, data)
      console.log(response.data)
      console.log(response.data.result.message)


      if (response.data.isSuccess === false) {
        Swal.fire({
          text: response.data.result.message,
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

        values.email = ""
        values.confirmPassword = ""
        values.password = ""

      } else {
        setShow(true)
        Swal.fire({
          text: response.data.result.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2500,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }

        })



        setIsLoading(false)

      }

    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)

    }
  }

  const handleSignupSubmit = async (event) => {


    setErrors(Validation(values))
    let data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,

    }
    console.log(data)

    try {
      setIsLoading(true)
      const response = await axiosInstance.post(`${Base_Url}/authentication/api/Account/Register`, data)
      console.log(response.data)
      console.log(response.data.message)


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

        values.email = ""
        values.confirmPassword = ""
        values.password = ""

      } else {
        Swal.fire({
          text: response.data.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2500,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }

        })

        setIsLoading(false)
        history.push("/login")


      }

    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)


    }
  }
  const handleSignMessage = async () => {
    const data = {
      Email: values.email,
      Channel: "Auction"
    }
    try {
      const response = await axiosInstance.post(`${Base_Url}/authentication/api/Account/WelcomeMessage`, data)
      console.log(response.data)
      if (response.data.result.isSuccess === true) {
        Swal.fire({
          text: response.data.result.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2500,
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
      if (error.response && error.response.data && error.response.data.result.isSuccess === false) {
        Swal.fire({
          text: error.response.data.result.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2500,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      }
    }
  }


  const handleVerification = async () => {

    if (userDetails.OTP === "") {
      toast.error("Please enter your OTP")
      return
    }
    const data = {
      Email: values.email,
      OTP: userDetails.OTP
    }
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(`${Base_Url}/authentication/api/Account/ValidateOTP`, data)
      console.log(response.data)
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
        history.push("/signup")


      } else {
        Swal.fire({
          text: response.data.result.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2500,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })


        await handleSignupSubmit();
        await handleSignMessage();
      }

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }


  }

  return (
    <>
      <div className="form-bg">
        {!show && (
          <div class="Signup-contain">
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
                  <h3 class="Signup-title mt-3">Create an account</h3>
                  <div className=' form-horizontal '>
                    <div class="form-group  mt-3">
                      <label className='labelall' htmlFor="">Email</label>
                      <span class="Signup-icon-login fa fa-envelope"></span>
                      <input value={values.email} name="email" onChange={handleChange} placeholder='Email' style={{ padding: "25px" }} class="formcontrol" type="email" />
                    </div>
                    {/* {errors.password && <p className=' text-danger text-xs'>{errors.password}</p>} */}
                    <div class="form-group mt-3">
                      <label className='labelall' htmlFor="">Firstname</label>

                      <input value={values.firstName} name="firstName" onChange={handleChange} placeholder='FirstName' style={{ padding: "25px", marginRight: "120px" }} class="formcontrol" type="text" />
                    </div>
                    <div class="form-group mt-3">
                      <label className='labelall' htmlFor="">Lastname</label>

                      <input value={values.lastName} name="lastName" onChange={handleChange} placeholder='LastName' style={{ padding: "25px", marginRight: "120px" }} class="formcontrol" type="text" />
                    </div>

                    <div class="form-group mt-3">
                      <label className='labelall' htmlFor="">Password</label>
                      <i class="Signup-icon-login fa fa-lock "></i>
                      <input value={values.password} name="password" onChange={handleChange} placeholder='Password' style={{ padding: "25px", marginRight: "120px" }} class="formcontrol" type="password" />
                    </div>
                    <div className='form-group mt-3' >
                      <label class='labelall' htmlFor="">Confirmpassword</label>
                      <i class="Signup-icon-login fa fa-lock "></i>
                      <input value={values.confirmPassword} name="confirmPassword" onChange={handleChange} placeholder='Confirm password' style={{ padding: "25px" }} class="formcontrol" type="password" />
                    </div>
                    {/* {errors.confirmPassword && <p className=' text-danger text-xs'>{errors.confirmPassword}</p>} */}



                    <button onClick={handleSubmit} class="mt-3 h-35 btn btn-primary w-100 ">Create Account</button>
                    <span class="user-login text-center">Already Have an Account? Click Here to <Link to="./login"><a href="#" className='login-link'>Login</a></Link></span>

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
        )}
        {show && (

          <div className='card border border-0 shadow' style={{ width: "35%", height: "30vh", borderRadius: "0px", backgroundColor: "white", padding: "20px", textAlign: "center" }}>
            {!isLoading ? "" :
              <nav className='Signup-loading'>
                <img className='Signup-spin-nav' src="./images/bg/elipsing.svg" alt="" />

              </nav>}
            <div className='form-horizontal'>
              <div class="form-group mt-2">
                <h5 className=''>OTP VERIFICATION</h5>
                <input
                  value={userDetails.OTP}
                  name="OTP"
                  onChange={handleChangeOtp}
                  placeholder='Enter OTP Number'
                  style={{ padding: "20px", width: "100%", borderRadius: "5px" }}
                  class="formcontrol mt-2 form-control-lg"
                  type="text"
                />
              </div>
            </div>
            <button
              onClick={handleVerification}
              disabled={isLoading}
              class="mt-4 btn btn-primary"
              style={{
                background: "#090892", color: "#fff",
                padding: "10px 20px", borderRadius: "5px", border: "none"
              }}>
              {isLoading ? 'Verifying...' : 'Verify OTP'}

            </button>
          </div>

        )}
      </div>


    </>

  )
}

export default SignUpWrap





