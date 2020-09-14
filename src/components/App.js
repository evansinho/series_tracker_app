import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Alert from './Alert';
import Home from '../layout/Home';
import Login from './auth/Login';
import setAuthToken from '../utils/setAuthToken';
import Register from './auth/Register';
import AddSeries from './series/AddSeries';
import Series from './series/Series';
import { loadUser } from '../redux/actions/authActions';
import store from '../redux/store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Route path="/series" exact component={AddSeries} />
          <Route path="/series/:id" exact component={Series} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
