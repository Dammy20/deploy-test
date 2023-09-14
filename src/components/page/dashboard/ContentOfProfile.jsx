import { useContext, useState } from "react"
import axios from "axios"
import { Modal, Button } from 'react-bootstrap';
import { useRef } from "react"
import { toast } from "react-toastify"
import { BASE_URL, base_Url } from "../../../http/config"
import { AuthContext } from "../../common/AuthProvider"
import useProtectedApi from "../../../hooks/useProtectedApi"
import { useEffect } from "react"
import "./profile.css"
import { UserContext } from "../../common/UserContext";
import UserRoute from "../../routes/UserRoute";



function ContentOfProfile() {
    const Authstate = useContext(AuthContext)
    const [editMode, setEditMode] = useState(false);
    const [document, setDocument] = useState([])


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitUpdate, setIsSubmittingUpdate] = useState(false);
    const [message, setmessage] = useState("")
    const [imageUrl, setImageUrl] = useState(null)
    const [existingDetails, setExistingDetails] = useState({});
    const userId = localStorage.getItem("userId")
    const [documentId, setDocumentId] = useState("")

    const [imageFile, setImageFile] = useState(null)
    const [image, setImage] = useState({ file: null, extension: '' })
    const [imageURL, setImageURL] = useState(null)
    const inputFileRef = useRef(null)
    const fileInput = useRef(null)
    // const [selectedDocumentDetails, setSelectedDocumentDetails] = useState(null);
    const [documentDetails, selectedDocumentDetails] = useState([])


    const { setProfileName, setUserProfileImage, setProfileEmail } = useContext(UserContext);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedIdentification, setSelectedIdentification] = useState("");
    const [selectedDocumentName, setSelectedDocumentName] = useState("");


    const ProtectedApi = useProtectedApi()

    const [userid, setUserId] = useState("")
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

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
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
                const base_url = 'http://gateway.peabux.com/authentication/api/Account/FileUpload'
                try {
                    axios.post(base_url, data)
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

    async function handleSubmitProfile(event) {
        setIsSubmitting(true);
        if (!selectedIdentification) {
            alert('Please select a valid means of identification.');
            setIsSubmitting(false);
            return;
        }
        if (!userprofile.current.emailAddress.value.trim() ||
            // !userprofile.current.fullname.value.trim() ||
            !userprofile.current.phonenumber.value.trim() ||
            !userprofile.current.nextOfKins.value.trim() ||
            !userprofile.current.dateOfbirth.value.trim() ||
            !userprofile.current.address.value.trim()) {
            toast.error("Please all fields are required")
            return
        }

        const data = {
            user_Id: userId,
            fullname: userprofile.current.fullname.value,
            emailAddress: userprofile.current.emailAddress.value,
            phonenumber: userprofile.current.phonenumber.value,
            nextOfKins: userprofile.current.nextOfKins.value,
            dateOfbirth: userprofile.current.dateOfbirth.value,
            address: userprofile.current.address.value,
            isCreatedBy: Authstate.state.fullname,
            profileImage: imageUrl,
            isDeleted: false

        }

        console.log(data)
        console.log(userId)

        try {
            const response = await ProtectedApi.post(`${BASE_URL}/PostDetails`, data)
            console.log(response)
            console.log(response.data.id)
            setUserId(response.data)
            if (response.data.isSuccess == true) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }

            setEditMode(false)

        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false);
        }
    }


    useEffect(() => {
        const user_Id = userId;
        console.log(userId);

        ProtectedApi.get(`${BASE_URL}/ExistingDetails?User_Id=${user_Id}`)
            .then(response => {
                console.log(response.data);
                if (response.data.length > 0) {
                    setExistingDetails(response.data[0]);
                    if (response.data[0].profileImage) {
                        setImageURL(response.data[0].profileImage);
                        setUserProfileImage(response.data[0].profileImage);



                    }
                    if (response.data[0].fullname) {
                        setProfileName(response.data[0].fullname);

                    }
                    if (response.data[0].emailAddress) {
                        setProfileEmail(response.data[0].emailAddress);

                    }



                }


                if (response.data.isSuccess === true) {
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [setUserProfileImage, setProfileName, setProfileEmail]);














    const handleProfileEdit = () => {
        setEditMode(true)
    }

    const handleSelectButtonClick = () => {
        inputFileRef.current.click()
    }
    useEffect(() => {
        if (imageFile) {
            setImageURL(URL.createObjectURL(imageFile))
        }
    }, [imageFile])
    const base_url = 'http://gateway.peabux.com/authentication/api/Account/FileUpload'
    const handleFile = () => {
        const file = fileInput.current.files[0]
        const extension = file.name.split(".").pop();

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const base64string = reader.result.split(",")[1];
            const data = {
                filebase64: base64string,
                extension: extension,
            };
            try {
                axios.post(base_url, data)
                    .then(response => {
                        console.log(response.data.result.message)
                        // setDocument(response.data.result.message)
                        console.log(document)
                        if (response.data.result.isSuccess == true) {
                            toast.success('file uploaded successfully')

                        } else {
                            toast.error('profile image upload failed')
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
    useEffect(() => {
        getall()
    }, [])

    const getall = async () => {
        const response = await axios.get(`${base_Url}/api/DocumentType/GetAll`)
        console.log(response.data)
        if (response.data) {
            setDocument(response.data)
        }
    }
    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await axios.get(
                    `http://gateway.peabux.com/auction/api/DocumentType/ExistingDetails?Id=${selectedIdentification}`
                );

                const documentDetails = response.data[0];
                if (documentDetails) {
                    const documentName = documentDetails.documentName;
                    setSelectedDocumentName(documentName);
                    sessionStorage.setItem('selectedDocumentName', documentName);
                }
            } catch (error) {
                console.log(error);
            }
        };


        if (selectedIdentification) {
            fetchDocument();
        }
    }, [selectedIdentification]);
    useEffect(() => {

        const storedDocumentName = sessionStorage.getItem('selectedDocumentName');
        if (storedDocumentName) {
            setSelectedDocumentName(storedDocumentName);
        }
    }, []);
    const handleIdentificationChange = async (event) => {
        const selectedDocumentId = event.target.value;
        setSelectedIdentification(selectedDocumentId);
    };



    // const handleIdentificationChange = (id) => {
    //     setDocumentId(id)
    // }

    async function handleProfileUpdate() {
        setIsSubmittingUpdate(true)

        const dataupdate = {
            user_Id: userId,
            fullname: userprofile.current.emailAddress.value,
            emailAddress: userprofile.current.emailAddress.value,
            phonenumber: userprofile.current.phonenumber.value,
            nextOfKins: userprofile.current.nextOfKins.value,
            dateOfbirth: userprofile.current.dateOfbirth.value,
            address: userprofile.current.address.value,
            isCreatedBy: existingDetails.fullname,
            profileImage: imageUrl,


        }
        console.log(dataupdate)
        try {
            const response = await axios.post(`${BASE_URL}/UpdateDetails`, dataupdate)
            console.log(response.data)
            console.log(response.data.isSuccess)
            if (response.data.isSuccess === true) {
                toast.success('Profile updated successfully')


            } else {
                toast.error('Profile update failed')
                setIsSubmittingUpdate(false)
            }
        } catch (error) {

        } finally {
            setIsSubmittingUpdate(false)
        }

    }
    const [openEye, setOpenEye] = useState();
    const handleEyeIcon = () => {

        if (openEye === false || openEye === 0) {
            setOpenEye(1)
        } else {
            setOpenEye(false)
        }
    }
    return (
        <>
            <UserRoute>
                <div className="  tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">


                    <div className=" row " >
                        <div className="col-lg-12 Profile-img-container">
                            {imageURL ? (
                                <img
                                    style={{ width: "95px", height: "95px" }}
                                    src={imageURL}
                                    className="Profile-img-fluid rounded-circle"
                                    alt="preview"
                                />
                            ) : existingDetails.profileImage ? (
                                <img
                                    style={{ width: "95px", height: "95px" }}
                                    src={existingDetails.profileImage}
                                    className="Profile-img-fluid rounded-circle"
                                    alt="preview"
                                />

                            ) : (
                                <img
                                    style={{ width: "90px" }}
                                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                    className="Profile-img-fluid rounded-circle"
                                    alt="profile"
                                />
                            )}
                            <div className=" Profile-img-contain    ">
                                <div >


                                    <input type="file" onChange={handleFileSelect} ref={inputFileRef} hidden />
                                    <div className="photo-icon">
                                        <img style={{ marginTop: "-20px" }} onClick={handleSelectButtonClick} className=" w-100 h-100" src="./images/bg/photo.png" alt="" />
                                    </div>

                                </div>

                                {/* <div class="row">
                                    <div class="col-sm-6">

                                        <div style={{}} class="Profile-profile-details ">

                                            <h5 className="email" > {existingDetails.fullname || Authstate.state.fullname}</h5>
                                            <p className="fullname"> {existingDetails.emailAddress || Authstate.state.email}</p>

                                        </div>
                                    </div>

                                </div> */}




                            </div>




                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                        </div>
                        <div className="col-xl-12">
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
                                                                <button style={{ borderRadius: "5px", backgroundColor: "darkblue", width: "33px", height: "30px" }} onClick={handleProfileEdit}>✏</button>
                                                                {/* <button onClick={confirmDelete}>🗑</button> */}
                                                            </div>


                                                        </div>

                                                        <div className='mt-4'>
                                                            <div className="col-md-12 mt-3">
                                                                <label>Address</label>
                                                                <input ref={ev => userprofile.current.address = ev}
                                                                    type="text"
                                                                    name="Address"
                                                                    className="form-control border-2"
                                                                    defaultValue={existingDetails.address}
                                                                    required
                                                                    readOnly={!editMode && !!existingDetails.address}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className='mt-4'>


                                                            <div className="col-md-12 mt-3">
                                                                <label>Fullname</label>
                                                                <input ref={ev => userprofile.current.fullname = ev}
                                                                    type="text"
                                                                    name="fullname"
                                                                    className="form-control border-2"
                                                                    defaultValue={existingDetails.fullname}
                                                                    required
                                                                    readOnly={!editMode && !!existingDetails.fullname}
                                                                />
                                                            </div>
                                                            <div className="row">

                                                                <div className="col-md-6 mt-3">
                                                                    <label>Date of Birth</label>
                                                                    <input ref={ev => userprofile.current.dateOfbirth = ev}
                                                                        type="date"
                                                                        name="dateOfBirth"
                                                                        className="form-control border-2"
                                                                        defaultValue={existingDetails.dateOfbirth}
                                                                        required
                                                                        readOnly={!editMode && !!existingDetails.dateOfbirth}
                                                                    />
                                                                </div>
                                                                <div className="select-id col-md-6 mt-3">
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
                                                                    {/* <p>Selected Document Name: {selectedDocumentName}</p> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">

                                                                <div className="col-md-12 mt-3">
                                                                    <label>Upload valid means of Identification</label>
                                                                    <input type="file" onChange={handleFile} ref={fileInput} name="Id" className="form-control border-2" />
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
                        <div className="col-xl-12">
                            <div className="">
                                <div className="">
                                    <div className="profile-tag">
                                        <div className="custom-tab-1">

                                            <div className="tab-content">

                                                {/* <div id="profile-settings" className={`tab-pane fade ${activeToggle === "Account Information" ? "active show" : ""}`}> */}
                                                <div className="pt-3">
                                                    <div className="settings-form">

                                                        <h4 className="personal fw-24"><b>Next of Kin</b> <span> (Must be more than 18years)</span></h4>
                                                        <div className='mt-4'>
                                                            <div className="form-group col-md-12 mt-3">
                                                                <label>Full Name</label>
                                                                <input ref={ev => userprofile.current.nextOfKins = ev}
                                                                    type="text"
                                                                    placeholder="Enter Name"
                                                                    className="form-control border-2"
                                                                    defaultValue={existingDetails.nextOfKins}
                                                                    name="nextOfKins"
                                                                    readOnly={!editMode && !!existingDetails.nextOfKins}


                                                                    required
                                                                />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 mt-3">
                                                                    <label>Email Address</label>
                                                                    <input ref={ev => userprofile.current.emailAddress = ev}
                                                                        type="email"
                                                                        defaultValue={existingDetails.emailAddress}
                                                                        name="emailAdress"

                                                                        readOnly={!editMode && !!existingDetails.emailAddress}
                                                                        className="form-control border-2"
                                                                        required

                                                                    />
                                                                </div>
                                                                <div className="col-md-6 mt-3">
                                                                    <label>Phone Number</label>
                                                                    <input type="tel" ref={ev => userprofile.current.phonenumber = ev}
                                                                        placeholder="Enter Phone Number"
                                                                        className="form-control border-2"
                                                                        defaultValue={existingDetails.phonenumber}
                                                                        readOnly={!editMode && !!existingDetails.phonenumber}
                                                                        name="phonenumber"
                                                                        required



                                                                    />
                                                                </div>

                                                            </div>


                                                            {existingDetails.fullname || existingDetails.address ? (
                                                                <button
                                                                    onClick={handleProfileUpdate}
                                                                    className="btn-profile rounded-sm mt-4"
                                                                    type="submit"
                                                                >
                                                                    {isSubmitUpdate ? 'Processing...' : 'Update'}
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    onClick={handleSubmitProfile}
                                                                    className="btn-profile rounded-sm mt-4"
                                                                    type="submit"
                                                                >

                                                                    {isSubmitting ? 'Processing...' : 'Submit'}
                                                                </button>
                                                            )}





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
            {/* </form> */}
        </>
    )
}


export default ContentOfProfile