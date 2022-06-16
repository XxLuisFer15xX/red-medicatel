import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Login, PageNotFound } from '../pages';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = ({ isAuth = false }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute element={Login} isAuth={isAuth} />}
        />
        <Route
          path="/dashboard/*"
          element={<PrivateRoute element={DashboardRouter} isAuth={isAuth} />}
        />
        <Route path="/page-error" element={<PageNotFound />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="/page-error" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
