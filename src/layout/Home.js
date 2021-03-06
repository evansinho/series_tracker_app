import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoutIcon from '../images/logout.png';
import { logout } from '../redux/actions/authActions';
import Footer from './Footer';

const Home = ({ auth: { loggedIn, user }, logout }) => (
  <div className="h-100">
    {loggedIn === false ? (
      <div className="d-flex flex-column justify-content-around align-items-center login-page">
        <div className="d-flex flex-column justify-content-center">
          <h1 className="text-white">SERIES TRACKER</h1>
        </div>
        <div className="container d-flex flex-column justify-content-center">
          <Link to="/login" className="btn custom-button">
            Login
          </Link>
          <Link to="/signup" className="btn custom-button">
            Signup
          </Link>
        </div>
      </div>
    ) : (
      <div className="d-flex flex-column h-100">
        <div className="header-title">
          Home
        </div>
        <div className="user-email">
          {user.email}
        </div>
        <div className="logout-button d-flex align-items-center">
          <img className="logout-img" src={logoutIcon} alt="logout" />
          <button type="button" className="btn ml-3" onClick={logout}>Logout</button>
        </div>
        <Footer />
      </div>
    )}
  </div>
);

Home.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Home);
