import React from 'react';
// import PropTypes from 'prop-types';

const Login = () => (
  <div className="d-flex flex-column justify-content-around align-items-center login-page">
    <div className="row">
      <div>
        <form>
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

// Login.propTypes = {

// };

export default Login;
