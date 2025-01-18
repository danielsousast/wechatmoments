import axios from 'axios';
import { HttpClientImpl } from './HttpClientImpl';

const BASE_URL = 'http://10.0.2.2:8080';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const httpClient = new HttpClientImpl(axiosInstance);
