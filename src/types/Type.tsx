import {ImageSourcePropType} from 'react-native';

export interface IUser {
  firstname: string;
  email: string;
  lastname: string;
  password: string;
  // phoneNumber: string;
}

export interface IVerifyUser {
  email: string;
  verificationToken: string;
}
export interface IVerifyUserPasswordReset {
  email: string;
  verificationToken: string;
  type: string;
}

export interface ISignIn {
  email: string;
  password: string;
}
export interface IPasswordReset {
  email: string;
  newPassword: string;
}

export interface ISendOtp {
  email: string;
}

export interface ILoginResponse {
  errors: any;
  message: string;
  payload: IUserData;
  statusCode: number;
  token: string;
}

export interface IUserData {
  createdAt: string;
  email: string;
  firstname: string;
  isVerified: boolean;
  lastname: string;
  role: string;
}

export interface IProductResponse {
  bodyStatusCode: number;
  count: number;
  products: IProduct[];
  statusCode: number;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  market_price: number;
  description: string;
  imageUrl: string;
  category: string;
  company: string;
  colors: string[];
  featured: boolean;
  inventory: number;
  averageRating: number;
  numOfReviews: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  reviews: IReview[];
}

export interface ISingleProduct {
  product: ISingleProductObject;
}

export interface ISingleProductObject {
  _id: string;
  name: string;
  price: number;
  market_price: number;
  description: string;
  imageurl: string;
  category: string;
  company: string;
  colors: string[];
  featured: boolean;
  inventory: number;
  averageRating: number;
  numOfReviews: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  reviews: IReview[];
  // reviews: string[];
  id: string;
}

export interface IReview {
  _id: string;
}

export interface IAddToList {
  lists: IAddToListItem[];
}

export interface IAddToListItem {
  product: string;
  quantity: number;
}

export interface ICategoryList {
  _id: string;
  // name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  authorID: string;
  categoryName: string;
}

export interface IItem {
  id: number;
  image: ImageSourcePropType;
  rating: number;
  sherzPrice: string;
  marketPrice: string;
  productName: string;
}
