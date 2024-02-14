import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL, TOKEN} from './config';

let cookie = null;

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
  responseType: 'json',
  withCredentials: true, // enable use of cookies outside web browser
});

// this will check if cookies are there for every request and send request
API.interceptors.request.use(async config => {
  cookie = await AsyncStorage.getItem('cookie');
  if (cookie) {
    config.headers.Cookie = cookie;
  }
  return config;
});
