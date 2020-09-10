import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Alert from './Alert';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from '../redux/actions/authActions';
import store from '../redux/store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Alert />
        <h1>Hello World</h1>
      </div>
    </Provider>
  );
};

export default App;
