/* eslint-disable import/prefer-default-export */
import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from '../../utils/setAuthToken';
import { REGISTER_SUCCESSFUL, REGISTER_FAIL } from './types';

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('./signup', body, config);
    dispatch({
      type: REGISTER_SUCCESSFUL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
