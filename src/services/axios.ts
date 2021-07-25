import axios from 'axios'
import { parseCookies } from 'nookies';

const { 'yourneustoken': token } = parseCookies()

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL
});

// api.defaults.headers.common['Authorization'] = token;

// Add a request interceptor
api.interceptors.request.use(function (config) {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default api;