/* eslint-disable no-undef */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const Register = () => {
  const { formData, setFormData } = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData || {};

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDafault();
    // const newUser = { name, email, password };
  };

  return (
    <div className="d-flex flex-column justify-content-around align-items-center login-page">
      <div className="row">
        <div>
          <form onSubmit={onSubmit}>
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
                  value={name}
                  onChange={e => onChange(e)}
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
                  value={email}
                  onChange={e => onChange(e)}
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
                  value={password}
                  onChange={e => onChange(e)}
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
};

// Register.propTypes = {

// };

export default Register;
