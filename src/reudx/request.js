import Axios from "axios";

const API_ROOT = 'http://192.168.1.20:8000/api';
const responseBody  = response => response.data;

export const request ={
    get: (url)=> Axios.get(`${API_ROOT}${url}`).then(responseBody),
    post: (url, data = null)=> Axios.post(`${API_ROOT}${url}`, data).then(responseBody)
}