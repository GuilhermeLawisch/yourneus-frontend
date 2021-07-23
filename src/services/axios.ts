import axios from 'axios'
import { parseCookies } from 'nookies';

const { 'yourneustoken': token } = parseCookies()

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL
});

// api.defaults.headers.common['Authorization'] = token;

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default api;