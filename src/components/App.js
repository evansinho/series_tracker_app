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
import AllSeries from './series/AllSeries';
import EditSeries from './series/EditSeries';
import Progress from '../layout/Progress';
import store from '../redux/store';
import { loadUser } from '../redux/actions/authActions';

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
          <Route path="/addseries" exact component={AddSeries} />
          <Route path="/series/:id" exact component={Series} />
          <Route path="/series" exact component={AllSeries} />
          <Route path="/edit/:id" exact component={EditSeries} />
          <Route path="/progress" exact component={Progress} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
