/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  return (
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
      <div key={alert.id}>
        { alert.msg }
      </div>
    )));
};

Alert.propTypes = {
  alerts: PropTypes.shape([]).isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, null)(Alert);
