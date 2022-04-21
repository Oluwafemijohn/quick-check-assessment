import {atom} from 'recoil';
import {LOGIN_RESPONSE_CACHE_KEY} from '../constants/ConstantString';
import {
  IGetListResponse,
  IGetUser,
  IList,
  IProductDashboard,
  IProductsByCategoryNameResponse,
  IUpdateList,
  IUserData,
  IWallet,
} from '../types/Type';

export const loginResponseState = atom<IUserData>({
  key: LOGIN_RESPONSE_CACHE_KEY,
  default: {
    createdAt: '',
    email: '',
    firstname: '',
    isVerified: false,
    lastname: '',
    role: '',
    id: '',
  },
});

export const getListData = atom<IGetListResponse>({
  key: 'getList',
  default: {
    lists: [],
    count: 0,
  },
});

export const productListByCategoryName = atom<IProductsByCategoryNameResponse>({
  key: 'productListByCategoryName',
  default: {
    products: [],
    count: 0,
  },
});

export const myLists = atom({
  key: 'myLists',
  default: [],
});

export const updateList = atom<IUpdateList>({
  key: 'updateList',
  default: {},
});

export const savedProducts = atom<IProductDashboard[]>({
  key: 'savedProducts',
  default: [],
});

export const userDetails = atom<IGetUser>({
  key: 'userDetails',
  default: {
    user: {
      _id: '',
      firstname: '',
      lastname: '',
      phoneNumber: '',
      email: '',
      role: '',
      verificationToken: '',
      isVerified: false,
      createdAt: '',
      updatedAt: '',
      __v: 0,
      verified: '',
      deliveryDetails: {
        deliveryAddress: '',
        location: '',
        deliveryDay: '',
      },
    },
  },
});

export const wallet = atom<IWallet>({
  key: 'wallet',
  default: {
    wallet: {
      _id: '',
      balance: 0,
      userId: '',
      createdAt: '',
      updatedAt: '',
      __v: 0,
    },
  },
});
