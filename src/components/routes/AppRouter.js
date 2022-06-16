import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, PageNotFound } from '../pages';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(true);
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute element={Login} isAuth={isAuth} />} />
        <Route path="/dashboard/*" element={<PrivateRoute element={DashboardRouter} isAuth={isAuth} />} />
        <Route path="/page-error" element={<PublicRoute element={PageNotFound} isAuth={isAuth} />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="/page-error" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
