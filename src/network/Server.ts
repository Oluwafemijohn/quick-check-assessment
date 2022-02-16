import {BASE_URL} from '../constants/NetworkConstants';
import {
  ISendOtp,
  ISignIn,
  IUser,
  IVerifyUser,
  IVerifyUserPasswordReset,
} from '../types/Type';
import {requestClan} from './request';

export const registerUser = (body: IUser) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL}api/v1/auth/register`,
    data: body,
  });
};

export const verifyUser = (user: IVerifyUser) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL}api/v1/auth/verifyOtp`,
    data: user,
  });
};
export const verifyUserPasswordReset = (user: IVerifyUserPasswordReset) => {
  console.log('verifyUserPasswordReset', user);
  return requestClan({
    type: 'POST',
    route: `${BASE_URL}api/v1/auth/verifyOtp`,
    data: user,
  });
};

export const sendOtp = (user: ISendOtp) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL}api/v1/auth/sendOtp`,
    data: user,
  });
};

export const signIn = (user: ISignIn) => {
  return requestClan({
    type: 'POST',
    route: `${BASE_URL}api/v1/auth/login`,
    data: user,
  });
};
