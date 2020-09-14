import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';

const Login = ({ login, authenticated: { loggedIn } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="d-flex flex-column justify-content-around align-items-center login-page">
      <div className="row">
        <div>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="userEmail">
                Email
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="E-mail"
                  className="form-control"
                  autoComplete="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="userPassword">
                Password
                <input
                  type="password"
                  name="password"
                  id="userPassword"
                  placeholder="Password"
                  className="form-control"
                  autoComplete="new-password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </label>
              <small className="form-text text-muted">
                At least 6 characters
              </small>
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  authenticated: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
