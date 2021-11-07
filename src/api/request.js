import axios from 'axios';
import store from '@/store/index';

const instance = axios.create({
  baseURL: 'https://dev.tapgo.cc/test/',
});

instance.interceptors.request.use((config) => {
  const token = store.state.auth.token;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default instance;
