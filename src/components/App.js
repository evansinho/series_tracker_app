import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Alert from './Alert';
import Home from '../layout/Home';
import Login from './auth/Login';
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
      <Router>
        <Alert />
        <Route path="/" exact component={Home} />
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
