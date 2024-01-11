import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import Swal from 'sweetalert2'

import { useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google'


import { useHistory } from 'react-router-dom'

import axiosInstance from '../../../store/axiosinstance'
import { AuthContext } from '../../common/AuthProvider'
import { useGoogleLogin, googleLogout } from '@react-oauth/google'
import { Base_Url } from '../../../http/config'
import { toast } from 'react-toastify'

function LoginWrap() {
  const Authstate = useContext(AuthContext)
  const history = useHistory()
  const [openEye, setOpenEye] = useState();
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [erroremail, setErrorEmail] = useState("")
  const [errorpasssword, setErrorPassword] = useState("")
  const [sucess, setSucess] = useState("")
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);


  const handleEyeIcon = () => {
    if (openEye === false || openEye === 0) {
      setOpenEye(1)
    } else {
      setOpenEye(false)
    }

  }

  // const protectedApi = useProtectedApi()
  const handleChanges = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const submitAll = async (event) => {
    if (values.email === "" || values.password === "") {
      toast.error("Please fill in your details")
      setErrorEmail("Enter your email")
      setErrorPassword("Enter your password")
      return
    }
    event.preventDefault()




    let data = {

      email: values.email,
      password: values.password,

    }


    try {
      setIsLoading(true)
      const response = await axiosInstance.post(`${Base_Url}/authentication/api/Account`, data)
      console.log(response)
      console.log(response.data.user.firstName)
      if (String(response.data.message).startsWith("Success")) {
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

        localStorage.setItem("access_token", response.data.jwtToken)
        localStorage.setItem("refresh_token", response.data.refreshToken.tokenString)
        localStorage.setItem("userId", JSON.stringify(response.data.user.userId))
        localStorage.setItem("uerdetails", JSON.stringify(Authstate.setState))
        console.log(response.data.email)
        Authstate.setState({
          email: response.data.email,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          message: response.data.message,
          token: response.data.refreshToken.tokenString

        })

        values.email = ""
        values.password = ""
        history.push("/dashboard")

      }
      else {
        Swal.fire({
          text: response.data.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2500,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })


        values.email = ""
        values.password = ""
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }



  }



  return (
    <>
      <div class="Login-contain px-0 py-0">

        <div class="row Login-content">
          {!isLoading ? "" :
            <nav className=' Login-loading'>
              <img className=' Login-spin-nav' src="./images/bg/elipsing.svg" alt="" />

            </nav>}
          <div className=' Login-div-headlogo'>
            <img className=" Login-head-logo4"
              alt=""
              src={process.env.PUBLIC_URL + "/images/bg/peabux-logo.png"}
            />
          </div>

          <div class="  Login-div-image col-md-6 mb-3">

            <img className=' Login-image-resize' src="./images/bg/auction-bg.png" alt="" />
          </div>

          <div class="col-md-6 ">
            <h4 className=' Login-login-message'>WELCOME BACK</h4>

            <h5 class="signin-text mb-3 "> Login to continue</h5>
            <form onSubmit={submitAll}>
              <div class="form-group d-flex align-items-center">
                <span class=" Login-icon-login fa fa-envelope"></span>
                <input style={{ padding: "9px", textIndent: "20px" }} value={values.email} onChange={handleChanges} type="email" placeholder='Enter your email' name="email" class="form-control shadow-sm" />



              </div>
              <div className='error-message'>
                <p className=' text-danger' >{erroremail}</p>
              </div>
              <div class="form-group mt-3 d-flex align-items-center ">
                <i class=" Login-icon-login fa fa-lock "></i>

                <input style={{ padding: "9px", textIndent: "20px" }} value={values.password} onChange={handleChanges} type="password" placeholder='Enter your password' name="password" class="form-control shadow-sm" />

              </div>
              <div className='error-message2 '>
                <p className='text-danger' >{errorpasssword}</p>
              </div>
              <div class="Login-div-flex form-group form-check mt-3 d-flex">
                <div>
                  <input type="checkbox" name="checkbox" class="form-check-input" id="checkbox" />
                  <label style={{ fontSize: "14px" }} class=" form-check-label" for="checkbox">Remember Me</label>
                </div>
                <div>
                  <Link to="./forgotpassword"> <p style={{ fontSize: "14px", marginTop: "2px" }} className='text-password pl-5 '>Forgot password?</p></Link>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <button onClick={submitAll} style={{ backgroundColor: "#090892" }} class="btn-clas mt-2 h-35  w-100 ">Login</button>
              </div>
              <span class=" Login-login-user text-center mt-3">Don't Have an Account? Click Here to <Link to="./signup"><a className='a-link' href="#">SignUp</a></Link></span>

              <div class="d-flex justify-content-center col-md-12">
                {/* <button className=' Login-login-with-google-btn' onClick={() => login()}>Sign in with Google </button> */}
              </div>
            </form>

          </div>

        </div>
      </div>


    </>
  )
}

export default LoginWrap
