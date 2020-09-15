/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { setAlert } from './alertActions';
import {
  GET_MOVIES,
  GET_MOVIE,
  MOVIES_ERROR,
  DELETE_MOVIE,
  ADD_MOVIES,
  UPDATE_MOVIE,
} from './types';

const baseUrl = 'https://immense-dusk-13622.herokuapp.com/';

export const addMovies = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const res = await axios.post(`${baseUrl}/movies/create`, formData, config);
    dispatch({
      type: ADD_MOVIES,
      payload: res.data,
    });
    // dispatch(setAlert('Movie created', 'success'));
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err,
    });
  }
};

export const updateMovie = (id, movie) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  try {
    const res = await axios.put(`${baseUrl}/update/${id}`, movie, config);
    dispatch({
      type: UPDATE_MOVIE,
      payload: res.data,
    });
    // dispatch(setAlert('Movie updated', 'success'));
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err,
    });
  }
};

export const getMovies = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/movies/index`, config);
    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err,
    });
  }
};

export const getMovie = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/show/${id}`, config);
    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err,
    });
  }
};

export const deleteMovie = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    await axios.delete(`${baseUrl}/destroy/${id}`, config);
    dispatch({
      type: DELETE_MOVIE,
      payload: id,
    });
    dispatch(setAlert('Movie Removed', 'success'));
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err,
    });
  }
};
