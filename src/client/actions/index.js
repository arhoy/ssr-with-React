// course api: // https://react-ssr-api.herokuapp.com/users

import axios from 'axios';

import { FETCH_USERS } from './types';

export const fetchUsers = () => async dispatch => {
  try {
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
    dispatch({
      type: FETCH_USERS,
      payload: res.data
    });
  } catch (error) {}
};
