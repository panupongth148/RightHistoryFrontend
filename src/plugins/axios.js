import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: 'https://right-history.herokuapp.com/',
    
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