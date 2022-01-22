import {BASE_URL} from '../constants/NetworkConstants';
import {ISignIn, IUser, IVerifyUser} from '../types/Type';

export const registerUser = async (user: IUser) => {
  return await fetch(`${BASE_URL}api/v1/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...user, phoneNo: '08020324354'}),
  }).then(res => res.json());
};

export const verifyUser = async (user: IVerifyUser) => {
  return await fetch(`${BASE_URL}api/v1/auth/verify-account`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => res.json());
};

export const signInUser = async (user: ISignIn) => {
  return await fetch(`${BASE_URL}api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => res.json());
};
