import axios from 'axios'



// http://localhost:3000/api

 //http://localhost:3000/api
 


 const api = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_URL,
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true
 })

 export default api