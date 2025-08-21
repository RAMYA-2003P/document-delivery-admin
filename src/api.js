import axios from 'axios';

const api = axios.create({
  baseURL: 'https://document-delivery-backend-3.onrender.com/api',
});

export default api;
