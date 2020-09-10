import React from 'react';
// import PropTypes from 'prop-types';

const Register = () => (
  <div className="d-flex flex-column justify-content-around align-items-center login-page">
    <div className="row">
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="form-control"
                autoComplete="name"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                className="form-control"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
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
          <div className="form-group">
            <label htmlFor="passwordConfirmation">
              Confirm password
              <input
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                placeholder="Password confirmation"
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
            Create User
          </button>
        </form>
      </div>
    </div>
  </div>
);

// Register.propTypes = {

// };

export default Register;
