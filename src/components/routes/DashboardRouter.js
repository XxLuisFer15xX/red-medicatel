import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DrawerNavigation } from '../organisms';
import Toolbar from '@mui/material/Toolbar';
import { Colaborators, Home } from '../pages';

const drawerWidth = 400;

export const DashboardRouter = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <DrawerNavigation
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <div
        style={{
          paddingLeft: `${drawerWidth}px`,
          width: '100%',
        }}>
        <div className='h-24 my-10'></div>
        <div style={{ overflowY: 'auto' }}>
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
