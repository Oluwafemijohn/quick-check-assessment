import {IUser} from '../types/Type';
import {requestClan} from './request';

export const registerUser = (body: IUser) => {
  return requestClan({
    type: 'POST',
    route: `https://buyoncampus.pythonanywhere.com/api/user/create/`,
    data: body,
  });
};

export const getUser = (body: IUser) => {
  return requestClan({
    type: 'POST',
    route: `https://buyoncampus.pythonanywhere.com/api/user/token/`,
    data: body,
  });
};

export const getList = (token: string) => {
  return requestClan({
    type: 'GET',
    route: `https://buyoncampus.pythonanywhere.com/api/user/list/`,
    token: token,
    isSecure: true,
  });
};
