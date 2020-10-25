import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.44.81:5000/api/v1',
});

export const setToken = (token) => {
  if (token) API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete API.defaults.headers.common['Authorization'];
};
