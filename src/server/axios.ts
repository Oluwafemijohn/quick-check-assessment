import axios from 'axios';

const END_POINT = 'https://hacker-news.firebaseio.com/v0/';

export const axiosInstance = axios.create({
  baseURL: END_POINT,
  timeout: 2 * 60 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
export const axiosWithAuthInstance = axios.create({
  baseURL: END_POINT,
  timeout: 2 * 60 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
