import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { BsCloudUploadFill } from "react-icons/bs"
import axios from 'axios'
import { MdOutlinePreview } from "react-icons/md"
import { Modal, Button } from 'react-bootstrap';
import './Createproduct.css'
import { toast } from "react-toastify"
import { FaUpload } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import { AuthContext } from '../../common/AuthProvider'
import UserRoute from '../../routes/UserRoute'
import useProtectedApi from '../../../hooks/useProtectedApi'
import { UserProvider } from '../../common/UserContext';

function CreateProduct() {
    const Authstate = useContext(AuthContext)
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");


    const [showMessage, setShowMessage] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [uploadLink, setUploadLink] = useState([])
    const userId = localStorage.getItem("userId")
    const [categoryName, setCategoryName] = useState([])
    const [imagePreviews, setImagePreviews] = useState([]);

    const [category, setCategory] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileUrl, setFileUrl] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [product, setProduct] = useState({
        productName: "",
        categoryId: "",
        productPrice: "",
        description: "",
        productUrlJson: "",
        createdBy: "",
        productCurrency: "",
        countryCodePostingFrom: ""

    })
    useEffect(() => {
        console.log(showMessage);
    }, [showMessage]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://gateway.peabux.com/auction/api/Category/GetAllCategory');
                console.log(response.data)
                console.log(response.data.categoryName)
                setCategory(response.data);
                setCategoryName(response.data.categoryName)
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    const handleCategory = (id, name) => {
        setCategoryId(id);
        setCategoryName(name);
        console.log(name)
    };
    useEffect(() => {
        console.log(uploadLink);
    }, [uploadLink])

    const [file, setFile] = useState([])

    const fileInput = useRef(null)

    const MIN_IMAGES_ALLOWED = 4;
    const MAX_IMAGES_ALLOWED = 6;
    const MAX_IMAGE_SIZE_BYTES = 100 * 1024;
    const handleUpload = async (e) => {

        let uploaded = 0
        const files = Array.from(e.target.files);
        const base_url = 'http://gateway.peabux.com/authentication/api/Account/FileUpload';


        try {
            if (files.length < MIN_IMAGES_ALLOWED) {
                toast.error(`Please select at least ${MIN_IMAGES_ALLOWED} images.`);
                return;
            }

            if (files.length > MAX_IMAGES_ALLOWED) {
                toast.error(`You can only upload a maximum of ${MAX_IMAGES_ALLOWED} images.`);
                return;
            }

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                if (file.size > MAX_IMAGE_SIZE_BYTES) {
                    toast.error(`Image ${file.name} exceeds the maximum allowed size of 1MB.`);
                    continue;
                }
                const fileData = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        const base64String = reader.result.split(",")[1];
                        console.log(reader.result);
                        // const base64String = reader.result;
                        console.log(uploadLink);

                        const extension = file.name.split(".").pop();
                        const data = {
                            filebase64: base64String,
                            extension: extension,
                        };
                        resolve(data);
                    };
                    reader.onerror = (error) => {
                        reject(error);
                    };
                });
                setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, file.name]);

                const response = await axios.post(base_url, JSON.stringify(fileData), {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                setUploadLink((prevUploadLinkFiles) => [...prevUploadLinkFiles, response.data.result.message]);
                uploaded++
                const imagePreviewUrl = URL.createObjectURL(file);
                setImagePreviews((prevImagePreviews) => [...prevImagePreviews, imagePreviewUrl]);

                console.log(response.data);
                console.log(uploadLink)
            }


            if (uploaded > 0) {
                toast.success(`Successfully uploaded ${uploaded} image(s).`);
            }

        } catch (error) {
            console.log(error);
            toast.error('Images upload failed');
        }
    };


    const Base_url = 'http://gateway.peabux.com/auction/api/Product/PostDetails'
    const submitProduct = async () => {
        try {
            setUploading(true)
            const productPrice = parseFloat(product?.productPrice?.[0] || 0); // Convert to float
            const formattedProductPrice = productPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2, // Specify the minimum number of decimal places
                maximumFractionDigits: 2, // Specify the maximum number of decimal places
            });
            const data = {
                productName: product?.productName?.[0] || '',
                categoryId: Number(categoryId) || 0,
                productPrice: formattedProductPrice,
                description: product?.description?.[0] || '',
                productUrlJson: uploadLink.toString(),
                // productImage2: uploadLink[1] || '',
                productCurrency: "",
                countryCodePostingFrom: "",
                createdBy: userId,
            };

            console.log(data);


            const response = await axios.post(Base_url, data);

            console.log(response.data);



            if (response.data.isSuccess == true) {
                toast.success(response.data.message)
                setProduct(prevProduct => ({
                    ...prevProduct,
                    productName: "",
                    description: "",
                    productVat: "",
                    productPrice: "",
                    productImage: "",
                    productImage2: "",
                    categoryId: "",
                }));
                setMessage("Product is under review");
                setShowMessage(true);
                setSelectedFiles([])
                setImagePreviews([])

                setTimeout(() => {
                    setShowMessage(false);
                }, 5000);
            } else {
                toast.error(response.data.message)
                setSelectedFiles([])
            }

        } catch (error) {
            toast.error(error)
            console.log('Error submitting product:', error);
        } finally {
            setUploading(false)

        }
    };
    const handleModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }







    const handleFile = () => {
        fileInput.current.click()
    }
    const handleDelete = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    }
    const handleProduct = (event) => {
        setProduct({ ...product, [event.target.name]: [event.target.value] })
    }

    const base_url = "http://gateway.peabux.com/auction/api/Product/PostDetails"

    return (
        <UserProvider>
            <UserRoute>
                {showMessage ?
                    <div style={{ position: "fixed", top: "90px" }} className='w-100 py-4  bg-success text-center  card rounded shadow'>
                        <h5 className='text-white'>Product is under review. You will be notified when your product has been approved</h5>
                    </div> : null
                }
                <div className="product-contain ">



                    <div className='mt-4 pt-4 '>
                        <div className='ml-4'>

                            <h2>Create New Item</h2>
                            <h6 style={{ color: "#7c838f", fontSize: "14px" }}>You can set preferred display name, create your profile URL and manage other <br /> personal settings</h6>
                        </div>
                        <hr className='width-line' />
                        <div className='pt-4'>
                            <h3 >Image, Video, Audio, or 3D Model</h3>
                            <h6 style={{ color: "#7c838f", fontWeight: "400", fontSize: "14px" }}>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 kilobyte</h6>
                            <div className='border-product '>
                                <FaUpload onClick={handleFile} className='icon-upload mt-3' />
                                <input type="file" onChange={handleUpload} ref={fileInput} hidden multiple />
                                <div className='text-upload'>
                                    <h6 className='text-center pt-5 px-4'> <span className='text-primary'> Upload a file </span>
                                        or drag and drop</h6>
                                    <h6 style={{ color: "#7c838f", fontSize: "14px" }} className='text-center'>PNG, JPG, GIF up to 100kilobyte</h6>





                                </div>

                            </div>
                            <div >
                                {selectedFiles.length > 0 && (
                                    <div >

                                        <ul className='d-flex gap-2'>
                                            {selectedFiles.map((fileName, index) => (
                                                <li className='product-border mt-2 pl-2' key={index}>{fileName} <MdCancel className='cancel' onClick={() => handleDelete(index)} /></li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='pt-4'>

                            <div>
                                <h6>Product Name</h6>
                                <input type="text" value={product.productName} onChange={handleProduct} name='productName' className='form-product p-2 rounded-3 border border-1' placeholder='Product Name' />
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h6>Description</h6>
                            <div>
                                <textarea value={product.description}
                                    className='description rounded-3 border border-1'
                                    name="description" onChange={handleProduct}
                                    id="" cols="30" rows="10">

                                </textarea>

                            </div>
                        </div>
                        <hr className='width-line' />
                    </div>

                    <div className=' properties pt-5 '>
                        <div>
                            <h6>Product Price</h6>
                            <input type="text" onChange={handleProduct} name='productPrice' value={product.productPrice} className='form-subproduct p-2 border border-1' placeholder='₦' />

                        </div>

                        <div>
                            <h6>Category</h6>
                            <select
                                className='form-subproduct p-2 border border-1'
                                value={category ? category.id : ''}
                                onChange={(e) => handleCategory(e.target.value, e.target.options[e.target.selectedIndex].text)}
                            >
                                {!category.id && <option value="">Select a category</option>}
                                {category.map((item, index) => (
                                    <option value={item.id} key={index}>
                                        {item.categoryName}
                                    </option>
                                ))}
                            </select>



                        </div>
                    </div>



                    <div className='div-btn '>

                        <button onClick={handleModal} className='btn-product1'> <MdOutlinePreview />Preview items</button>
                    </div>
                    <Modal show={showModal} onHide={closeModal} className="custom-modal" centered>
                        <Modal.Header closeButton>
                            <Modal.Title style={{ fontSize: '20px', textAlign: "center" }}>Preview Items</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <table class="table table-hover">
                                <thead>
                                    <tr>

                                        <th scope='row'>Product name</th>
                                        <th>Price</th>
                                        {/* <th>Product vat</th> */}
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>{product.productName}</td>
                                        <td>{Number(product.productPrice).toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        {/* <td>{product.productVat}</td> */}
                                        <td>{categoryName}
                                        </td>
                                    </tr>




                                </tbody>

                            </table>
                            <h6 className='mt-4'>Product image / description</h6>
                            <div className="image-preview-container">
                                {imagePreviews.map((previewUrl, index) => (
                                    <img key={index} src={previewUrl} alt={`Image ${index + 1}`} className="image-preview" />
                                ))}
                            </div>
                            <h6>Description</h6>
                            <p>{product.description}</p>

                        </Modal.Body>

                        <Modal.Footer>
                            <button
                                disabled={uploadLink.length < 2 ? true : false}
                                onClick={submitProduct}
                                className='btn-product'
                            >
                                {uploading ? "Processing...." : (
                                    <>
                                        <BsCloudUploadFill /> Upload
                                    </>
                                )}
                            </button>
                        </Modal.Footer>






                    </Modal>






                </div>
            </UserRoute>
        </UserProvider>
    )
}

export default CreateProduct
