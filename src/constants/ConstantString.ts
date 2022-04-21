import {RadioButtonProps} from 'react-native-radio-buttons-group';

export const TOKEN = '@TOKEN';
export const CELL_COUNT = 4;
export const LOGIN_RESPONSE_CACHE_KEY = '@LOGIN_RESPONSE_CACHE_KEY';

export const array = ['Cereal', 'Beverages', 'Drinks'];

export const category = [
  {
    id: 1,
    image: require('../../assets/popular-image.png'),
    rating: 3,
    sherzPrice: '1500',
    marketPrice: '1,800',
    productName: 'Pure Irish Butter',
  },
  {
    id: 2,
    image: require('../../assets/popular-image.png'),
    rating: 5,
    sherzPrice: '800',
    marketPrice: '1,800',
    productName: 'Product Name',
  },
  {
    id: 3,
    image: require('../../assets/popular-image.png'),
    rating: 2,
    sherzPrice: '800',
    marketPrice: '1,800',
    productName: 'Product Name',
  },
  {
    id: 4,
    image: require('../../assets/popular-image.png'),
    rating: 2,
    sherzPrice: '800',
    marketPrice: '1,800',
    productName: 'Product Name',
  },
];

export const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Ascending',
    value: 'Ascending',
    size: 30,
  },
  {
    id: '2',
    label: 'Decending',
    value: 'Decending',
  },
];

export const listArray = ['Monthlies', 'Extral'];

export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const deliveryDetails = [
  'Ojota',
  'Lekki',
  'Ikeja',
  'Surulere',
  'Ikorodu',
  'Epe',
];

export const deliverySummary = [
  {
    id: 1,
    productName: 'Pure Irish Butter',
    quantity: '1',
    membershipPrice: '1,500',
    total: '4,500',
    retailPrice: '4,950',
  },
  {
    id: 2,
    productName: 'Pure Irish Butter',
    quantity: '1',
    membershipPrice: '1,500',
    total: '4,500',
    retailPrice: '4,950',
  },
  {
    id: 3,
    productName: 'Pure Irish Butter',
    quantity: '1',
    membershipPrice: '1,500',
    total: '4,500',
    retailPrice: '4,950',
  },
  {
    id: 4,
    productName: 'Pure Irish Butter',
    quantity: '1',
    membershipPrice: '1,500',
    total: '4,500',
    retailPrice: '4,950',
  },
  {
    id: 5,
    productName: 'Pure Irish Butter',
    quantity: '1',
    membershipPrice: '1,500',
    total: '4,500',
    retailPrice: '4,950',
  },
];

export const notificationMessages = [
  {
    id: 1,
    title: 'You are welcome',
    message:
      'Hi there, we are glad to have you here. It promises to be a great time! Cheers.',
    time: '22 Nov, 2022 at 09:15am',
  },
  {
    id: 2,
    title: 'We have received your order!',
    message: 'Thank you for using Sherz, your order has just been confirmed.',
    time: '22 Nov, 2022 at 09:15am',
  },
  {
    id: 3,
    title: 'We have received your order!',
    message: 'Thank you for using Sherz, your order has just been confirmed.',
    time: '22 Nov, 2022 at 09:15am',
  },
  {
    id: 4,
    title: 'We have received your order!',
    message: 'Thank you for using Sherz, your order has just been confirmed.',
    time: '22 Nov, 2022 at 09:15am',
  },
];

export const walletSummary = [
  {
    id: 1,
    title: 'Subscription fee',
    month: 'January',
    amount: '1,500',
  },
  {
    id: 2,
    title: 'Subscription fee',
    month: 'February',
    amount: '2,500',
  },
  {
    id: 1,
    title: 'Subscription fee',
    month: 'April',
    amount: '2,000',
  },
  {
    id: 1,
    title: 'Subscription fee',
    month: 'May',
    amount: '1,500',
  },
];

export const inviteFriends =
  'Invite your friends, family and get 15% discount off service charge.';
export const referFriend = 'Refer a friend';

export const friends = [
  {
    id: 1,
    img: require('../../assets/friends-img1.png'),
    name: 'Ajayi Davids',
  },
  {
    id: 2,
    img: require('../../assets/friends-img2.png'),
    name: 'Angel Damson',
  },
  {
    id: 3,
    img: require('../../assets/friends-img3.png'),
    name: 'Christine Chris',
  },
  {
    id: 4,
    img: require('../../assets/friends-img4.png'),
    name: 'Chuk Denzel',
  },
];

export const orderHistory = [
  {
    id: 1,
    date: '28 Nov 2021',
    status: 'Pending',
    tradeId: '#ID001',
  },
  {
    id: 2,
    date: '28 Nov 2021',
    status: 'Delivered',
    tradeId: '#ID001',
  },
  {
    id: 3,
    date: '28 Nov 2021',
    status: 'Delivered',
    tradeId: '#ID001',
  },
  {
    id: 4,
    date: '28 Nov 2021',
    status: 'Delivered',
    tradeId: '#ID001',
  },
];

export const orderHistoryDetails = [
  {
    id: 1,
    image: require('../../assets/popular-image.png'),
    name: 'Pure Irish Butter',
    price: 'N1,500',
  },
  {
    id: 2,
    image: require('../../assets/popular-image.png'),
    name: 'Pure Irish Butter',
    price: 'N1,500',
  },
  {
    id: 3,
    image: require('../../assets/popular-image.png'),
    name: 'Pure Irish Butter',
    price: 'N1,500',
  },
  {
    id: 4,
    image: require('../../assets/popular-image.png'),
    name: 'Pure Irish Butter',
    price: 'N1,500',
  },
  {
    id: 5,
    image: require('../../assets/popular-image.png'),
    name: 'Pure Irish Butter',
    price: 'N1,500',
  },
];
