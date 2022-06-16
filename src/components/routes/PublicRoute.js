import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ isAuth, element: Element, option, ...rest }) => {
  return true ? <Element option={option} /> : <Navigate to="/" />;
};

PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  element: PropTypes.func.isRequired,
};
