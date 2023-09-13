import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../LiveAuction.jsx/LiveAuction.css'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};




const Slider = () => {

    const [selectCategory, setSelectedCategory] = useState([])


    const fetchCategory = async () => {
        try {
            const response = await axios.get('http://gateway.peabux.com/auction/api/Category/GetAllCategory');
            setSelectedCategory(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    useEffect(() => {
        fetchCategory()
    })
    const categoryColors = ['purple', 'blue', 'green', 'red', 'gray'];

    const categoryImageMapping = [
        "./images/bg/download1.webp",
        "./images/bg/download2.webp",
        "./images/bg/download3.webp",
        "./images/bg/download4.webp",
        "./images/bg/download1.webp",
        "./images/bg/download4.webp",
    ];
    return (
        <main>
            <div className="contain-product   shadow  display-all bg-white ">


                <div className="product-imgg mt-4">
                    <img
                        alt="nc-imgs"
                        loading="lazy"
                        height="250"
                        decoding="async"
                        data-nimg="1"
                        className="img-object object-cover w-full h-full"
                        src='./images/bg/lapop2.jpg'
                        style={{ color: "transparent", zIndex: 1, borderRadius: "10px", width: "100%" }} // Set zIndex to 1 to ensure it's above the background
                    />
                </div>


                <div className="awesome-collections mb-5" >
                    <div>
                        <h1 className="category-name ">Awesome Collection</h1>
                        <p className="category-subname ">Scroll to view more categories.</p>

                    </div>
                    <Carousel
                        responsive={responsive}
                        autoPlay={false}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                        partialVisible={false}
                        dotListClass="custom-dot-list-style"
                    >
                        {selectCategory.map((item, index) => {
                            const imagePath = categoryImageMapping[index] || '';
                            const categoryColor = categoryColors[index % categoryColors.length];

                            return (
                                <div key={index} className={`category ${categoryColor}`}>
                                    <div style={{ padding: "0px" }} className="slidein" onClick={() => handleCategory(`${item.id}`)}>
                                        <img src={imagePath} alt="movie" />
                                    </div>
                                    <div className="d-flex gap-3 mt-3">
                                        <div style={{
                                            width: "30px", height: '30px',
                                            borderRadius: "100%",
                                            backgroundColor: categoryColor
                                        }}>

                                        </div>
                                        <div className="">
                                            <h4 >{item.categoryName}</h4>
                                        </div >


                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>

        </main>
    );
}

export default Slider;