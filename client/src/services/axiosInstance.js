import axios from 'axios';
const baseURL = `${process.env.REACT_APP_BASE_URL}`
const headers = {
    'Content-Type' : 'application/json'
}

const axiosInstance = axios.create({
    baseURL,
    headers
  });

axiosInstance.interceptors.request.use(
 (config) => {
 const user = JSON.parse(localStorage.getItem('userInfo'))
 const token = user ? user.token : null
 console.log('tolken', token)
 if(token){
    config.headers.Authorization = `Bearer ${token}`
 }
 return config
},
(error) => Promise.reject(error)
)

axios.interceptors.response.use(
    (response) => response,
    (error) =>{ 
        if(error.response.code === 401){
            localStorage.removeItem('token')
        }
        Promise.reject(error)
    }
);

export default axiosInstance;