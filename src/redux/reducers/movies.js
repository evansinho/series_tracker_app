import {
  ADD_MOVIES,
  GET_MOVIES,
  GET_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  PROGRESS_FEED,
} from '../actions/types';

const initialState = {
  movies: [],
  movie: {},
  progress: {},
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: [payload, ...state.posts],
        loading: false,
      };

    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false,
      };

    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false,
      };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== payload),
      };

    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map(movie => (movie.id === payload.id ? payload : movie)),
        loading: false,
      };

    case PROGRESS_FEED:
      return {
        ...state,
        progress: payload,
      };

    default:
      return state;
  }
}
