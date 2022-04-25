import { ImageSourcePropType } from 'react-native';

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
  id: string;
}

export interface INewInData {
  data: INewIn[];
}

export interface INewIn {
  __v: number;
  _id: string;
  averageRating: number;
  createdAt: string;
  description: string;
  id: string;
  imageUrl: string;
  market_price: number;
  name: string;
  numOfReviews: number;
  price: number;
  updatedAt: string;
}


export interface IHighRating {
  product: IHighRatingProduct[];
}

export interface IAllProduct {
  products: IProductDashboard[];
  count: number;
}

export interface IProductDashboard {
  __v: number;
  _id: string;
  averageRating: number;
  createdAt: string;
  description: string;
  id: string;
  imageUrl: string;
  market_price: number;
  name: string;
  numOfReviews: number;
  price: number;
  updatedAt: string;
  qty: number;
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

export interface IAllProductType {
  __v: number;
  _id: string;
  averageRating: number;
  category: string;
  createdAt: string;
  description: string;
  id: string;
  imageUrl: string;
  market_price: number;
  name: string;
  numOfReviews: number;
  price: number;
  updatedAt: string;
}

export interface IHighRatingProduct {
  _id: string;
  name: string;
  price: number;
  market_price: number;
  description: string;
  imageUrl: string;
  category: string;
  averageRating: number;
  numOfReviews: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ISingleProduct {
  data: ISingleProductObject;
}

export interface ISingleProductObject {
  __v: number;
  _id: string;
  averageRating: number;
  createdAt: string;
  description: string;
  id: string;
  imageUrl: string;
  market_price: number;
  name: string;
  numOfReviews: number;
  price: number;
  reviews: [];
  updatedAt: string;
}

export interface IReview {
  _id: string;
  rating: string;
  comment: string;
  user: string;
  product: {
    _id: string;
    name: string;
    price: number;
    id: string;
  },
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAddToList {
  listName: string;
}

export interface IAddToListItem {
  product: string;
  quantity: number;
}

export interface ICategoryList {
  __v: number;
  _id: string;
  authorID: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface IItem {
  id: number;
  image: ImageSourcePropType;
  rating: number;
  sherzPrice: string;
  marketPrice: string;
  productName: string;
}

export interface ICreateReview {
  rating: string;
  comment: string;
  product: string;
}

export interface IReviews {
  reviews: IReview[];
  count: number;
}

export interface IGetListResponse {
  lists: IList[];
  count: number;
}

export interface IList {
  deliveryDetails?: {
    name: string;
    phoneNo: string;
    deliveryAddress: string;
    deliveryDay: string;
    option: string;
  },
  _id: string;
  listName: string;
  user: string;
  listItems: IListItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  total?: number;
}

export interface IListItem {
  name: string;
  price: number;
  market_price: number;
  quantity: number;
  product: string;
  _id: string;
}

export interface IProductsByCategoryNameResponse {
  products: IProductsByCategoryName[];
  count: number;
}

export interface IProductsByCategoryName {
  __v: number;
  _id: string;
  averageRating: number;
  category: string;
  createdAt: string;
  description: string;
  id: string;
  imageUrl: string;
  market_price: number;
  name: string;
  numOfReviews: number;
  price: number;
  updatedAt: string;
}

export interface IUpdateList {
  [key: string]: IProductDashboard[];
}

export interface ISaveToList {
  items: IProductList[];
}

export interface IProductList {
  product: string;
  quantity: number;
}

export interface IGetLocationResponse {
  deliveryDays: IWeekDays;
  _id: string;
  locationName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IWeekDays {
  day1: string;
  day2: string;
}

export interface ICreateOrder {
  items: IOrderItem[];
  deliveryDetails: IOrderDeliveryDetails;
}

export interface IOrderItem {
  product: string;
  quantity: number;
}

export interface IOrderDeliveryDetails {
  phoneNo: string;
  deliveryAddress: string;
  location: string;
  deliveryDate: string;
}

export interface IUpdateUser {
  phoneNumber: string;
  deliveryDetails: {
    deliveryAddress: string;
    location: string;
    deliveryDay: string;
  }
}

export interface IGetUser {
  user: IUserUpdate;
}

export interface IUserUpdate {
  _id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  role: string;
  verificationToken: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  verified: string;
  deliveryDetails: {
    deliveryAddress: string;
    location: string;
    deliveryDay: string;
  }
}

export interface IFeedback {
  description: string;
  type: string;
}

export interface IOrderHistoryResponse {
  orders: IOrderHistory[];
}

export interface IOrderHistory {
  deliveryDetails: {
    deliveryAddress: string;
    location: string;
    deliveryDay: string;
    phoneNo: string;
  },
  _id: string;
  orderItems: IOrderHistoryItem[];
  subtotal: number;
  total: number;
  status: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IOrderHistoryItem {
  name: string;
  price: number;
  quantity: number;
  product: string;
  _id: string;
}

export interface IFundAccount {
  email: string;
  amount: number;
}

export interface IWallet {
  wallet: {
    _id: string;
    balance: number;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
}

export interface ICreateSubscription {
  plan: string;
  price: number;
}

export interface IPlan {
  plan: IPlanDetails[];
}

export interface IPlanDetails {
  _id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ITransaction {
  _id: string;
  userId: string;
  reference: string;
  email: string;
  chargedAmount: string;
  paidAmount: string;
  status: string;
  transactionType: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}
