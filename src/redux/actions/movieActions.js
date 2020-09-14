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
    console.log(err);
    dispatch({
      type: MOVIES_ERROR,
      payload: err,
    });
  }
};

export const updateMovies = movie => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const res = await axios.put(`${baseUrl}/update/${movie.id}`, movie, config);
    dispatch({
      type: UPDATE_MOVIE,
      payload: res.data,
    });
    dispatch(setAlert('Movie updated', 'success'));
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getMovies = () => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/movies/index`);
    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getMovie = id => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/show/${id}`);
    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteMovie = id => async dispatch => {
  try {
    await axios.delete(`${baseUrl}/destroy/${id}`);
    dispatch({
      type: DELETE_MOVIE,
      payload: id,
    });
    dispatch(setAlert('Movie Removed', 'success'));
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
