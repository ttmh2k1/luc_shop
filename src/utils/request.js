import axios from 'axios';

export let endpoints = {
  login: 'buyer/login',
  register: 'buyer/signup',
  getUser: 'buyer/profile',
  emailOTP: 'otp/email',
  phoneOTP: 'otp/phone',
  currentEmailOTP: 'buyer/otp/email',
  currentPhoneOTP: 'buyer/otp/phone',
  resetPassword: 'buyer/reset-password',
  updateProfile: 'buyer/profile',
  changePassword: 'buyer/profile/password',
  order: 'buyer/order',
  address: 'buyer/delivery-address',
  getCategories: 'product-category',
  getProduct: 'product',
  getBestSeller: 'product/most-sold',
  onSale: 'product/sale',
  getBestView: 'product/most-viewed',
  getNewArrival: 'product/lasted',
  cart: 'buyer/cart-detail',
  sourceAddress: 'address',
};

const request = axios.create({
  baseURL: 'http://localhost:8080/api/',
  // baseURL: 'http://mighty-birds-know-118-71-222-255.loca.lt/api/',
});

export const get = async (path, options = []) => {
  const response = await request.get(path, options);
  return response.data;
};

export const post = async (path, data, headers) => {
  const response = await request.post(path, data, headers);
  return response.data;
};

export const put = async (path, data, headers) => {
  console.log(data);
  const response = await request.put(path, data, headers);
  return response.data;
};

export const rqdelete = async (path, options = []) => {
  const response = await request.delete(path, options);
  return response.data;
};

export default request;
