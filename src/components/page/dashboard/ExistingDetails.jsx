import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react';
import { BASE_URL, Base_Url } from '../../../http/config';
import { Modal, Form, Button } from 'react-bootstrap';
import { toast } from "react-toastify"
import './profile.css'
import { AuthContext } from "../../common/AuthProvider"
import { BsCloudUploadFill } from "react-icons/bs"
import { UserContext } from "../../common/UserContext";
import UserRoute from '../../routes/UserRoute';
import axiosInstance from '../../../store/axiosinstance';
import CreateWalletAccountWrap from '../createWalletAccount/CreateWalletAccountWrap';


function ExistingDetails({ profileImage, fullname, address, email, nextOfKins, phonenumber, dateOfbirth, selectedDocumentName }) {
    const [existingDetails, setExistingDetails] = useState({});
    const { setProfileName, setUserProfileImage, setProfileEmail } = useContext(UserContext);
    const Authstate = useContext(AuthContext);
    const [isSubmittingUpdate, setIsSubmittingUpdate] = useState(false)
    const [edit, setEdit] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [profileUpdate, setProfileUpdate] = useState([])
    const [imageURL, setImageURL] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [editimage, setEditImage] = useState(false)
    const inputFileRef = useRef(null)
    const fileInput = useRef(null)
    const userId = localStorage.getItem("userId")
    const [profile, setProfile] = useState(false)
    const userprofile = useRef({
        user_Id: "",
        fullname: "",
        emailAddress: "",
        phonenumber: "",
        nextOfKins: "",
        dateOfbirth: "",
        address: "",
        profileImage: ""
    })
    const closeModal = () => {
        setEdit(false)
    }
    const closeModall = () => {
        setEditImage(false)
    }

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        const fileSizeInKB = file.size / 1024;
        const maxFileSizeInKB = 100;

        if (fileSizeInKB > maxFileSizeInKB) {


            toast.error('File size exceeds the maximum allowed size (100 KB).');
            return;
        }
        setImageFile(file);

        if (file) {

            const extension = file.name.split(".").pop()
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                const base64string = reader.result.split(",")[1];
                const data = {
                    filebase64: base64string,
                    extension: extension,
                };

                try {
                    axiosInstance.post(`${Base_Url}/authentication/api/Account/FileUpload`, data)
                        .then(response => {
                            console.log(response.data.result.message)
                            setImageUrl(response.data.result.message)




                            if (response.data.result.isSuccess == true) {
                                toast.success('Profile image uploaded successfully')
                            } else {
                                toast.error('profile image upload failed')
                            }

                        })
                } catch (error) {
                    console.log(error)
                }
            }
        };
    }
    const handleSelectButtonClick = () => {
        inputFileRef.current.click()
    }
    useEffect(() => {
        if (imageFile) {
            setImageURL(URL.createObjectURL(imageFile))
        }
    }, [imageFile])
    const handleProfileEditModal = () => {
        setEdit(true)
    }

    useEffect(() => {
        console.log(selectedDocumentName)
        const user_Id = userId;
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`${BASE_URL}/ExistingDetails?User_Id=${user_Id}`);


                if (isMounted && response.data.length > 0) {
                    Authstate.setState((prevState) => ({
                        ...prevState,
                        firstName: response.data[0]?.fullname,

                    }));

                    setExistingDetails(response.data[0]);

                    if (response.data[0]?.profileImage) {
                        setImageUrl(response.data[0]?.profileImage);
                        setUserProfileImage(response.data[0]?.profileImage);
                    }

                    if (response.data[0]?.fullname) {
                        setProfileName(response.data[0]?.fullname);
                    }

                    if (response.data[0]?.emailAddress) {
                        setProfileEmail(response.data[0]?.emailAddress);
                    }

                    if (response.data.isSuccess === true) {
                        toast.success(response.data.message);
                    } else {
                        toast.error(response.data.message);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();


        return () => {
            isMounted = false;
        };
    }, [userId, setExistingDetails, setImageURL,]);

    async function handleProfileUpdate() {
        setIsSubmittingUpdate(true)

        const dataupdate = {
            user_Id: Number(userId),
            fullname: userprofile.current.fullname.value,
            emailAddress: userprofile.current.emailAddress.value,
            phonenumber: userprofile.current.phonenumber.value,
            nextOfKins: userprofile.current.nextOfKins.value,
            dateOfbirth: userprofile.current.dateOfbirth.value,
            address: userprofile.current.address.value,
            isCreatedBy: userprofile.current.fullname.value,
            profileImage: imageUrl,


        }
        console.log(dataupdate)

        try {
            const response = await axiosInstance.post(`${BASE_URL}/UpdateDetails`, dataupdate)
            console.log(response.data)

            console.log(response.data.isSuccess)
            if (response.data.isSuccess === true) {
                setProfileUpdate(response.data)


                toast.success('Profile updated successfully')
                window.location.reload()

            } else {
                toast.error('Profile update failed')

            }
        } catch (error) {

        } finally {
            setIsSubmittingUpdate(false)
            setEdit(false)
            setEditImage(false)

        }

    }
    return (
        <UserRoute>
            <Modal show={edit} onHide={closeModal} className="custom-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '20px', fontWeight: "bold", color: "#090892", textAlign: "center" }}>Personal Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="d-flex justify-content-center">

                            <img
                                style={{ width: "95px", height: "95px" }}
                                src={imageUrl}
                                className=" rounded-circle"
                                alt="preview"
                            />




                            <div className=" Profile-img-contain2   ">
                                <div >


                                    <input type="file" onChange={handleFileSelect} ref={inputFileRef} hidden />
                                    <div className="photo-icon2">
                                        <img onClick={handleSelectButtonClick} className=" w-100 h-100" src="./images/bg/photo.png" alt="" />
                                    </div>

                                </div>




                            </div>




                        </div>
                        <Form>
                            <Form.Group controlId="fullName">
                                <Form.Label style={{ fontSize: "15px", fontWeight: "500" }}>Full Name</Form.Label>
                                <Form.Control
                                    defaultValue={fullname}
                                    ref={ev => userprofile.current.fullname = ev}
                                    type="text" />
                            </Form.Group>

                            <Form.Group controlId="dateOfBirth">
                                <Form.Label style={{ fontSize: "15px", fontWeight: "500" }}>Date of Birth</Form.Label>
                                <Form.Control
                                    ref={ev => userprofile.current.dateOfbirth = ev}
                                    defaultValue={dateOfbirth} type="date" />
                            </Form.Group>

                            <Form.Group controlId="address">
                                <Form.Label style={{ fontSize: "15px", fontWeight: "500" }}>Address</Form.Label>
                                <Form.Control type="text"
                                    ref={ev => userprofile.current.address = ev}
                                    defaultValue={address} />
                            </Form.Group>

                            <Form.Group controlId="nextOfKinName">
                                <Form.Label style={{ fontSize: "15px", fontWeight: "500" }}>Next of Kin Name</Form.Label>
                                <Form.Control type="text"
                                    ref={ev => userprofile.current.nextOfKins = ev}

                                    defaultValue={nextOfKins} placeholder="Enter next of kin name" />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label style={{ fontSize: "15px", fontWeight: "500" }}>Email</Form.Label>
                                <Form.Control type="email"
                                    ref={ev => userprofile.current.emailAddress = ev}
                                    defaultValue={email} />
                            </Form.Group>

                            <Form.Group controlId="phoneNumber">
                                <Form.Label style={{ fontSize: "15px", fontWeight: "500" }}>Phone Number</Form.Label>
                                <Form.Control type="tel"
                                    ref={ev => userprofile.current.phonenumber = ev}

                                    defaultValue={phonenumber} />
                            </Form.Group>
                        </Form>
                    </div>

                    {/* ... (Product Information and Image sections remain unchanged) ... */}
                </Modal.Body>

                <Modal.Footer>
                    <Button

                        onClick={handleProfileUpdate}
                        className='btn-product font-weight-bolder'
                        style={{ backgroundColor: "#090892", fontWeight: "bold" }}
                    >
                        {isSubmittingUpdate ? "Processing...." : (
                            <>
                                <BsCloudUploadFill /> Upload
                            </>
                        )}
                    </Button>
                </Modal.Footer>
            </Modal>


            <div className="  tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">


                <div className=" row d-flex " >
                    <div className="col-lg-12  Profile-img-container">


                        <img
                            style={{ width: "95px", height: "95px" }}
                            src={imageUrl}
                            className="Profile-img-fluid rounded-circle"
                            alt="preview"
                        />

                        <div className=" Profile-img-contain    ">
                            <div >


                                <input type="file" onChange={handleFileSelect} ref={inputFileRef} hidden />
                                <div className="photo-icon">
                                    <img style={{ marginTop: "-20px" }} onClick={handleSelectButtonClick} className=" w-100 h-100" src="./images/bg/photo.png" alt="" />
                                </div>

                            </div>




                        </div>





                    </div>

                </div>


                <div className="row">

                    <div className="personal-modal mt-4  p-3 col-xl-12">
                        <div className="">
                            <div className=" ">
                                <div className="profile-tab">
                                    <div className="custom-tab-1">

                                        <div className="tab-content">


                                            {/* <div id="profile-settings" className={`tab-pane fade ${activeToggle === "Account Information" ? "active show" : ""}`}> */}
                                            <div className="pt-3">
                                                <div className="settings-form">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h4 className="personal"><b>Personal Information</b></h4>
                                                        </div>

                                                        <div className="d-flex gap-2">
                                                            <button style={{ borderRadius: "5px", backgroundColor: "darkblue", width: "33px", height: "30px" }} onClick={handleProfileEditModal}>✏</button>

                                                        </div>


                                                    </div>
                                                    <div className=' row mt-4'>

                                                        <div className="col-md-8 mt-2">
                                                            <label style={{ fontSize: "17px", fontWeight: "bold" }}>FullName</label>
                                                            <p style={{ fontFamily: "italics", fontSize: "18px" }}>{fullname}</p>

                                                        </div>






                                                        <div className="col-md-4 mt-3">
                                                            <label style={{ fontSize: "17px", fontWeight: "bold" }}>Date of Birth</label>
                                                            <p style={{ fontFamily: "italics", fontSize: "18px" }}>{dateOfbirth}</p>

                                                        </div>
                                                        {/* <div className="select-id col-md-6 mt-3">
                                                                <label>Select a valid means of Identificaton</label>
                                                                <select className='form-control border-2'
                                                                    name="ID" id="" value={selectedIdentification
                                                                    }
                                                                    onChange={handleIdentificationChange}>
                                                                    <option value="" >{selectedDocumentName ? selectedDocumentName : "select an option"}</option>
                                                                    {document && document.map((item, index) => (
                                                                        <option value={item.id} key={index}>
                                                                            {item.documentName}
                                                                        </option>
                                                                    ))}
                                                                </select>

                                                            </div> */}




                                                    </div>

                                                    <div className='row mt-4'>
                                                        <div className="col-md-8 mt-3">
                                                            <label style={{ fontSize: "17px", fontWeight: "bold" }}>Address</label>
                                                            <p style={{ fontFamily: "italics", fontSize: "18px" }}>{address}</p>

                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <label style={{ fontSize: "17px", fontWeight: "bold" }}>Selected ID</label>
                                                            <p style={{ fontFamily: "italics", fontSize: "18px" }}>{selectedDocumentName}</p>

                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-modal mt-4 p-3 col-xl-12">
                        <div className="">
                            <div className="">
                                <div className="profile-tag">
                                    <div className="custom-tab-1">

                                        <div className="tab-content">

                                            {/* <div id="profile-settings" className={`tab-pane fade ${activeToggle === "Account Information" ? "active show" : ""}`}> */}
                                            <div className="pt-3">
                                                <div className="settings-form">

                                                    <h4 className="personal fw-24"><b>Next of Kin</b> </h4>
                                                    <div className='mt-4'>
                                                        <div className="form-group col-md-12 mt-3">
                                                            <label style={{ fontSize: "17px", fontWeight: "bold" }}>Next of Kin's FullName</label>
                                                            <p style={{ fontFamily: "italics", fontSize: "18px" }}>{nextOfKins}</p>


                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-8 mt-3">
                                                                <label style={{ fontSize: "17px", fontWeight: "bold" }}>Email Address</label>
                                                                <p style={{ fontFamily: "italics", fontSize: "18px", }}>{email}</p>

                                                            </div>
                                                            <div className="col-md-4 mt-3">
                                                                <label style={{ fontSize: "17px", fontWeight: "bold" }}>Phone Number</label>
                                                                <p style={{ fontFamily: "italics", fontSize: "18px", }}>{phonenumber}</p>

                                                            </div>

                                                        </div>








                                                    </div>
                                                </div>

                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </UserRoute>
    )
}

export default ExistingDetails
