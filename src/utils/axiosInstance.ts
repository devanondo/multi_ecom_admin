import axios from 'axios';
import Cookies from 'js-cookie';

const AUTH_TOKEN = Cookies.get('a4weopkd1287u65');

const axiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
});

axiosInstance.defaults.headers.common['authorization'] = AUTH_TOKEN;

export default axiosInstance;
