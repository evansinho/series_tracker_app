import movies from '../../redux/reducers/movies';

describe('movies reducer', () => {
  const initialState = {
    movies: [],
    movie: {},
    progress: {},
    loading: false,
  };
  test('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });
});
