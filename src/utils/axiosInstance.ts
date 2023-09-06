import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
});

export const getCookie = (): string | undefined => {
    return Cookies.get('a4weopkd1287u65');
};

axiosInstance.defaults.headers.common['authorization'] = getCookie();

export default axiosInstance;

export const getHeaders = (): Record<string, string | undefined> => {
    return {
        'Content-Type': 'application/json',
        authorization: getCookie() || '',
    };
};
