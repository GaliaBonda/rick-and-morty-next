import axios from 'axios';
import api from '../common/constants/api';

const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use((res) => {
  return res.data;
});

export default instance;
