// import axiosInstance from "./axiosInstance";

import axios from "axios";


const fetchCategory = async () => {
    try {
        const response = await axios.get(`http://testgateway.peabux.com/auction/api/Category/GetAllCategory`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Category:', error);
        throw error;
    }
};

const api = {
    fetchCategory,
  
    // Add other API endpoints and corresponding methods as needed
};
export default api;