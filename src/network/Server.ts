import {BASE_URL_AND_TAIL} from '../constants/NetworkConstants';
import {
  IAddToList,
  ICreateOrder,
  ICreateReview,
  ICreateSubscription,
  IFeedback,
  IFundAccount,
  IPasswordReset,
  ISaveToList,
  ISendOtp,
  ISignIn,
  IUpdateUser,
  IUser,
  IVerifyUser,
  IVerifyUserPasswordReset,
} from '../types/Type';
import {requestClan} from './request';

export const registerUser = (body: IUser) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/auth/register`,
    data: body,
  });
};

export const verifyUser = (user: IVerifyUser) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/auth/verifyOtp`,
    data: user,
  });
};
export const verifyUserPasswordReset = (user: IVerifyUserPasswordReset) => {
  console.log('verifyUserPasswordReset', user);
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/auth/verifyOtp`,
    data: user,
  });
};

export const sendOtp = (user: ISendOtp) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/auth/sendOtp`,
    data: user,
  });
};

export const signIn = (user: ISignIn) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/auth/login`,
    data: user,
  });
};
export const passwordReset = (user: IPasswordReset) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/auth/reset-password`,
    data: user,
  });
};

export const allProductResponse = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/products`,
    isSecure: true,
  });
};

export const getHighestRating = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/products/highest_rating`,
    isSecure: true,
  });
};

export const getNewIn = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/products/new_in`,
    isSecure: true,
  });
};

export const productDetails = (productId: string) => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/products/${productId}`,
    isSecure: true,
  });
};
export const addToList = (list: IAddToList) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/lists`,
    isSecure: true,
    data: list,
  });
};
export const getList = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/lists`,
    isSecure: true,
  });
};

//not done yet
export const productCategory = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/categories`,
    isSecure: true,
  });
};

export const getProductReviews = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/reviews`,
    isSecure: true,
  });
};

export const createProductReview = (body: ICreateReview) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/reviews`,
    isSecure: true,
    data: body,
  });
};

export const getProductReview = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/reviews`,
    isSecure: true,
  });
};

export const getProductByCategoryName = (category: string) => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/products/category?search=${category}`,
    isSecure: true,
  });
};

export const uploadItemsToList = (listId: string, body: ISaveToList) => {
  return requestClan({
    type: 'PATCH',
    route: `${BASE_URL_AND_TAIL}/lists/${listId}`,
    isSecure: true,
    data: body,
  });
};

export const getLocations = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/locations`,
    isSecure: true,
  });
};

export const getLocationsRegion = (region: string) => {
  return requestClan({
    type: 'GET',
    isSecure: true,
    route: `${BASE_URL_AND_TAIL}/locations?search=${region}`,
  });
};

export const createOrder = (body: ICreateOrder) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/orders`,
    isSecure: true,
    data: body,
  });
};
export const getCurrentUserOrders = () => {
  return requestClan({
    type: 'GET',
    route: `${BASE_URL_AND_TAIL}/orders/showAllMyOrders`,
    isSecure: true,
  });
};

export const updateUser = (body: IUpdateUser) => {
  return requestClan({
    type: 'PATCH',
    route: `${BASE_URL_AND_TAIL}/users/update`,
    isSecure: true,
    data: body,
  });
};

export const getUser = (userId: string) => {
  return requestClan({
    type: 'GET',
    isSecure: true,
    route: `${BASE_URL_AND_TAIL}/users/show_me`,
  });
};

export const postFeedBack = (body: IFeedback) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/feedback`,
    isSecure: true,
    data: body,
  });
};

export const fundAccount = (body: IFundAccount) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL_AND_TAIL}/payment/initialize`,
    isSecure: true,
    data: body,
  });
};

export const getWallet = () => {
  return requestClan({
    type: 'GET',
    isSecure: true,
    route: `${BASE_URL_AND_TAIL}/wallet`,
  });
};

export const createSubscription = (body: ICreateSubscription) => {
  return requestClan({
    type: 'POST',
    isSecure: true,
    data: body,
    route: `${BASE_URL_AND_TAIL}/subscribe`,
  });
};

export const getPlans = () => {
  return requestClan({
    type: 'GET',
    isSecure: true,
    route: `${BASE_URL_AND_TAIL}/plans`,
  });
};

export const getTransaction = () => {
  return requestClan({
    type: 'GET',
    isSecure: true,
    route: `${BASE_URL_AND_TAIL}/transaction/me`,
  });
};
