import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 1000,
  baseURL: 'https://reqres.in',
});


export default axiosInstance;
