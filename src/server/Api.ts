import {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {API_KEY} from '../constants/Constants';
import {axiosInstance} from './axios';

export const errorHandler = (error: {
  response: {data: any; status: any; headers: any};
  request: any;
  message: any;
  config: any;
}) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('Error', error.response.data.message, error.config.url);
    console.log('error.response.data', error.response.data);
    console.log('error.response.status', error.response.status);
    console.log('error.response.status', error.config.url);
    if (error.response.status === 500) {
      Alert.alert('Error', 'Internal Server Error');
    } else if (error.response.status === 404) {
      Alert.alert('Error', 'Not Found');
    } else if (
      error.response.status === 400 &&
      error.config.url === 'sms/member_subscription/'
    ) {
    } else {
      Alert.alert('Error', error.response.data.message);
    }
    // console.log('error.response.headers', error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('error.request', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error-Something-happened', error.message);
  }
};

export const handleSuccess = (response: AxiosResponse<any, any>) => {
  console.log(
    'success-response-response',
    JSON.stringify(response.data),
    response.status,
    response.config.url,
  );
  return response.data;
};

axiosInstance.interceptors.request.use(
  async config => {
    console.log('config', config.data, config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const getTopStories = () => axiosInstance.get('topstories');
export const getMovies = (page: number) =>
  axiosInstance.get(
    `https://api.themoviedb.org/3/discover/movie${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`,
  );
