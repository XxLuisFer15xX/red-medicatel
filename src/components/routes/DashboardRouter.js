import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DrawerNavigation } from '../organisms';
import Home from '../pages/Home';

export const DashboardRouter = () => {
  return (
    <div>
      <DrawerNavigation />
      <div>
        <Routes>
          <Route exact path="/Home" component={Home} />
          <Navigate to="/Home" />
        </Routes>
      </div>
    </div>
  );
};
