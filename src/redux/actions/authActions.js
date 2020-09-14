/* eslint-disable import/prefer-default-export */

const baseUrl = 'https://immense-dusk-13622.herokuapp.com/';

const setUser = payload => ({ type: 'SET_USER', payload });

// Load user
export const loadUser = () => dispatch => {
  fetch(`${baseUrl}/auto_login`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      console.log(data);
      dispatch(setUser(data.user));
    });
};

// Register
export const register = userInfo => dispatch => {
  fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
};

// Login
export const login = userInfo => dispatch => {
  fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
};

// Logout
export const logout = () => ({ type: 'LOG_OUT' });
