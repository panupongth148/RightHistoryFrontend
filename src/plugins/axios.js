import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://right-history-backend-y4ni.vercel.app/',
    
})
instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token_right')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance