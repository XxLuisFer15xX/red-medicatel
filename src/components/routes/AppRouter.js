import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login } from '../pages';
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
        <Route path="/Login" element={<PublicRoute element={Login} isAuth={isAuth} />} />
        <Route path="/" element={<PrivateRoute element={Home} isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
