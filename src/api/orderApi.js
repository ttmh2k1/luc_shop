import * as request from '~/utils/request';
import { endpoints } from '~/utils/request';
import cookies from 'react-cookies';

export const getOrder = async () => {
  try {
    const res = await request.get(endpoints['order'], {
      headers: {
        Authorization: 'Bearer ' + cookies.load('token'),
      },
    });

    return res.data;
  } catch (e) {}
};

export const getOrderById = async (id) => {
  try {
    const res = await request.get(endpoints['order'] + '/' + id, {
      headers: {
        Authorization: 'Bearer ' + cookies.load('token'),
      },
    });

    return res.data;
  } catch (e) {}
};

export const addOrder = async (obj = {}) => {
  try {
    const res = await request.post(endpoints['order'], obj, {
      headers: {
        Authorization: 'Bearer ' + cookies.load('token'),
      },
    });

    return res.data;
  } catch (e) {}
};

export const addOrderByCart = async (obj = {}) => {
  try {
    const res = await request.post(endpoints['order'] + '/cart', obj, {
      headers: {
        Authorization: 'Bearer ' + cookies.load('token'),
      },
    });

    return res.data;
  } catch (e) {}
};

export const cancelOrder = async (id) => {
  try {
    const res = await request.put(endpoints['order'] + '/cancel/' + id, {
      headers: {
        Authorization: 'Bearer ' + cookies.load('token'),
      },
    });

    return res.data;
  } catch (e) {}
};
