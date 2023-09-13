import axios from "axios"

const http = axios.create({
    baseURL: 'http://gateway.peabux.com/auction/api/Profile',
    headers: {'content-type' : 'application/json'}
})


  
export default http