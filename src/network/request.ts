import {BaseResponse} from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from '../constants/ConstantString';

// import RNFetchBlob from 'rn-fetch-blob';

// import {navigationContainerRef} from '../../App';

/**
 * Build request header
 * @param secure Indicate wether the endpoint requires authentication
 * @returns header object
 */
export const buildHeader = async (
  secure = false,
  // encrypted = false,
): Promise<HeadersInit_> => {
  const token = await AsyncStorage.getItem(TOKEN);

  let header = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  };
  if (secure) {
    Object.assign(header, {
      Authorization: `Bearer ${token}`,
    });
  }
  return header;
};

/**
 * Converts Json object to url search query
 * @param json object to generate query params from
 * @returns converted json object to url queries
 */
export const makeUrlKeyValuePairs = (json: {[key: string]: any}): string => {
  if (!json || Object.keys(json).length < 1) {
    return '';
  }
  const keys: string[] = Object.keys(json);
  let query = '?';
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    query +=
      encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
  }
  return query.replace(/&$/g, '');
};

type RequestObject = {
  /**
   * Request Method
   */
  type: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

  /**
   * Indicates wether Bearer Token should be appended to the header
   */
  isSecure?: boolean;

  /**
   * Url query params
   */
  queryParams?: {[key: string]: any};

  /**
   * A callback method call response is received
   */
  onResponse?: () => void;

  /**
   * Request body
   */
  data?: {[key: string]: any};

  /**
   * Request Url
   */
  route: string;

  /**
   * Request should be encrypted
   */
  encrypted?: boolean;

  /**
   * Type of encryption to use
   */
  encryptType?: 'user' | 'general';

  /**
   *  pin to use
   */
  pin?: string;

  token?: string;
};

/**
 * The generic request method
 * @param param0 @see RequestObject
 * @returns returns server response
 */
export const requestClan = async <T>({
  onResponse,
  data,
  type = 'GET',
  queryParams,
  route,
  isSecure = false,
}: RequestObject): Promise<BaseResponse<T>> => {
  let response: Response | null = null;

  console.log('✅ Making a request', {
    data,
    type,
    queryParams,
    route,
    isSecure,
  });

  try {
    // Handle get request with params
    let routePlusParams = route;
    if (queryParams) {
      routePlusParams += makeUrlKeyValuePairs(queryParams);
    }
    let body = ['POST', 'DELETE', 'PUT', 'PATCH'].includes(type)
      ? JSON.stringify(data)
      : null;
    // console.log('🔒 Request body', body);

    response = await fetch(routePlusParams.trim(), {
      method: type,
      headers: await buildHeader(isSecure),
      body,
    });

    let header = await buildHeader(isSecure);
    console.log('🔒 header', header);

    if (response) {
      onResponse && onResponse();
      const responseJSON = await response.json();
      console.log(responseJSON);
      if (response.status === 401) {
        // TODO: LOG USER OUT
      }
      return {
        ...responseJSON,
        statusCode: response.status,
        bodyStatusCode: responseJSON.status,
      };
    }
    return {
      exception: 'No response returned!',
      message: 'No response returned!',
      statusCode: 0,
      bodyStatusCode: 0,
    };
  } catch (error: any) {
    if (response) {
      const response2 = response.clone();
      const dd = await response2.text();
      console.log(
        '✅ An error occurred, please try again later.',
        error.message,
        error.text,
        dd,
      );
    } else {
      console.log(
        '✅ An error occurred, please try again later.',
        error.message,
        error.text,
      );
    }
    // TODO: Log error to sentry
    let errorMsg = 'An error occurred, please try again later.';
    return {
      message: errorMsg,
      statusCode: 0,
      bodyStatusCode: 0,
    };
  }
};
