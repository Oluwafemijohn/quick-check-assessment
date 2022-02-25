import {atom} from 'recoil';
import {LOGIN_RESPONSE_CACHE_KEY} from '../constants/ConstantString';
import {IUserData} from '../types/Type';

export const loginResponseState = atom<IUserData>({
  key: LOGIN_RESPONSE_CACHE_KEY,
  default: {
    createdAt: '',
    email: '',
    firstname: '',
    isVerified: false,
    lastname: '',
    role: '',
  },
});
