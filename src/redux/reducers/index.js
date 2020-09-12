import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import movies from './movies';

export default combineReducers({
  auth,
  alert,
  movies,
});
