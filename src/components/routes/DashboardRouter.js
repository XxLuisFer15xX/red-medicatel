import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DrawerNavigation } from '../organisms';
import Toolbar from '@mui/material/Toolbar';
import { Colaborators, Home } from '../pages';

const drawerWidth = 240;

export const DashboardRouter = () => {
  return (
    <div>
      <DrawerNavigation drawerWidth={drawerWidth} />
      <div style={{paddingLeft: `${drawerWidth}px`, width: '100%'}}>
        <Toolbar />
        <div style={{overflowY: 'auto'}}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/colaborators" element={<Colaborators />} />
            <Route path="/" element={<Navigate to="/dashboard/home" />} />
            <Route path="*" element={<Navigate to="/page-error" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};