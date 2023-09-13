import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { AuthContext } from '../../common/AuthProvider'
import { useGoogleLogin, googleLogout } from '@react-oauth/google'
import { useEffect } from 'react'
import Validation from '../../common/Validation';
import Swal from 'sweetalert2'
import '../signUp/signup.css'

import { useHistory } from 'react-router-dom'



function SignUpWrap() {
  const [openEye, setOpenEye] = useState();
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [errordisplay, setErrorDisplay] = useState()
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",

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


  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });
  useEffect(
    () => {
      if (user) {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
          .then((res) => {
            setProfile(res.data);
            Swal.fire({
              text: "Signup successful",
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
            history.push("./dashboard")

            console.log(res.data)
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );


  const handleChange = (ev) => {
    setValues({ ...values, [ev.target.name]: ev.target.value })


  }
  const baseurl = 'http://gateway.peabux.com/authentication/api/Account/Register'
  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrors(Validation(values))



    let data = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }
    console.log(data)

    try {
      setIsLoading(true)
      const response = await axios.post(baseurl, data)
      console.log(response.data)

      if (values.fullname === "" || values.email === "" || values.password === "" || values.confirmPassword === "") {
        return
      }
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
        values.fullname = ""
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
        history.push("/login")
        values.fullname = ""
        values.email = ""
        values.confirmPassword = ""
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
      <div className="form-bg">
        <div class="Signup-contain">
          <div class="row">
            <div class="">
              <div class="Signup-form-container shadow-sm">
                {!isLoading ? "" :
                  <nav className='Signup-loading'>
                    <img className='Signup-spin-nav' src="./images/bg/elipsing.svg" alt="" />

                  </nav>}
                {/* <h1 className={[styles.jdjdjd, 'kdfkfkk']}></h1> */}
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
      </div>


    </>
  )
}

export default SignUpWrap





