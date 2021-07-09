import axios from 'axios'
import { parseCookies } from 'nookies';

const { 'yourneustoken':  token } = parseCookies()

const api = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_URL}`,
});

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default api;